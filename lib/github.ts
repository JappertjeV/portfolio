export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

const GITHUB_USERNAME = "JappertjeV";

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    // Use GITHUB_TOKEN env var if set (avoids rate limiting)
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50&type=owner`,
      {
        headers,
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      console.error("GitHub API error:", res.status, res.statusText);
      return [];
    }

    const repos: GitHubRepo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
}

export async function getPinnedRepos(): Promise<GitHubRepo[]> {
  const repos = await getGitHubRepos();
  // Return top 6 by stars, then by update date
  return repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 6);
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Rust: "#dea584",
    Go: "#00ADD8",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Shell: "#89e051",
    Dockerfile: "#384d54",
  };
  return colors[language ?? ""] ?? "#6b7280";
}
