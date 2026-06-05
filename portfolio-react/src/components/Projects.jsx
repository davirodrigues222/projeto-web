import { motion, MotionConfig } from "framer-motion";

const projetos = [
    {
        nome: 'Vendy+',
        descricao: 'Marketplace focado em microempreendedores',
        ano: '2026 (Atual)'
    },

    {
        nome: 'Di-Poly-Opticus',
        descricao: 'Site Para Compra e estilização de oculos.',
        ano: '2026'
    },

    {
        nome: 'Vidioteca Unifor',
        descricao: 'Organização e controle de acervo digital e audiovisual.',
        ano: '2025'
    },

    {
        nome: 'NARAA',
        descricao: 'Loja virtual de roupas femininas.',
        ano: '2025'
    },

    {
        nome: 'CloudQuiz',
        descricao: 'mini-game de perguntas e respostas sobre Software em Nuvem.',
        ano: '2025'
    },

    {
        nome: 'Jogo da Forca',
        descricao: 'Jogo Simples web jogo da forca.',
        ano: '2025'
    },
]

    function Projects(){
        return(
            <section id="projetos">
                <h2>Projetos</h2>
                 <div className="projetos-grid">
                {projetos.map((projeto, index) => (
                    <motion.div
                        key={index}
                        className="projeto-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0}}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5}}
                        viewport={{ once: true }}
                        >

                        <h3>{projeto.nome}</h3>
                        <p>{projeto.descricao}</p>
                        <span>{projeto.ano}</span>
                    </motion.div>
                ))}
                </div>
            </section>
        )
    }

    export default Projects