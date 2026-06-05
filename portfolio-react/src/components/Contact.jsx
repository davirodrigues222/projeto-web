import { motion } from "framer-motion"
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const contatos = [
  {
    label: "E-mail",
    valor: "rdavi6965@gmail.com",
    href: "mailto:rdavi6965@gmail.com",
    icone: <MdEmail size={36} />
  },
  {
    label: "LinkedIn",
    valor: "davi-rodrigues",
    href: "https://www.linkedin.com/in/davi-rodrigues-b26050188/",
    icone: <FaLinkedin size={36} />
  },
  {
    label: "GitHub",
    valor: "davirodrigues222",
    href: "https://github.com/davirodrigues222",
    icone: <FaGithub size={36} />
  }
]

function Contact() {
  return (
    <motion.section id="contato"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Contato</h2>
      <p className="contato-subtitulo">Vamos conversar? Me encontre por aqui:</p>
      <div className="contato-grid">
        {contatos.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            className="contato-card"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="contato-icone">{item.icone}</span>
            <span className="contato-label">{item.label}</span>
            <span className="contato-valor">{item.valor}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}

export default Contact
