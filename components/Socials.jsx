import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const link = [
    {
        icon: <FaGithub />,
        href: "https://github.com/SAlejandraOlaya"
    },
    {
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/silvia-alejandra-olaya-forero-961993308/"
    },
    {
        icon: <FaInstagram />,
        href: "https://www.instagram.com/silvialejandra_/"
    }
]
const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {link.map((item, index) => {
                return <Link key={index} href={item.href} className={iconStyles}>
                    {item.icon}
                </Link>
            }
            )} </div>
    )
}

export default Socials;