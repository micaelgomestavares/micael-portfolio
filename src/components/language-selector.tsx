import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import { useTranslation } from "react-i18next"

export const LanguageSelector = () => {
  const [t, i18n] = useTranslation('common');

  return (
    <div>
      <p className="mt-3 mb-1 text-muted-foreground font-medium text-xs">{t('navbar.does-not-speak')}</p>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="shrink-0" variant="outline">
            <GlobeIcon className="w-4 h-4 mr-2" />
            {t('language-selector.label')}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px]">
          <DropdownMenuItem onClick={() => i18n.changeLanguage('en')} asChild>
            <div className="flex items-center gap-2">
              <Avatar className="w-[32px] h-[32px]">
                <AvatarImage className="object-cover size-fit" src="./us.svg" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              <span>{t('language-selector.languages.en')}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => i18n.changeLanguage('pt')} asChild>
            <div className="flex items-center gap-2">
              <Avatar className="w-[32px] h-[32px]">
                <AvatarImage className="object-cover size-fit" src="./br.svg" />
                <AvatarFallback>BR</AvatarFallback>
              </Avatar>
              <span>{t('language-selector.languages.pt')}</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}
