import {
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  User,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Iframe from "react-iframe";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedContent from "../AnimatedContent";
// ReactBits animated components
import Aurora from "../Aurora";
import BlurText from "../BlurText";
import DecryptedText from "../DecryptedText";
import { LanguageSelector } from "../language-selector";
import { ModeToggle } from "../mode-toggle";
import SpotlightCard from "../SpotlightCard";

export const Portfolio = () => {
  const { t, i18n } = useTranslation("common");

  const currentLanguage = i18n.language as "en" | "pt";

  const cvFiles: Record<string, string> = {
    pt: "/Curriculo - Micael Gomes Tavares ATS.pdf",
    en: "/EN Curriculo - Micael Gomes Tavares.pdf",
  };

  const professionalExperiences = t("main.recent-enterprises-description", {
    returnObjects: true,
  }) as Record<
    string,
    { role: string; enterprise: string; date: string; description: string }
  >;

  const courses = t("main.licenses-description", {
    returnObjects: true,
  }) as Record<string, { title: string; description: string; date: string }>;

  const featuredProjects = [
    {
      url: "https://mitech.com.br/",
      title: "Mitech Landing Page",
      description: t("main.projects.mitech.description"),
      techs: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui"],
      previewUrl: "https://mitech.com.br/",
      tag: t("main.projects.mitech.tag"),
    },
    {
      url: "https://mitech-finance-production.up.railway.app/",
      title: "Mitech Finance",
      description: t("main.projects.mitechFinance.description"),
      techs: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui", "NestJS"],
      previewUrl: "https://mitech-finance-production.up.railway.app/",
      tag: t("main.projects.mitechFinance.tag"),
    },
    {
      url: "https://corteideal.com.br/",
      title: "Corte Ideal",
      description: t("main.projects.corteIdeal.description"),
      techs: ["Next.js", "TypeScript", "TailwindCSS", "Stripe"],
      previewUrl: "https://corteideal.com.br/",
      tag: t("main.projects.corteIdeal.tag"),
    },
    {
      url: "https://cinema-score.vercel.app/",
      title: "Cinema Score",
      description: t("main.projects.cinemaScore.description"),
      techs: ["React", "TypeScript", "TailwindCSS", "Shadcn/ui"],
      previewUrl: "https://cinema-score.vercel.app/",
      tag: t("main.projects.cinemaScore.tag"),
    },
    {
      url: "https://trinnocontabilidade.vercel.app/",
      title: "Trinno Contabilidade",
      description: t("main.projects.trinno.description"),
      techs: ["React", "TypeScript", "TailwindCSS"],
      previewUrl: "https://trinnocontabilidade.vercel.app/",
      tag: t("main.projects.trinno.tag"),
    },
  ];

  const technologies = [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TailwindCSS", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "NestJS", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "MySQL", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Docker", category: "devops" },
    { name: "Git", category: "devops" },
    { name: "Linux", category: "devops" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section with Aurora Background */}
      <header className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#3b82f6", "#8b5cf6", "#3b82f6"]}
            amplitude={1.2}
            blend={0.5}
            speed={0.4}
          />
        </div>
        <div className="absolute inset-0 bg-background/60 z-[1]" />
        <div className="container px-4 sm:px-6 lg:px-8 md:py-20 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <AnimatedContent
              distance={80}
              direction="horizontal"
              reverse
              duration={1}
              ease="power3.out"
              scale={0.9}
              threshold={0.1}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
                <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-2 ring-primary/30 flex-shrink-0 shadow-2xl">
                  <img
                    src="/profilepic02.JPEG"
                    alt="Micael Gomes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedContent>
            <div className="flex-1 space-y-5 text-center md:text-left">
              <div className="space-y-3">
                <DecryptedText
                  text={t("main.greeting")}
                  speed={40}
                  maxIterations={15}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  className="text-sm font-medium text-primary tracking-wider uppercase"
                  parentClassName="block"
                />
                <BlurText
                  text="Micael Gomes"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  threshold={0.1}
                  stepDuration={0.4}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                />
                {/* {t("main.role")} */}
              </div>
              <AnimatedContent
                distance={40}
                direction="vertical"
                duration={0.8}
                delay={0.3}
                threshold={0.1}
              >
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                  {t("main.description")}
                </p>
              </AnimatedContent>
              <AnimatedContent
                distance={30}
                direction="vertical"
                duration={0.6}
                delay={0.4}
                threshold={0.1}
              >
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{t("main.location")}</span>
                </div>
              </AnimatedContent>
              <AnimatedContent
                distance={40}
                direction="vertical"
                duration={0.8}
                delay={0.5}
                threshold={0.1}
              >
                <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                  <a href={cvFiles[currentLanguage] || cvFiles.pt} download>
                    <Button className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                      <Download className="h-4 w-4" />
                      {t("main.cv")}
                    </Button>
                  </a>

                  <a
                    href="https://github.com/micaelgomestavares"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </a>

                  <a
                    href="https://linkedin.com/in/micaelgomestavares"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                  <a
                    href="https://x.com/Micazeera"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </a>
                  <a href="mailto:contato.micaeloficial@gmail.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </a>
                  <ModeToggle />
                  <LanguageSelector />
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 sm:px-6 lg:px-8 pb-16 mx-auto">
        {/* Technologies Section */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          threshold={0.1}
        >
          <section className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{t("main.technologies")}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <AnimatedContent
                  key={tech.name}
                  distance={30}
                  direction="vertical"
                  duration={0.5}
                  delay={index * 0.05}
                  threshold={0.1}
                  scale={0.8}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm py-1.5 px-3 hover:bg-primary/10 hover:scale-110 transition-all cursor-default"
                  >
                    {tech.name}
                  </Badge>
                </AnimatedContent>
              ))}
            </div>
          </section>
        </AnimatedContent>

        {/* About, Experience, Certificates Tabs */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          threshold={0.1}
        >
          <section className="py-12">
            <Tabs defaultValue="about" className="space-y-8">
              <TabsList className="grid w-full md:w-fit grid-cols-1 sm:grid-cols-3 h-auto gap-2 p-1">
                <TabsTrigger value="about" className="gap-2">
                  <User className="h-4 w-4" />
                  {t("main.about")}
                </TabsTrigger>
                <TabsTrigger value="experience" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  {t("main.recent-enterprises")}
                </TabsTrigger>
                <TabsTrigger value="certificates" className="gap-2">
                  <GraduationCap className="h-4 w-4" />
                  {t("main.licenses")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-4">
                <Card className="border-border/50 p-4">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      {t("main.about")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("main.about-description")}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-4">
                {Object.values(professionalExperiences).map(
                  (experience, index) => (
                    <AnimatedContent
                      key={index}
                      distance={40}
                      direction="horizontal"
                      duration={0.6}
                      delay={index * 0.15}
                      threshold={0.1}
                    >
                      <Card className="border-border/50 hover:border-primary/20 transition-colors p-4">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="space-y-1">
                              <CardTitle className="text-lg">
                                {experience.role}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {experience.enterprise}
                              </CardDescription>
                            </div>
                            <Badge variant="outline" className="w-fit text-xs">
                              {experience.date}
                            </Badge>
                          </div>
                          {experience.description && (
                            <p className="text-sm text-muted-foreground mt-3">
                              {experience.description}
                            </p>
                          )}
                        </CardHeader>
                      </Card>
                    </AnimatedContent>
                  ),
                )}
              </TabsContent>

              <TabsContent value="certificates" className="space-y-4">
                {Object.values(courses).map((course, index) => (
                  <AnimatedContent
                    key={index}
                    distance={40}
                    direction="horizontal"
                    duration={0.6}
                    delay={index * 0.15}
                    threshold={0.1}
                  >
                    <Card className="border-border/50 hover:border-primary/20 transition-colors p-4">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="space-y-1">
                            <CardTitle className="text-lg">
                              {course.title}
                            </CardTitle>
                            <CardDescription>
                              {course.description}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="w-fit text-xs">
                            {course.date}
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  </AnimatedContent>
                ))}
              </TabsContent>
            </Tabs>
          </section>
        </AnimatedContent>

        {/* Featured Projects with Live Previews */}
        <section className="py-12">
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={0.7}
            threshold={0.1}
          >
            <div className="flex items-center gap-3 mb-8">
              <ExternalLink className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{t("main.projects.title")}</h2>
            </div>
          </AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <AnimatedContent
                key={index}
                distance={80}
                direction="vertical"
                duration={0.7}
                delay={index * 0.12}
                threshold={0.05}
                scale={0.95}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <SpotlightCard
                    spotlightColor="rgba(59, 130, 246, 0.15)"
                    className="rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg h-full"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-t-xl bg-muted">
                      <div className="absolute top-0 left-0 w-[500%] h-[500%] origin-[top_left] scale-[0.2]">
                        <Iframe
                          url={project.previewUrl}
                          width="100%"
                          height="100%"
                          className="pointer-events-none h-full w-full"
                          loading="lazy"
                          display="block"
                          position="relative"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant="secondary"
                          className="text-xs font-medium backdrop-blur-sm bg-background/80"
                        >
                          {project.tag}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techs.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs font-normal"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </a>
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* Footer */}
        <AnimatedContent
          distance={30}
          direction="vertical"
          duration={0.6}
          threshold={0.1}
        >
          <footer className="py-8 border-t border-border/50 mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} Micael Gomes. {t("main.footer")}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/micaelgomestavares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/micaelgomestavares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:contato.micaeloficial@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </footer>
        </AnimatedContent>
      </div>
    </div>
  );
};
