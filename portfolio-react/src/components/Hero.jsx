import { motion } from "framer-motion";

function Hero() {
    return (
        <motion.section id="inicio"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.8}}
        >
            <h1>Davi Rodrigues Monteiro Sampaio</h1>
            <h2>Estudante de Análise e Desenvolvimento de Sistemas</h2>
            <p>
            Estudante de Tecnologia da Informação na UNIFOR, cursando ADS.
            Atuo com com assistência técnica de celulares e venda especializada de iPhones.
            </p>
        </motion.section>
    )
}

export default Hero