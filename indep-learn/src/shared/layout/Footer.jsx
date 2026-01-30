import companyLogo from 'assets/icons/indep-learn-icon.png'
import './Footer.css'

export default function Footer() {
    return(
        <footer>
            <section className="footer-container">
                <div className="footer-logo">
                    <img src={companyLogo} alt="Indep Learn logo"></img>
                </div>
                <div className="footer-copyright">
                    <p>Copyright 2026 - All rights reserved</p>
                </div>
            </section>
        </footer>
    );
}