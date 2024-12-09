import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const [t, i18n] = useTranslation("common");

  const currentLanguage: "en" | "pt" = i18n.language as "en" | "pt";

  const flags: { [key in "en" | "pt"]: string } = {
    en: "./us.svg",
    pt: "./br.svg",
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="shrink-0" variant="outline">
            <Avatar className="w-[24px] h-[24px] mr-2">
              <AvatarImage
                className="object-cover size-fit"
                src={flags[currentLanguage] || flags.en}
              />
              <AvatarFallback>{currentLanguage.toUpperCase()}</AvatarFallback>
            </Avatar>
            {currentLanguage.toUpperCase()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px]">
          <DropdownMenuItem onClick={() => i18n.changeLanguage("en")} asChild>
            <div className="flex items-center gap-2">
              <Avatar className="w-[32px] h-[32px]">
                <AvatarImage className="object-cover size-fit" src="./us.svg" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              <span>{t("language-selector.languages.en")}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => i18n.changeLanguage("pt")} asChild>
            <div className="flex items-center gap-2">
              <Avatar className="w-[32px] h-[32px]">
                <AvatarImage className="object-cover size-fit" src="./br.svg" />
                <AvatarFallback>BR</AvatarFallback>
              </Avatar>
              <span>{t("language-selector.languages.pt")}</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
