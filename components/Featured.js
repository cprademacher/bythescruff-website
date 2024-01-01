/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "./icons/CartIcon";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Description>{product.description}</Description>
              <ButtonWrapper>
                <ButtonLink
                  href={"/product/" + product._id}
                  white={1}
                  outline={1}
                >
                  Read More
                </ButtonLink>
                <Button white={1} onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add To Cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <img src={product.images[0]} alt="temporary image" />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
