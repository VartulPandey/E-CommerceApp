import { Link } from "react-router-dom";
import styled from "styled-components";
import { itemList } from "../utils/constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;
const Card = styled.div`
  position: relative;
  width: 24%;
  height: 60%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  cursor: default;
  border-radius: 20px;

  &:hover {
    transform: scale(1.005);
  }
`;
const ImageData = styled.span`
  position: absolute;
  font-size: 35px;
  cursor: default;
  font-weight: 600;
  z-index: 200;
  color: white;
  margin-bottom: 8vh;
`;
const ImageButton = styled.button`
  position: absolute;
  color: black;
  padding: 10px;
  z-index: 200;
  margin-top: 8vh;
  cursor: pointer;
`;
const ItemList = () => {
  return (
    <Container>
      {itemList.map((data) => {
        return (
          <Card key={data.id}>
            <Image src={data.image} />
            <ImageData>{data.name}</ImageData>
            <ImageButton>
              <Link to={`/product/${data.id}`}>SHOP NOW</Link>
            </ImageButton>
          </Card>
        );
      })}
    </Container>
  );
};

export default ItemList;
