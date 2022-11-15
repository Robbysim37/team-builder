import React from "react";
import styled from "styled-components";
import MemberCard from "./MemberCard";

const TeamCardBackground = styled.div`
    background-color: rgba(0,0,0,0.2);
    margin: auto;
    padding: 1rem;
    border-radius: 25px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 50%;
`
const TeamContainer = (props) => {
    return(
        <TeamCardBackground>
            {props.teamList.map(member => {return(<MemberCard member={member}></MemberCard>)})}
        </TeamCardBackground>
    )
}

export default TeamContainer