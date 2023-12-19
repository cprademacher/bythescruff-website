import styled from "styled-components";

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
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export default function NewProducts({newProducts}) {
  return (
    <StyledUl>
        {newProducts && newProducts.map(newProduct => (
            <li key={newProduct._id}><h1>{newProduct.title}</h1><img src={newProduct.images[0]} alt={newProduct.title}/></li>
        ))}
    </StyledUl>
  );
}
