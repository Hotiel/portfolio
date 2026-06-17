import { FaLinkedin , FaWhatsapp, FaInbox, FaGithub} from "react-icons/fa"
import { FiMail } from "react-icons/fi"

export function Contact() {

    return(
        <div className="contact">
            <h3>Contact</h3>
            <a className="contacticon" target="_blank" rel="noreferer noopener" href="https://www.linkedin.com/in/leonardopolidori/"><FaLinkedin/></a>
            <a className="contacticon" target="_blank" rel="noreferer noopener" href="https://wa.me/+5493517701255"><FaWhatsapp/></a>
            <a className="contacticon" target="_blank" rel="noreferer noopener" href="https://www.instagram.com/hotiel94/#"><FiMail/></a>
            <a className="contacticon" target="_blank" rel="noreferer noopener" href="https://github.com/Hotiel/"><FaGithub/></a>
        </div>
    )
}