import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
  width: 100%;
  max-height: 100%;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
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
      <Image src={selectedImage} alt="basic" />
      <ImageButtons>
        {images.map((image) => (
          <ImageButton onClick={() => setSelectedImage(image)} key={image.id}>
            <Image src={image} alt="hello" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
