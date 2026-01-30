import companyLogo from 'assets/icons/indep-learn-icon.png'
import './Header.css'

export default function Header() {
    return(
        <header>
            <section className="header-container">
                <div className="header-logo">
                    <img src={companyLogo} alt="Indep Learn logo"></img>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/courses">Courses & Paths</a></li>
                        <li><a href="/news">Tech News</a></li>
                    </ul>
                </nav>
                <div className="header-sign">
                    <a href="/login">Log in / Sign up</a>
                </div>
            </section>
        </header>
    );
}