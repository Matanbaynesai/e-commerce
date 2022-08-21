import React from 'react';
import styled from "styled-components";
import { categories } from '../data';
import { mobile } from '../responsive';
import { CategoryItem } from './CategoryItem';

const Container = styled.div`
    display:flex;
    padding:10px;
    justify-content:space-between;
    ${mobile({flexDirection:"column",padding:"0px"})}
`

export const Categories = () => {
  return (
    <Container>
        {
            categories.map((item)=> {
                return(
                    <CategoryItem key={item.id} item={item}/>
                )
            })
        }
    </Container>
  )
}
