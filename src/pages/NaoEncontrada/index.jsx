import styled from "styled-components";
import erro404 from "../../assets/erro_404.png";

const H1Estilizado = styled.h1`
    text-align: center;
    color: #FFF;
`
const Img404Estilizada = styled.img`
    
    max-width: 50%;
`

const Container404Estilizado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NaoEncontrada = () => {
    return (
        <Container404Estilizado>
            <H1Estilizado>Página não encontrada</H1Estilizado>
            <Img404Estilizada src={erro404} alt="Erro 404" />
        </Container404Estilizado>
    )
}

export default NaoEncontrada;