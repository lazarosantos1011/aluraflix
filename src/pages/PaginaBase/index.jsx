import { Outlet } from "react-router-dom";
import GlobalStyles from "../../components/GlobalStyles";
import { VideoProvider } from "../../contexts/VideoContext";
import Header from "../../components/Cabecalho";
import FooterBar from "../../components/NavegacaoRodape";
import Rodape from "../../components/Rodape";
import styled from "styled-components";


const AppContainerEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
`

const ConteudoEstilizado = styled.div`
    flex: 1;
`


const PaginaBase = () => {
    return (
        <VideoProvider>
            <GlobalStyles />
            <AppContainerEstilizado>
                <Header />
                <ConteudoEstilizado>
                    <Outlet />
                </ConteudoEstilizado>
                <FooterBar />
                <Rodape />
            </AppContainerEstilizado>
        </VideoProvider>
    )
}

export default PaginaBase;