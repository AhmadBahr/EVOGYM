import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
}
    from "@heroicons/react/24/solid"
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import Htext from "../../shared/Htext";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";

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
            <motion.div className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <Htext>MORE THAN JUST A GYM.</Htext>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes too.
                    No matter what you're looking for, we've got you covered.
                </p>
            </motion.div>
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
            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:flex">
                {/* Graphics */}
                <img
                    className="mx-auto"
                    alt="-benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />
                {/* Description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    {/*TITLE*/}
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                        <Htext>
                            MILLIONS OF HAPPY MEMBERS GETTING{" "}
                            <span className="text-primary-500">FIT</span>
                        </Htext>
                    </div>
                    {/*Descript*/}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <p className="my-5">
                            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet</p>
                        <p className="mb-5">
                            eu sem integer. Fusce sagittis elit in nec aliquam.</p>
                    </motion.div>
                </motion.div>
                {/*Button*/}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}

export default Benefits