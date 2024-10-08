import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ icon, title, description, setSelectedPage }: Props) {
    return (
        <motion.div
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            variants={childVariant}
        >
            <div className="flex flex-col items-center">
                <div className="mb-4 rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                    {icon}
                </div>
                <h4 className="font-bold">{title}</h4>
                <p className="my-3 text-sm">{description}</p>
                <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    Learn More
                </AnchorLink>
            </div>
        </motion.div>
    );
}

export default Benefits;
