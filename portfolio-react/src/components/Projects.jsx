import { motion, MotionConfig } from "framer-motion";

const projetos = [
    {
        nome: 'Vendy+',
        descricao: 'Marketplace focado em microempreendedores',
        ano: '2026 (Atual)'
    },
    {
        nome: 'Vidioteca Unifor',
        descricao: 'Organização e controle de acervo digital e audiovisual.',
        ano: '2025'
    }
]

    function Projects(){
        return(
            <section>
                <h2>Projetos</h2>
                {projetos.map((projeto, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0}}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5}}
                        viewport={{ once: true }}
                        >

                        <h3>{projeto.nome}</h3>
                        <p>{projeto.descricao}</p>
                        <span>{projeto.ano}</span>
                    </motion.div>
                ))}
            </section>
        )
    }

    export default Projects