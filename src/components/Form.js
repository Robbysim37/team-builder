import React from "react";
import styled from "styled-components";

const FormStyles = styled.form`
background-color: rgb(230, 230, 230);
border: 2px solid black;
width: fit-content;
margin: auto;
display:flex;
justify-content: space-around;
flex-direction:column;
`

const FormRow = styled.div`
display:flex;
justify-content: space-around;
`

const InputStyles = styled.input`
margin: 10px;
${props => props.type === "submit" ? `width:10%;` : null}
${props => props.type === "submit" ? `margin:auto;` : null}
`

const LabelStyles = styled.label`
margin: 10px;
`

const Form = (props) => {

    const onFormSubmit = (e) => {
        e.preventDefault()
        props.setTeamList([...props.teamList,props.memberBuilder])
        console.log(props.teamList)
    }

    const onInputChange = (e) => {
        props.setMemberBuilder({
            ...props.memberBuilder,
            [e.target.name]: e.target.value
        })
    }
    // const onSelectChange = (e) => {
    //     props.setMemberBuilder({
    //         ...props.memberBuilder,
    //         [e.target.name]: e.target.value
    //     })
    // }

    return(
        <div>
        
            <FormStyles onSubmit={onFormSubmit}>
                <h1>Add a new member</h1>
                <FormRow>
                    <LabelStyles>Name:
                        <InputStyles type="text" name="name" onChange={onInputChange}>
                        </InputStyles>
                    </LabelStyles>
                    <LabelStyles>Email:
                        <InputStyles type="text" name="email" onChange={onInputChange}>
                        </InputStyles>
                    </LabelStyles>
                </FormRow>
                <FormRow>
                    <LabelStyles>Role:
                        <select name="role" onChange={onInputChange}>
                            <option/>
                            <option value="Frontend Engineer">Frontend Engineer</option>
                            <option value="Backend Engineer">Backend Engineer</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Databasing">Databasing</option>
                        </select>
                    </LabelStyles>
                </FormRow>
                <InputStyles type="submit" value="submit"></InputStyles>
            </FormStyles>
        </div>
    )
}

export default Form