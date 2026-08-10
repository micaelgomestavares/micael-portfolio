import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiDocker,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGo,
  SiGraphql,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscAzure, VscCode } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

type Skill = { name: string; icon: IconType };
type SkillGroup = { categoryKey: string; skills: Skill[] };

const skillGroups: SkillGroup[] = [
  {
    categoryKey: "language",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C#", icon: SiSharp },
      { name: "Go", icon: SiGo },
    ],
  },
  {
    categoryKey: "frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Motion", icon: SiFramer },
    ],
  },
  {
    categoryKey: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    categoryKey: "infrastructure",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Azure", icon: VscAzure },
      { name: "Vercel", icon: SiVercel },
      { name: "Cloudflare", icon: SiCloudflare },
    ],
  },
  {
    categoryKey: "workflow",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscCode },
    ],
  },
  {
    categoryKey: "design",
    skills: [{ name: "Figma", icon: SiFigma }],
  },
];

export function SkillsSection() {
  const { t } = useTranslation("common");
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const groups = expanded ? skillGroups : skillGroups.slice(0, 4);

  return (
    <section
      className="skills-section section-shell"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="skills-heading">
        <h2 id="skills-title">{t("main.skills.title")}</h2>
        <button
          className="skills-toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls="skills-matrix"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded
            ? t("main.skills.showLess")
            : t("main.skills.showMore")}
          <motion.span
            aria-hidden="true"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          >
            <ChevronDown />
          </motion.span>
        </button>
      </div>

      <motion.div layout={!reduceMotion} id="skills-matrix" className="skills-matrix">
        <AnimatePresence initial={false}>
          {groups.map((group, groupIndex) => (
            <motion.div
              layout={!reduceMotion}
              className="skill-row"
              key={group.categoryKey}
              initial={
                reduceMotion
                  ? false
                  : groupIndex > 3
                    ? { opacity: 0, height: 0, y: -16 }
                    : { y: 24 }
              }
              whileInView={{ y: 0 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: reduceMotion ? 0 : 0.52, delay: groupIndex * 0.035 }}
            >
              <p>{t(`main.skills.categories.${group.categoryKey}`)}</p>
              <ul>
                {group.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.li
                      key={skill.name}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { y: -3, fontVariationSettings: '"wght" 680' }
                      }
                      transition={{ duration: 0.22 }}
                    >
                      <Icon aria-hidden="true" />
                      <span>{skill.name}</span>
                      <i
                        aria-hidden="true"
                        style={{ "--skill-delay": `${skillIndex * 34}ms` } as React.CSSProperties}
                      />
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
