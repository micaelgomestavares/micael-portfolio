import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.language.startsWith("en") ? "en" : "pt";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" aria-label={t("language-selector.label")}>
          <Languages data-icon="inline-start" aria-hidden="true" />
          {currentLanguage.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => {
              document.documentElement.lang = "en";
              void i18n.changeLanguage("en");
            }}
          >
            EN · {t("language-selector.languages.en")}
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              document.documentElement.lang = "pt-BR";
              void i18n.changeLanguage("pt");
            }}
          >
            PT · {t("language-selector.languages.pt")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
