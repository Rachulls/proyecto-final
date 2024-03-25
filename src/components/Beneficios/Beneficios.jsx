import styled from "styled-components";

const BeneficiosHeader = styled.div`
text-align: center;
padding: 20px;
padding-left: 100px;
padding-right: 100px;
background-color: white;
border-radius: 10px 10px 0 0;
`;

const BeneficiosContent = styled.div`
padding: 30px 0 20px;
padding-left: 100px;
padding-right: 100px;
background-color: white;
`;

export const Beneficios = () => {
    return (
        <>
        <BeneficiosHeader>
            <h1 style={{color: "#ffb500", backgroundColor: "#173083", borderRadius: "10px 10px 0 0"}}>DISFRUTA NUESTROS BENEFICIOS | BEMBOS</h1>
        </BeneficiosHeader>
        <BeneficiosContent>
            <ul style={{listStyle: "none", display: "flex", justifyContent: "center", gap: "1px"}}>
                <li>
                    <button style={{color: "#21388b", border: "none", background: "none", cursor: "pointer", borderBottom: "2px solid #8c8c8c"}}>FRIENDZONE</button>
                </li>
                <li>
                    <button style={{color: "#21388b", border: "none", background: "none", cursor: "pointer", borderBottom: "2px solid #8c8c8c"}}>GILEOS</button>
                </li>
                <li>
                    <button style={{color: "#21388b", border: "none", background: "none", cursor: "pointer", borderBottom: "2px solid #8c8c8c"}}>RELACIÓN</button>
                </li>
                <li>
                    <button style={{color: "#21388b", border: "none", background: "none", cursor: "pointer", borderBottom: "2px solid #8c8c8c"}}>DESTINADOS</button>
                </li>
            </ul>
        </BeneficiosContent>
        </>
    );
};