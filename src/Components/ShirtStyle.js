import styled from "styled-components";
import { productLists } from "../utils/constants";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useParams } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ShirtCard = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 55vh;
  width: 23vw;
  margin: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Icons = styled.div`
  position: absolute;
  display: flex;
  opacity: 0;
  width: 100%;
  height: 100%;
  /* z-index: 200; */
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7fdff;
  padding: 8px;
  margin: 10px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`;
const DarkenBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0;
  z-index: -100;
  &:hover {
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
  }
`;
const ShirtStyle = () => {
  const param=useParams()

  return (
    <Container>
      {productLists[param.id].map((data) => {
        return (
          <ShirtCard key={data.index}>
            <Image src={data.img}></Image>

            <Icons>
              <Icon>
                <ShoppingCartOutlinedIcon />
              </Icon>
              <Icon>
                <Link to={`/detail/${data.index}`}> <SearchOutlinedIcon /></Link>
              </Icon>
              <Icon>
                <FavoriteBorderOutlinedIcon />
              </Icon>
            </Icons>
            <DarkenBackground></DarkenBackground>
          </ShirtCard>
        );
      })}
    </Container>
  );
};

export default ShirtStyle;
