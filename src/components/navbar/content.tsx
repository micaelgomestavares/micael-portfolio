import { useTranslation } from "react-i18next";
import { Badge } from "../ui/badge";
import { Building, CircleUserRound, CodeXml, GraduationCap } from "lucide-react";
export const Content = () => {
  const { t } = useTranslation('common');

  const projects = [
    {
      url: "https://cinema-score.vercel.app/",
      title: "Cinema Score",
      description: 'Projeto criado para fixar aprendizado em React e Typescript, consumindo a API do TMDB para exibir informações sobre filmes e séries',
      techs: ['React', 'Typescript', 'Tailwindcss', 'Shadcn/ui'],
      img: 'cinemascore.png'
    },
    {
      url: "https://trinnocontabilidade.vercel.app/",
      title: "Trinno Contabilidade",
      description: 'Landing page criada com foco em conversão de clientes para uma empresa de contabilidade',
      techs: ['React', 'Typescript', 'Tailwindcss'],
      img: 'trinno.png'
    },
  ];

  return (
    <main className="max-w-[1100px] container-2xl mt-8 mx-auto flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">

      <div className="flex flex-1 ">
        <img src="./profilepic.jpg" alt="Web Developer" className="object-cover w-[128px] h-[128px] rounded-lg" />
        <div className="flex flex-col pl-4">
          <h1 className="text-3xl font-semibold">Micael Gomes</h1>
          <p className="mt-2 text-muted-foreground">{t('main.description')}</p>
          <div className="flex flex-inline mt-2 max-lg:flex-wrap gap-1">
            <Badge variant="default" className="mt-2">React</Badge>
            <Badge variant="default" className="mt-2">Typescript</Badge>
            <Badge variant="default" className="mt-2">Javascript</Badge>
            <Badge variant="default" className="mt-2">Node.JS</Badge>
            <Badge variant="default" className="mt-2">NestJS</Badge>
            <Badge variant="default" className="mt-2">MySQL</Badge>
            <Badge variant="default" className="mt-2">PostgreSQL</Badge>
          </div>
        </div>
      </div>

      <div className="p-4 mt-2 rounded-lg border bg-card text-card-foreground shadow-sm">
        <h2 className="flex items-center gap-2 text-xl font-semibold"><CircleUserRound /> {t('main.about')}</h2>
        <p className="mt-2 text-muted-foreground">{t('main.about-description')}</p>
      </div>

      <div className="flex gap-2 max-md:flex-col max-md:gap-4">
        <div className="p-4 rounded-lg w-1/2 border bg-card text-card-foreground shadow-sm max-md:w-full">
          <h2 className="flex gap-2 items-center text-xl font-semibold"><Building /> {t('main.recent-enterprises')}</h2>
          <p className="mt-4">{t('main.recent-enterprises-description.1.cargo')}</p>
          <p className="mt-2 text-muted-foreground">{t('main.recent-enterprises-description.1.enterprise')}</p>
          <p className="text-muted-foreground">{t('main.recent-enterprises-description.1.date')}</p>

          <p className="mt-2">{t('main.recent-enterprises-description.2.cargo')}</p>
          <p className="mt-2 text-muted-foreground">{t('main.recent-enterprises-description.2.enterprise')}</p>
          <p className="text-muted-foreground">{t('main.recent-enterprises-description.2.date')}</p>
        </div>

        <div className="p-4 rounded-lg w-1/2 border bg-card text-card-foreground shadow-sm max-md:w-full">

          <h2 className="flex items-center gap-2 text-xl font-semibold"><GraduationCap />{t('main.licenses')}</h2>
          <p className="mt-4">{t('main.licenses-description.1.title')}</p>
          <p className="mt-2 text-muted-foreground">{t('main.licenses-description.1.description')}</p>
          <p className=" text-muted-foreground">{t('main.licenses-description.1.date')}</p>

          <p className="mt-2">{t('main.licenses-description.2.title')}</p>
          <p className="mt-2 text-muted-foreground">{t('main.licenses-description.2.description')}</p>
          <p className="text-muted-foreground">{t('main.licenses-description.2.date')}</p>

        </div>
      </div>

      <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
        <h2 className="flex items-center gap-2 text-xl font-semibold"><CodeXml />{t('main.projects')}</h2>
        <div className="grid grid-cols-3 gap-4 mt-4 max-lg:grid-cols-1">
          {projects.map((project, index) => (
            <a className="w-full p-2 transition duration-300 ease-in-out hover:scale-105" key={index} href={project.url} target="_blank">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                <img src={project.img} alt={project.title} className="object-cover w-full h-32" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techs.map((tech, index) => (
                      <Badge key={index} variant="default">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Content;