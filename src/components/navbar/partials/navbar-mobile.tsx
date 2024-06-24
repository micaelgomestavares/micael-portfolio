import {
  Download,
  Github,
  Hand,
  Linkedin,
  Mail,
  Menu,
  Twitter,
} from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import { LanguageSelector } from "../../language-selector";
import { useTranslation } from "react-i18next";
import Content from "../content";
import CV from "@/assets/portuguese-cv.pdf";
import { ModeToggle } from "@/components/mode-toggle";

const MobileNavbar = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <a href="#" className="flex items-center gap-3 rounded-lg px-1 py-2 mt-2 transition-all">
                <Hand className="h-4 w-4" />{t('navbar.title')}    <ModeToggle></ModeToggle>
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
            </nav>

            <LanguageSelector></LanguageSelector>

          </SheetContent>
        </Sheet>

      </header>
      <Content></Content>
    </div>);
}

export default MobileNavbar;