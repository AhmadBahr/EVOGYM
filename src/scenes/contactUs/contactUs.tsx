import { SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function contactUs({ setSelectedPage }: Props) {
    return (
        <div>contactUs</div>
    )
}

export default contactUs