import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.4fr;
`;

export default function ProductPage({ product }) {
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
        <Title>{product.title}</Title>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
