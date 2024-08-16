import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
}
    from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import Htext from "../../shared/Htext";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-10 w-10 text-primary-500" />,
        title: "State-of-the-Art Equipment",
        description: "We provide world class fitness equipment, trainers and classes too."
    },
    {
        icon: <UserGroupIcon className="h-10 w-10 text-primary-500" />,
        title: "Expert and Pro Trainers",
        description: "We provide world class fitness equipment, trainers and classes too."
    },
    {
        icon: <AcademicCapIcon className="h-10 w-10 text-primary-500" />,
        title: "Unparalleled Training Classes",
        description: "We provide world class fitness equipment, trainers and classes too."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
        
    }
};

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
            <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                {
                    benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))
                }
            </motion.div>
        </motion.div>
    </section>
}

export default Benefits