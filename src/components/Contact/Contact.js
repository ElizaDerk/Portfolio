import styles from "./ContactStyles.css";
import GitIcon from "../img/github.png";
import LinkIcon from "../img/linkedin.png";
import MailIcon from "../img/mail.png";
import TelIcon from "../img/telegram.png";
import PhoneIcon from "../img/telephone.png"

const Contact = () => {
    return(
        <ul className="contacts">
            <li className="contact-item">
                <a className="contact-link" href="https://github.com/ElizaDerk">
                    <img src={GitIcon} alt="icon"/>
                </a>
            </li>
            <li className="contact-item">
                <a className="contact-link" href="https://www.linkedin.com/in/elizasafronova/">
                    <img src={LinkIcon} alt="icon"/>
                </a>
            </li>
            <li className="contact-item">
                <a className="contact-link" href="https://telegram.me/Elis_De">
                    <img src={TelIcon} alt="icon"/>
                </a>
            </li>
            <li className="contact-item">
                <a className="contact-link" href="mailto:elizaveta.derk@gmail.com">
                    <img src={MailIcon} alt="icon"/>
                </a>
            </li>
            <li>
                <a className="contact-link" href="tel:+380932734230">
                    <img src={PhoneIcon} alt="icon"/>
                </a>
            </li>
        </ul>
    )
}

export default Contact;
