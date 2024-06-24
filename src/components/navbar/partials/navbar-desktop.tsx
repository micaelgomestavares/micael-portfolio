import {
  Download,
  Github,
  Hand,
  Home,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react"

import { ModeToggle } from "../../mode-toggle";
import { LanguageSelector } from "../../language-selector";
import { useTranslation } from "react-i18next";

import CV from "@/assets/portuguese-cv.pdf";

const DesktopNavbar = () => {
  const { t } = useTranslation('common');
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-fit flex-col gap-2">

        <div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" className="flex items-center gap-2 font-semibold">
            <Hand className="h-4 w-4" />{t('navbar.title')}
          </a>
          <ModeToggle></ModeToggle>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <a href="#" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all">
              <Home className="h-4 w-4" />{t('navbar.home')}
            </a>
            <p className="mt-3 text-muted-foreground">{t('navbar.social-media')}</p>

            <a href="https://github.com/micaelgomestavares" target="_blank" className="flex items-center gap-3 rounded-lg px-3 py-2 mt-2 transition-all hover:bg-muted">
              <Github className="h-4 w-4" />Github
            </a>
            <a href="https://www.linkedin.com/in/micaelgomestavares/" target="_blank" className="flex items-center gap-3 rounded-lg px-3 py-2 mt-2 transition-all hover:bg-muted">
              <Linkedin className="h-4 w-4" />Linkedin
            </a>
            <a href="https://twitter.com/Micazeera" target="_blank" className="flex items-center gap-3 rounded-lg px-3 py-2 mt-2 transition-all hover:bg-muted">
              <Twitter className="h-4 w-4" />X/Twitter
            </a>
            <a href="mailto:contato.micaeloficial@gmail.com" className="flex items-center gap-3 rounded-lg px-3 py-2 mt-2 transition-all hover:bg-muted">
              <Mail className="h-4 w-4" />Email
            </a>
            <a href={CV} className="flex items-center gap-3 rounded-lg px-3 py-2 mt-2 transition-all hover:bg-muted" download="portuguese-cv.pdf">
              <Download className="h-4 w-4" />{t('main.cv')}
            </a>

            <div className="mt-4">
              <LanguageSelector></LanguageSelector>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;