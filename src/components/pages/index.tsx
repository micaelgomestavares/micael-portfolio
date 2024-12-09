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
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../language-selector";
import { ModeToggle } from "../mode-toggle";

export const Portfolio = () => {
  const { t } = useTranslation("common");

  // Dados traduzidos dinâmicos
  const professionalExperiences = t("main.recent-enterprises-description", {
    returnObjects: true,
  }) as Record<string, { role: string; enterprise: string; date: string }>;

  const courses = t("main.licenses-description", {
    returnObjects: true,
  }) as Record<string, { title: string; description: string; date: string }>;

  const projects = [
    {
      url: "https://cinema-score.vercel.app/",
      title: "Cinema Score",
      description: t("main.projects.cinemaScore.description"),
      techs: ["React", "Typescript", "Tailwindcss", "Shadcn/ui"],
      img: "cinemascore.png",
    },
    {
      url: "https://trinnocontabilidade.vercel.app/",
      title: "Trinno Contabilidade",
      description: t("main.projects.trinno.description"),
      techs: ["React", "Typescript", "Tailwindcss"],
      img: "trinno.png",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.JS",
    "NestJS",
    "MySQL",
    "PostgreSQL",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 py-8 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="w-48 h-48 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
            <img
              src="./profilepic.JPEG"
              alt="Profile Pic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Micael Gomes</h1>
            <p className="text-xl text-muted-foreground">
              {t("main.description")}
            </p>
            <div className="flex justify-between gap-4">
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
                <ModeToggle></ModeToggle>
                <LanguageSelector></LanguageSelector>
              </div>
            </div>
            <div className="flex gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="grid w-full md:w-fit grid-cols-3 h-auto gap-4">
            <TabsTrigger value="about">{t("main.about")}</TabsTrigger>
            <TabsTrigger value="experience">
              {t("main.recent-enterprises")}
            </TabsTrigger>
            <TabsTrigger value="certificates">{t("main.licenses")}</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4">
            <Card className="flex flex-col gap-y-4 p-4">
              <CardHeader>
                <CardTitle>{t("main.about")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("main.about-description")}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-4">
            {Object.values(professionalExperiences).map((experience, index) => (
              <Card className="p-4" key={index}>
                <CardHeader className="flex flex-col gap-y-2">
                  <CardTitle>{experience.role}</CardTitle>
                  <CardDescription>
                    {experience.enterprise} • {experience.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certificates" className="space-y-4">
            {Object.values(courses).map((course, index) => (
              <Card className="p-4" key={index}>
                <CardHeader className="flex flex-col gap-y-2">
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>
                    {course.description} • {course.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Projects Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            {t("main.projects.title")}
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-4 max-lg:grid-cols-1">
            {projects.map((project, index) => (
              <a
                className="w-full p-2 transition duration-300 ease-in-out hover:scale-105"
                key={index}
                href={project.url}
                target="_blank"
              >
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="object-cover w-full h-32"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techs.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
