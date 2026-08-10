import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/vendor/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { t } = useTranslation("common");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label={t("theme.label")}
        >
          <Sun
            className="rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
            data-icon="inline-start"
            aria-hidden="true"
          />
          <Moon
            className="absolute rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
            data-icon="inline-start"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => setTheme("light")}>
            <Sun aria-hidden="true" />
            {t("theme.themes.light")}
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setTheme("dark")}>
            <Moon aria-hidden="true" />
            {t("theme.themes.dark")}
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setTheme("system")}>
            <Monitor aria-hidden="true" />
            {t("theme.themes.system")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
