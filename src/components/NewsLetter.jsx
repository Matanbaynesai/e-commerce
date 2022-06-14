import { Description as Desc, Title } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    
`
const Title = styled.h1``
const Desc = styled.div``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``
export const NewsLetter = () => {
  return (
    <Container>
        <Title></Title>
        <Desc></Desc>
        <InputContainer/>
        <Input/>
        <Button>
            <Send/>
        </Button>
    </Container>
  )
}
