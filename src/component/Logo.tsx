import React, { FC } from "react";
import styled from "styled-components";

export const Logo: FC = () => {
    return <div className="text-9xl font-bold text-center">
        <Te>te</Te>
        <Tech>tech</Tech>
    </div>
}

const Fonte = styled.span`
    font-family: 'Ruluko', serif;
`;
const Te = styled(Fonte)`
    color: #0097a7
`;

const Tech = styled(Fonte)`
    color: #ff9900
`;
