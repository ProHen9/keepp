import { saveCategory } from "./Methoden/save"
import { motion } from "framer-motion"

export default function createCategory() {
    function addCategory() {
        const input = document.getElementById("inputName") as HTMLInputElement
        if (input.value == null || "" || undefined) {
            return
        }
        saveCategory(input.value)
    }
    return (
        <motion.div initial={{ width: "500px", height: "500px" }}>
            <motion.input initial={{color: "black"}}  type="text" name="name" id="inputName" placeholder="Name" />
            <button onClick={addCategory}>
                add
            </button>
        </motion.div>
    )
}