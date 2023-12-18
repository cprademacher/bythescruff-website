/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
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
  gap: 5px;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>Pro Anywhere</Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Description>
              <ButtonWrapper>
                <Button white outline size="l">
                  Read More
                </Button>
                <Button primary size="l">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3 h-3"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                  Add To Card
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://www.cnet.com/a/img/resize/e7a7d38637f013c251d7e6428516404351e38626/hub/2017/06/21/f7b9d886-a558-4fe2-87b2-6dded4e71411/apple-macbook-12-inch-2017-05.jpg?auto=webp&width=1200"
              alt="temporary image"
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
