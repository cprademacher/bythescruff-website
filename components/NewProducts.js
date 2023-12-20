/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding-top: 30px;
`;

const StyledUl = styled.ul`
  display: flex;
  background-color: green;
  height: 350px;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  img {
    width: 200px;
    height: auto;
    object-fit: contain;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function NewProducts({ newProducts }) {
  return (
    <Center>
      <StyledGrid>
        {newProducts &&
          newProducts.map((newProduct) => (
            <ProductBox key={newProduct._id} {...newProduct} />
          ))}
      </StyledGrid>
    </Center>
  );
}
