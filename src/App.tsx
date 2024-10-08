import Navbar from "./scenes/Navbar/Index";
import Home from "./scenes/Home/Index";
import Benefits from "./scenes/Benefits/Index";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import OurClasses from "./scenes/OurClasses/Index";
import ContactUs from "./scenes/contactUs/contactUs";
import Footer from "./scenes/Footer/Index";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="app bg-gray-20">
    <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
    <Footer />
  </div>

}

export default App
