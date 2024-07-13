import Home from "./pages/Home/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NovoVideo from "./pages/NovoVideo/index.jsx";
import { VideoProvider } from "./contexts/VideoContext.jsx";
import styled from "styled-components";
import '@fontsource/source-sans-pro';
import NaoEncontrada from "./pages/NaoEncontrada/index.jsx";
import PaginaBase from "./pages/PaginaBase/index.jsx";

/*const FooterEstilizado = styled.footer`
.footer-bar, footer {
    width: 100%;
    bottom: 0;
}
`*/

const AppRoutes = () => {
    return (
        <VideoProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Home />} />
                        <Route path="novovideo" element={<NovoVideo />} />
                        <Route path="*" element={<NaoEncontrada />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </VideoProvider>
    );
}

export default AppRoutes;
