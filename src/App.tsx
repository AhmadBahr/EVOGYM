import Navbar from "./scenes/Navabr/Index";
import { useState } from "react";

enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "our classes",
  ContactUs = "contact us",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return <div className="app bg-gray-20">
    <Navbar selectedPage={selectedPage} setSelectedPage={selectedPage}/>
  </div>

}

export default App
