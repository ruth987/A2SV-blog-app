import footerStyles from '../styles/Nav.module.css'
const Footer: React.FC = () => {
    return (
        <div className = {footerStyles.nav}>
            <ul>
                <li>
                    <a href = "https://www.linkedin.com/in/alexander-lee-8b3a1a1b0/">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href = "https://www.github.com/ruth987">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href = "https://www.twitter.com/ruth987">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href = "https://www.instagram.com/ruth987">
                        Instagram
                    </a>
                </li>
                <li>
                    <a href = "https://www.facebook.com/ruth987">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href = "https://www.youtube.com/ruth987">
                        YouTube
                    </a>
                </li>
                <li>
                    <a href = "https://www.reddit.com/ruth987">
                        Reddit
                    </a>
                    </li>
            </ul>
        </div>
    )
}

export default Footer