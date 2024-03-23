import styled from "styled-components";
import { Link } from "react-router-dom"

const NavMainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    box-shadow: 0 0 10px 5px rgba(168, 160, 160, 0.5); /* Color oscuro con un brillo de 0.5 */
    padding: 15px;
    border-radius: 20px;
    justify-content: center;
    margin-top: 30px;
`;

const Enlace = styled.p`
    cursor: pointer;
    color: #173083;
    font-weight: 600;
    font-size: 0.9rem;
`;

export const BarraCategoriasNav = () => {
    return (
        <>
            <NavMainContainer>
                <Link to="/menu/combos">
                     <Enlace>COMBOS</Enlace>
                </Link>
                <Link to="/menu/hamburguesas">
                    <Enlace>HAMBURGUESAS</Enlace>
                </Link>
                <Link to="/menu/pollo">
                    <Enlace>POLLO</Enlace>
                </Link>
                <Link to="/menu/menus-al-plato">
                    <Enlace>MENÚS AL PLATO</Enlace>
                </Link>
                <Link to="/menu/loncheritas">
                    <Enlace>LONCHERITAS</Enlace>
                </Link>

                <Link to="/menu/complementos">
                    <Enlace>COMPLEMENTOS</Enlace>
                </Link>

                <Link to="/menu/bebidas">
                    <Enlace>BEBIDAS</Enlace>
                </Link>
                <Link to="/menu/helados">
                    <Enlace>HELADOS</Enlace>
                </Link>
                <Link to="/menu/inka-chips">
                    <Enlace>INKA CHIPS</Enlace>

                </Link>
            </NavMainContainer>
        </>
    )
}
