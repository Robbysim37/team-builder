import React from "react";
import styled from "styled-components";

const MemberCardStyle = styled.div`
    border: 2px solid black;
    background-color: #e7c9a9;
    margin: 1rem;
`

const Info = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
line-height: 100%;
`

const TextStyles = styled.div`
padding: 1rem;
${props => props.textType === "name" ? `font-size: 2rem;` : null}
${props => props.textType === "name" ? `margin-left: .5rem;` : null}
${props => props.textType === "email" ? `font-size: 1rem;` : null}
${props => props.textType === "email" ? `margin-right: 3rem;` : null}
${props => props.textType === "role" ? `font-size: 1.5rem;` : null}
`

const Role = styled.div`
background-color:white;
`


const MemberCard = (props) => {
    return(
        <MemberCardStyle>
            <Info>
                <TextStyles textType="name">{props.member.name}</TextStyles>
                <TextStyles textType="email">{props.member.email}</TextStyles>
            </Info>
            <Role>
                <TextStyles textType="role">Role: {props.member.role}</TextStyles>
            </Role>
        </MemberCardStyle>
    )
}

export default MemberCard