import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    height:40px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center ;
    justify-content:center ;
    font-size:14;
    font-weight:500;
`

export const Annoncement = () => {
  return (
    <Container>Some greeaat Annoncment about deals Over 50$ !!!</Container>
  )
} 
