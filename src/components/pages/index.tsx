import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../language-selector";
import { ModeToggle } from "../mode-toggle";
import { SkillsSection } from "../SkillsSection";

const projectDefinitions = [
  {
    key: "mitech",
    title: "Mitech",
    url: "https://mitech.com.br/",
    image: "/mitech.png",
    techs: ["Next.js", "TypeScript", "UI Engineering"],
    tone: "project-signal",
  },
  {
    key: "cinemaScore",
    title: "Cinema Score",
    url: "https://cinema-score.vercel.app/",
    image: "/cinemascore.png",
    techs: ["React", "TypeScript", "TMDB API"],
    tone: "project-ink",
  },
  {
    key: "trinno",
    title: "Trinno Contabilidade",
    url: "https://trinnocontabilidade.vercel.app/",
    image: "/trinno.png",
    techs: ["React", "Responsive UI", "Conversion"],
    tone: "project-paper",
  },
] as const;

const tickerItems = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Product UI",
  "Motion",
];

export const Portfolio = () => {
  const { t, i18n } = useTranslation("common");
  const reduceMotion = useReducedMotion();
  const nameRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });
  const portraitY = useTransform(scrollYProgress, [0, 0.28], [0, 64]);
  const currentLanguage = i18n.language.startsWith("en") ? "en" : "pt";

  const cvFiles: Record<"pt" | "en", string> = {
    pt: "/Curriculo - Micael Gomes Tavares ATS.pdf",
    en: "/EN Curriculo - Micael Gomes Tavares.pdf",
  };

  const professionalExperiences = Object.values(
    t("main.experience.items", { returnObjects: true }) as Record<
      string,
      {
        role: string;
        enterprise: string;
        employmentType?: string;
        date: string;
        location?: string;
        description: string;
      }
    >,
  );

  const courses = Object.values(
    t("main.certificates.items", { returnObjects: true }) as Record<
      string,
      { title: string; description: string; date: string }
    >,
  );

  const handleNamePointer = (event: PointerEvent<HTMLHeadingElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    nameRef.current?.style.setProperty("--name-weight", `${520 + x * 380}`);
    nameRef.current?.style.setProperty("--name-casual", `${y * 0.62}`);
  };

  const resetNamePointer = () => {
    nameRef.current?.style.setProperty("--name-weight", "720");
    nameRef.current?.style.setProperty("--name-casual", "0.12");
  };

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">
        {t("navigation.skip")}
      </a>

      <motion.div
        aria-hidden="true"
        className="scroll-progress"
        style={{ scaleX: progress }}
      />

      <nav className="site-nav" aria-label={t("navigation.primary")}>
        <a className="brand-mark" href="#top" aria-label={t("navigation.home")}>
          MG<span>/26</span>
        </a>

        <div className="nav-links">
          <a href="#projects">{t("navigation.projects")}</a>
          <a href="#skills">{t("navigation.skills")}</a>
          <a href="#about">{t("navigation.about")}</a>
        </div>

        <div className="nav-controls">
          <LanguageSelector />
          <ModeToggle />
        </div>
      </nav>

      <main id="main-content">
        <header className="hero" id="top">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={reduceMotion ? false : { y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span aria-hidden="true" />
              {t("main.availability")}
            </motion.div>

            <h1
              className="hero-name"
              ref={nameRef}
              onPointerMove={handleNamePointer}
              onPointerLeave={resetNamePointer}
            >
              <span className="name-mask">
                <motion.span
                  initial={reduceMotion ? false : { scaleY: 0.84, rotate: 2 }}
                  animate={{ scaleY: 1, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  Micael
                </motion.span>
              </span>
              <span className="name-mask name-mask-offset">
                <motion.span
                  initial={reduceMotion ? false : { scaleY: 0.84, rotate: -2 }}
                  animate={{ scaleY: 1, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  Gomes<span className="name-dot">.</span>
                </motion.span>
              </span>
            </h1>

            <motion.div
              className="hero-statement"
              initial={reduceMotion ? false : { y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>{t("main.role")}</p>
              <p>{t("main.description")}</p>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={reduceMotion ? false : { scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.72 }}
            >
              <a className="primary-action" href="#projects">
                {t("main.viewWork")}
                <ArrowDown aria-hidden="true" />
              </a>
              <a className="text-action" href={cvFiles[currentLanguage]} download>
                <Download aria-hidden="true" />
                {t("main.cv")}
              </a>
            </motion.div>
          </div>

          <motion.figure
            className="hero-portrait"
            initial={reduceMotion ? false : { scale: 0.94, rotate: 1.4 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.05, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: reduceMotion ? 0 : portraitY }}
          >
            <div className="portrait-orbit" aria-hidden="true">
              <span />
            </div>
            <div className="portrait-frame">
              <img
                src="/profilepic02.JPEG"
                alt={t("main.portraitAlt")}
              />
            </div>
            <figcaption>
              <span>
                <MapPin aria-hidden="true" />
                {t("main.location")}
              </span>
              <span>{t("main.remote")}</span>
            </figcaption>
          </motion.figure>

          <a className="scroll-cue" href="#projects">
            <span>{t("main.scroll")}</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </header>

        <div className="signal-strip" aria-hidden="true">
          <div className="signal-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}<i />
              </span>
            ))}
          </div>
        </div>

        <section className="projects-section section-shell" id="projects">
          <div className="projects-heading">
            <h2>{t("main.projects.title")}</h2>
            <p>{t("main.projects.intro")}</p>
          </div>

          <div className="project-stack">
            {projectDefinitions.map((project, index) => (
              <motion.article
                className={`project-case ${project.tone}`}
                key={project.key}
                style={{ "--project-index": index } as CSSProperties}
                initial={reduceMotion ? false : { y: 80 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="project-meta">
                  <div className="project-index">0{index + 1}</div>
                  <div>
                    <p>{t(`main.projects.items.${project.key}.type`)}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("main.projects.open")} — ${project.title}`}
                  >
                    {t("main.projects.open")}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>

                <motion.a
                  className="project-visual"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("main.projects.open")} — ${project.title}`}
                  whileHover={reduceMotion ? undefined : { scale: 0.992 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={project.image}
                    alt={t(`main.projects.items.${project.key}.imageAlt`)}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <span className="project-visual-action" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </motion.a>

                <div className="project-bottom">
                  <p>{t(`main.projects.items.${project.key}.description`)}</p>
                  <ul aria-label={t("main.projects.stackLabel")}>
                    {project.techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <SkillsSection />

        <section className="about-section section-shell" id="about">
          <motion.div
            className="about-heading"
            initial={reduceMotion ? false : { x: -40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2>{t("main.about.title")}</h2>
            <p>{t("main.about.statement")}</p>
          </motion.div>

          <div className="about-content">
            <motion.p
              className="about-copy"
              initial={reduceMotion ? false : { y: 32 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {t("main.about.description")}
            </motion.p>

            <dl className="profile-facts">
              <div>
                <dt>{t("main.about.focusLabel")}</dt>
                <dd>{t("main.about.focusValue")}</dd>
              </div>
              <div>
                <dt>{t("main.about.modeLabel")}</dt>
                <dd>{t("main.about.modeValue")}</dd>
              </div>
              <div>
                <dt>{t("main.about.languagesLabel")}</dt>
                <dd>{t("main.about.languagesValue")}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="experience-section section-shell" id="experience">
          <div className="experience-heading">
            <h2>{t("main.experience.title")}</h2>
            <p>{t("main.experience.intro")}</p>
          </div>

          <div className="experience-list">
            {professionalExperiences.map((experience, index) => (
              <motion.div
                className="experience-item"
                key={`${experience.enterprise}-${experience.date}`}
                initial={reduceMotion ? false : { x: index % 2 ? 28 : -28 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
              >
                <time>{experience.date}</time>
                <div>
                  <h3>{experience.role}</h3>
                  <p className="experience-company">
                    {[experience.enterprise, experience.employmentType]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  {experience.location ? (
                    <p className="experience-location">{experience.location}</p>
                  ) : null}
                  <p>{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="certificates-row">
            <p>{t("main.certificates.title")}</p>
            <ul>
              {courses.map((course) => (
                <li key={course.title}>
                  <span>{course.title}</span>
                  <span>{course.description}</span>
                  <time>{course.date}</time>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-top">
          <p>{t("main.contact.availability")}</p>
          <div className="footer-location">
            <span>{t("main.location")}</span>
            <span>{t("main.contact.timezone")}</span>
          </div>
        </div>

        <a className="footer-email" href="mailto:contato.micaeloficial@gmail.com">
          <span>{t("main.contact.title")}</span>
          <Mail aria-hidden="true" />
        </a>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Micael Gomes</p>
          <div className="footer-links">
            <a
              href="https://github.com/micaelgomestavares"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/micaelgomestavares"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
          <a className="back-to-top" href="#top">
            {t("navigation.backToTop")}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
};
