import { useState, useEffect } from "react";

function Navbar(){
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scroll > 50)
    }
     window.addEventListener('scroll', handleScroll)
     return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <nav className={scrolled ? 'nav-scrolled' : 'nav-top'}>
            <span>Davi Rodrigues</span>
            <ul>
                <li><a href="#inicio"></a></li>
                <li><a href="#skills"></a></li>
                <li><a href="#projetos"></a></li>
                <li><a href="#contato"></a></li>
            </ul>
        </nav>
    )
}    

export default Navbar