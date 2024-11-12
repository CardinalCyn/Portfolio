import {
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  // SiGit,
  SiGithub,
  SiFlask,
  SiPython,
} from "react-icons/si";

const skillsData = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  // { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "Github", icon: SiGithub, color: "text-gray-800 dark:text-gray-200" },
  { name: "Flask", icon: SiFlask, color: "text-gray-700 dark:text-gray-300" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-background text-foreground dark:bg-gray-1900 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <skill.icon className={`text-4xl ${skill.color} mb-2`} />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
