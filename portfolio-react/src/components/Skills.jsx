import { motion, MotionConfig } from "framer-motion";

const habilidades = ['javaScript', 'Java', 'Front-end', 'Versionamento (GitHub)']

function Skills(){
    return (
        <section>
            <h2>Conhecimentos</h2>
            <ul>
                {habilidades.map((item, index) => (
                    <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.4, delay: index * 0.15}}
                    viewport={{once: true}}
                    whileHover={{ scale: 1.07 }}
                    >
                    {item}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Skills