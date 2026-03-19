import { FadeIn } from "./FadeIn";

interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

const skills: Skill[] = [
  { name: "JavaScript", icon: "JS", color: "#f7df1e", category: "Language" },
  { name: "TypeScript", icon: "TS", color: "#3178c6", category: "Language" },
  { name: "Python", icon: "PY", color: "#3572A5", category: "Language" },
  { name: "Bash", icon: "SH", color: "#89e051", category: "Language" },
  { name: "Node.js", icon: "⬡", color: "#68a063", category: "Runtime" },
  { name: "Docker", icon: "🐳", color: "#2496ed", category: "DevOps" },
  { name: "Linux", icon: "🐧", color: "#fcc624", category: "DevOps" },
  { name: "Git", icon: "⎇", color: "#f05032", category: "DevOps" },
  { name: "n8n", icon: "n8", color: "#ea4b71", category: "Automation" },
  { name: "API Dev", icon: "⚡", color: "#6366f1", category: "Automation" },
  { name: "Enfocus Switch", icon: "SW", color: "#0066cc", category: "Automation" },
  { name: "WordPress", icon: "WP", color: "#21759b", category: "Web" },
];

const categories = ["Language", "Runtime", "DevOps", "Automation", "Web"];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-indigo-400 text-sm font-mono font-medium">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">Skills</h2>
          </div>
          <div className="w-12 h-px bg-indigo-500 mb-12" />
        </FadeIn>

        {categories.map((category, ci) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <FadeIn key={category} delay={0.05 * ci} className="mb-10">
              <h3 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, i) => (
                  <FadeIn key={skill.name} delay={0.05 * ci + 0.04 * i} direction="none">
                    <div className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-200 cursor-default select-none">
                      {/* Icon badge */}
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 text-zinc-900"
                        style={{ backgroundColor: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-zinc-300 text-sm font-medium group-hover:text-zinc-100 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
