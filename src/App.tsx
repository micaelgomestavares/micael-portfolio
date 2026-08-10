import { Portfolio } from "./components/pages";
import { ThemeProvider } from "./components/vendor/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
