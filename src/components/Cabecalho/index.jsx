import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/alura_logo.png";
import HeaderLink from "../headerLink/HeaderLink";
import styled from "styled-components";

const ImgEstilizada = styled.img`
    background-color: transparent;
`

const Header = () => {

    return (
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <ImgEstilizada src={logo} alt="Logo Alura" />
                </section>
            </Link>
            <nav className={styles.nav}>
                <div className={styles.navLinks}>
                    <HeaderLink url="./">HOME</HeaderLink>
                    <HeaderLink url="./novovideo">NOVO VÍDEO</HeaderLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;