import React from 'react';
import styled from "styled-components";
import { categories } from '../data';
import { CategoryItem } from './CategoryItem';

const Container = styled.div`
    display:flex;
    padding:10px;
    justify-content:space-between;
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
