/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin: 30px 0 20px;
    font-weight: normal;
`;

export default function NewProducts({ newProducts }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {newProducts &&
          newProducts.map((newProduct) => (
            <ProductBox key={newProduct._id} {...newProduct} />
          ))}
      </ProductsGrid>
    </Center>
  );
}
