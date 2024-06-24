import Navbar from "./components/navbar/navbar";
import { ThemeProvider } from "./components/vendor/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar></Navbar>
    </ThemeProvider>
  )
}

export default App
