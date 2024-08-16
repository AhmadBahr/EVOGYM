import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
}
    from "@heroicons/react/24/solid"
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { Children } from "react";
import Htext from "../../shared/Htext";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            <div className="md:my-5 md:w-3/5">
                <Htext>MORE THAN JUST A GYM.</Htext>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes too.
                    No matter what you're looking for, we've got you covered.
                </p>
            </div>
            <div className="md:flex items-center justify-between gap-8 mt-5">
                
            </div>
        </motion.div>
    </section>
}
        </motion.div>
    </section>
}

export default Benefits