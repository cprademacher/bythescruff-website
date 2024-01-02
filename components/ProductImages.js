import styled from "styled-components";
import { useState } from "react";

const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

const LittleImages = styled.img`
  max-height: 100%;
  object-fit: contain;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? "border-color: #ccc;"
      : "border-color: transparent; opacity: 0.9;"}
  height: 75px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
`;

/* eslint-disable @next/next/no-img-element */
export default function ProductImages({ images }) {
  const [selectedImage, setSelectedImage] = useState(images?.[0]);

  return (
    <>
      <BigImageWrapper>
        <BigImage src={selectedImage} alt="basic" />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            active={image === selectedImage}
            onClick={() => setSelectedImage(image)}
            key={image}
          >
            <LittleImages src={image} alt="hello" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
