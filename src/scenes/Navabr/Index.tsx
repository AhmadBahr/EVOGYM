import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./Link";

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img src={Logo} alt="logo" />

                        {/* RIGHT SIDE */}
                        <div className={`${flexBetween} w-full`}>
                            <div className={`flex justify-between w-full gap-8 text-sm`}>
                                <Link page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                            <div className="flex gap-8">
                                <button className="bg-secondary-500 rounded-full px-10 py-2 text-white">
                                    Sign In
                                </button>
                                <button className="border border-gray-400 rounded-full px-10 py-2 text-gray-400">
                                    Become a Member
                                </button>
                                <Bars3Icon className="h-6 w-6 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
