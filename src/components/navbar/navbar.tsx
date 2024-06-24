import MobileNavbar from "./partials/navbar-mobile";
import DesktopNavbar from './partials/navbar-desktop';

const DefaultNavbar = () => {

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DesktopNavbar></DesktopNavbar>
      <MobileNavbar></MobileNavbar>
    </div>
  );
}

export default DefaultNavbar;