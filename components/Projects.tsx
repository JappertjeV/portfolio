import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  status: "completed" | "wip";
}

const projects: Project[] = [
  {
    title: "Switch Automation Hub",
    description:
      "A collection of Enfocus Switch scripts and flows that automate preflight, PDF processing, and file routing in print production workflows. Reduces manual touchpoints by ~80%.",
    tags: ["JavaScript", "Enfocus Switch", "PDF", "Automation"],
    github: "https://github.com/JappertjeV",
    demo: null,
    status: "completed",
  },
  {
    title: "n8n Workflow Templates",
    description:
      "Ready-to-import n8n workflow templates for common integration patterns: CRM sync, invoice generation, Slack notifications, and webhook-to-database pipelines.",
    tags: ["n8n", "REST APIs", "Node.js", "Automation"],
    github: "https://github.com/JappertjeV",
    demo: null,
    status: "wip",
  },
  {
    title: "Portfolio Site",
    description:
      "This site — built with Next.js 15, Tailwind CSS v4, and Framer Motion. Features GitHub API integration for live project display and a Markdown-powered blog.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/JappertjeV",
    demo: "https://jasperveldhuizen.nl",
    status: "completed",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-indigo-400 text-sm font-mono font-medium">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">Projects</h2>
          </div>
          <div className="w-12 h-px bg-indigo-500 mb-4" />
          <p className="text-zinc-400 mb-12 max-w-xl">
            A selection of things I&apos;ve built. More on my{" "}
            <Link href="/projects" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">
              GitHub projects page
            </Link>
            .
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 + i * 0.1}>
              <div className="group flex flex-col h-full rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-indigo-500/5">
                {/* Top bar */}
                <div className="h-1 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col flex-1 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-zinc-100 text-lg leading-snug">
                      {project.title}
                    </h3>
                    {project.status === "wip" && (
                      <span className="flex-shrink-0 ml-2 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
                        WIP
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700/50 text-zinc-400 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 text-sm transition-colors"
                    >
                      <Github size={15} />
                      <span>Source</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 text-sm transition-colors ml-auto"
                      >
                        <ExternalLink size={15} />
                        <span>Live demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            See all projects from GitHub
            <ArrowRight size={15} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
