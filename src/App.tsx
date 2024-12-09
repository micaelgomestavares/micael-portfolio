import { Portfolio } from "./components/pages";
import { ThemeProvider } from "./components/vendor/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Portfolio></Portfolio>
    </ThemeProvider>
  );
}

export default App;
