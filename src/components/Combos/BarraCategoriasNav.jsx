import styled from "styled-components";


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
    return(
        <>
        <NavMainContainer>
            <Enlace>COMBOS</Enlace>
            <Enlace>HAMBURGUESAS</Enlace>
            <Enlace>POLLO</Enlace>
            <Enlace>MENÚS AL PLATO</Enlace>
            <Enlace>LONCHERITAS</Enlace>
            <Enlace>COMPLEMENTOS</Enlace>
            <Enlace>BEBIDAS</Enlace>
            <Enlace>HELADOS</Enlace>
            <Enlace>INKA CHIPS</Enlace>
        </NavMainContainer>
        </>
    )
}
