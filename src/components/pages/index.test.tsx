import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import en from "../../translations/en.json";
import pt from "../../translations/pt.json";
import { Portfolio } from "./index";

class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "0px";
  readonly thresholds = [0];
  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn(() => []);
  unobserve = vi.fn();
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
vi.stubGlobal("scrollTo", vi.fn());

const objectTranslations: Record<string, unknown> = {
  "main.recent-enterprises-description": {},
  "main.licenses-description": {},
  "main.experience.items": pt.main.experience.items,
  "main.certificates.items": {},
};

const stringTranslations: Record<string, string> = {
  "navigation.primary": "Navegação principal",
  "navigation.projects": "Projetos",
  "navigation.skills": "Skills",
  "navigation.about": "Sobre",
  "main.skills.title": "Skills",
  "main.skills.showMore": "Mostrar mais",
  "main.skills.showLess": "Mostrar menos",
  "main.skills.categories.workflow": "Workflow",
};

vi.mock("react-i18next", () => ({
  useTranslation: () => {
    const t = (key: string) =>
      objectTranslations[key] ?? stringTranslations[key] ?? key;
    const i18n = { language: "pt", changeLanguage: vi.fn() };
    return Object.assign([t, i18n], { t, i18n });
  },
}));

afterEach(cleanup);

describe("Portfolio", () => {
  it("offers primary navigation to the core portfolio sections", () => {
    render(<Portfolio />);

    const navigation = screen.getByRole("navigation", {
      name: "Navegação principal",
    });

    expect(navigation).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute(
      "href",
      "#projects",
    );
    expect(screen.getByRole("link", { name: "Skills" })).toHaveAttribute(
      "href",
      "#skills",
    );
    expect(screen.getByRole("link", { name: "Sobre" })).toHaveAttribute(
      "href",
      "#about",
    );
  });

  it("expands the skills matrix on request", async () => {
    const user = userEvent.setup();
    render(<Portfolio />);

    expect(
      screen.getByRole("heading", { name: "Skills", level: 2 }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Workflow")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Mostrar mais" }));

    expect(screen.getByText("Workflow")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Mostrar menos" }),
    ).toHaveAttribute("aria-expanded", "true");
  });

  it("presents the selected work as three distinct case studies", () => {
    render(<Portfolio />);

    expect(screen.getAllByRole("article")).toHaveLength(3);
  });

  it("presents Ecta Corporative as the current professional experience", () => {
    render(<Portfolio />);

    expect(screen.getByRole("heading", { name: "Líder técnico" })).toBeInTheDocument();
    expect(screen.getByText("Ecta Corporative · Tempo integral")).toBeInTheDocument();
    expect(screen.getByText("Brasil · Remoto")).toBeInTheDocument();
    expect(screen.getByText("Mar/2026 — atual")).toBeInTheDocument();
  });

  it("closes the Dinheirow experience when the Ecta role begins", () => {
    expect(pt.main.experience.items["2"].date).toBe("Jul/2024 — Mar/2026");
    expect(en.main.experience.items["2"].date).toBe("Jul/2024 — Mar/2026");
  });
});
