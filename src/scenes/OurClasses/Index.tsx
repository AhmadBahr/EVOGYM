import { SelectedPage } from '../../shared/types'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import { motion } from 'framer-motion'
import HText from '../../shared/Htext'

type Props = {
    setselectedPage: (value: SelectedPage) => void
}

function OurClasses({ setselectedPage }: Props) {
    return <section id='ourclasses' className='w-full bg-gray-20 py-40'>
        <motion.div className='mx-auto w-5/6'
            onViewportEnter={() => setselectedPage(SelectedPage.OurClasses)}
        >
            <motion.div className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='whitespace-nowrap'>
                    <li className='inline-block mx-5'>
                        <img className='h-full w-[450px]' src={image1} alt="" />
                    </li>
                    <li className='inline-block mx-5'>
                        <img className='h-full w-[450px]' src={image2} alt="" />
                    </li>
                    <li className='inline-block mx-5'>
                        <img className='h-full w-[450px]' src={image3} alt="" />
                    </li>
                    <li className='inline-block mx-5'>
                        <img className='h-full w-[450px]' src={image4} alt="" />
                    </li>
                    <li className='inline-block mx-5'>
                        <img className='h-full w-[450px]' src={image5} alt="" />
                    </li>
                    <li className='inline-block mx-5'>
                        <img className='h-full w-[450px]' src={image6} alt="" />
                    </li>
                </ul>
            </div>
        </motion.div>
    </section>
}

export default OurClasses