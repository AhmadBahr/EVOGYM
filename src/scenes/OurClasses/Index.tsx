import { SelectedPage } from '../../shared/types'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'

type Props = {
    setselectedPage: (value: SelectedPage) => void
}

function OurClasses({ setselectedPage }: Props) {
    return (
        <div>Index</div>
    )
}

export default OurClasses