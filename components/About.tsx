import { FadeIn } from "./FadeIn";
import { GraduationCap, Briefcase, MapPin, Zap } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "HBO-ICT Student",
    description: "Studying at Windesheim (2025–2029), combining process thinking with hands-on technical skills.",
  },
  {
    icon: Briefcase,
    title: "Process Improvement Engineer",
    description: "Working at Veldhuizen Grafisch Effect BV, focusing on Enfocus Switch automation and API development.",
  },
  {
    icon: Zap,
    title: "Automation-First",
    description: "I believe the best code is code that runs without you. From n8n workflows to custom scripts, I make systems work smarter.",
  },
  {
    icon: MapPin,
    title: "Based in the Netherlands",
    description: "Working from Barneveld / Voorthuizen. Remote-friendly and open to freelance projects worldwide.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-indigo-400 text-sm font-mono font-medium">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">About me</h2>
          </div>
          <div className="w-12 h-px bg-indigo-500 mb-12" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                I&apos;m a <span className="text-zinc-200 font-medium">19-year-old developer</span> from the Netherlands with a passion for automation, clean APIs, and making workflows that just{" "}
                <em className="text-indigo-400 not-italic font-medium">work</em>.
              </p>
              <p>
                During the day I study ICT at Windesheim and work as a Process Improvement Engineer — building Enfocus Switch automations and integrations that save hours of manual work. Outside of that, I explore Docker, Linux, and anything that helps me ship faster.
              </p>
              <p>
                I started with 3D printing and Autodesk Fusion 360 in school, moved into WordPress development, and eventually found my groove in backend automation and API work. Each step fed into the next.
              </p>
              <p>
                Right now I&apos;m deepening my knowledge in JavaScript/TypeScript, Python, and API design — and building projects that combine all three.
              </p>
            </div>
          </FadeIn>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={0.15 + i * 0.08}>
                <div className="group p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/40 hover:bg-zinc-900/80 transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 transition-colors">
                    <item.icon size={18} className="text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-zinc-200 mb-1 text-sm">{item.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
