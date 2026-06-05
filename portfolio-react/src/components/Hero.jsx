import { motion } from "framer-motion"
import foto from "../assets/foto.jpg"

function Hero() {
    return (
        <motion.section id="inicio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-section"
        >
            <img src={foto} alt="Davi Rodrigues" className="foto-perfil" />
            <div>
                <h1>Davi Rodrigues Monteiro Sampaio</h1>
                <h2>Estudante de Análise e Desenvolvimento de Sistemas</h2>
                <p>
                    Estudante de Tecnologia da Informação na UNIFOR, cursando ADS.
                    Atuo com assistência técnica de celulares e venda especializada de iPhones.
                </p>
            </div>
        </motion.section>
    )
}

export default Hero
