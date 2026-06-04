import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.section id="contato"
            initial={{ opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            >
            <h2>Contato</h2>
            <p>
             E-mail: <a href="mailto:rdavi6965@gmail.com">rdavi6965@gmail.com</a>
            </p>
            <p>
             LinkedIn: <a href="https://www.linkedin.com/in/davi-rodrigues-b26050188/" target="_blank">Meu LinkedIn</a>
            </p>
        </motion.section>
    )
}

export default Contact