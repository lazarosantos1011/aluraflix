import { Link, useLocation } from "react-router-dom";
import './NavegacaoRodape.css';

const FooterBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isNewVideoPage = location.pathname === "/novovideo";

    return (
        <div className="footer-bar">
            {isHomePage && (
                <>
                    <Link to="/" className="footer-icon">
                        <button className="icon">
                            <p>HOME</p>
                        </button>
                    </Link>
                    <Link to="/novovideo" className="footer-icon">
                        <button className="icon">
                            <p>NOVO VÍDEO</p>
                        </button>
                    </Link>
                </>
            )}
            {isNewVideoPage && (
                <>
                    <Link to="/" className="footer-icon">
                        <button className="icon">
                            <p>HOME</p>
                        </button>
                    </Link>
                    <Link to="/novovideo" className="footer-icon">
                        <button className="icon">
                            <p>NOVO VÍDEO</p>
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default FooterBar;
