import { useEffect, useState } from "react";
import styled from "styled-components";
import { productDetail } from "../utils/constants";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { addPrice } from "../utils/TotalCostSlice";

const Components = styled.div`
  display: flex;
  height: 90vh;
`;
const Images = styled.div`
  display: flex;
  overflow: auto;
  margin: 20px;
  height: 85vh;
  max-width: 35vw;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  margin: 20px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Name = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;
const Company = styled.span`
  font-size: 1rem;
  color: gray;
`;

const Description = styled.span`
  font-size: 1.2rem;
  margin-top: 4vh;
`;
const Price = styled.span`
  font-size: 2rem;
  margin-top: 4vh;
`;
const Select = styled.select`
  margin-left: 1vw;
  width: 3vw;
`;
const Option = styled.option`
  display: flex;
  justify-content: center;
`;
const Elements = styled.div`
  margin-top: 5vh;
  display: flex;
  align-items: center;
`;
const Colors = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18vw;
`;
const Color = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  border: none;
  margin-left: 1vw;
  height: 3vh;
  width: 1.5vw;
  cursor: pointer;
`;
const NumberOfElement = styled.div`
  /* display: flex;
align-items: center; */
  padding: 2vh;
  /* height: 2vh;
  width: 2vh; */
  border: 1px solid blue;
  margin-left: 1vw;
  margin-right: 1vw;
`;
const Icon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const Button = styled.button`
  font-weight: 700;
  background-color: green;
  color: white;
  margin-left: 14vw;
  cursor: pointer;
  /* background-color: transparent; */
  border: 1px solid blue;
  padding: 0.5rem;
`;
const VerticalImage = styled.div`
  /* background-color: lightgray; */
  width: 8vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Vimages = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  height: 18.8vh;
  width: 8vw;
  border: 2px solid white;

  &:hover {
    cursor: pointer;
    border: 2px solid blue;
  }
`;

const ProductDetail = () => {
  const param = useParams();
  const item = productDetail[param.id];
  const [itemColor, setItemColor] = useState(item.color[0]);
  const [mainImage, setMainImage] = useState("");
  const [numberOfItem, setNumberOfItem] = useState(1);
  const [size, setSize] = useState("S");

  const dispach = useDispatch();

  // useEffect(() => {
  //   if (itemColor == "") setItemColor();
  // }, []);

  useEffect(() => {
    setMainImage(item.images[itemColor][0]);
  }, [itemColor]);

  function AddToCartClicked(item, price) {
    dispach(addPrice(numberOfItem * price));

    dispach(
      addItem({
        id: item,
        color: itemColor,
        size: size,
        price: price,
        numberOfItem: numberOfItem,
      })
    );
  }

  return (
    <Components>
      <VerticalImage>
        {item.images[itemColor]?.map((data, index) => {
          return (
            <Vimages key={index} onMouseOver={() => setMainImage(data)}>
              <Image src={data}></Image>
            </Vimages>
          );
        })}
      </VerticalImage>
      <Images>
        <Image src={mainImage == "" ? item.images[0] : mainImage}></Image>
      </Images>
      <Wrapper>
        <Company>{item.company}</Company>
        <Name>{item.name}</Name>
        <Description>{item.descrip}</Description>
        <Price>₹{item.sizes[size]}</Price>
        <Elements>
          <Colors>
            Color:
            {item.color.map((data, index) => {
              return (
                <Color
                  onClick={() => {
                    setItemColor(data);
                  }}
                  key={index}
                  color={data}
                >
                  {data == itemColor && (
                    <CheckIcon sx={{ fontSize: 20, color: "white" }} />
                  )}
                </Color>
              );
            })}
          </Colors>
          Size:
          <Select
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
            <Option value="XXL">XXL</Option>
          </Select>
        </Elements>
        <Elements>
          <Icon
            onClick={() => {
              numberOfItem != 1 ? setNumberOfItem(numberOfItem - 1) : null;
            }}
          >
            <RemoveOutlinedIcon
              color={numberOfItem == 1 ? "disabled" : "action"}
            />
          </Icon>
          <NumberOfElement>{numberOfItem}</NumberOfElement>
          <Icon
            onClick={() => {
              setNumberOfItem(numberOfItem + 1);
            }}
          >
            <AddOutlinedIcon />
          </Icon>
          <Button
            onClick={() => {
              AddToCartClicked(param.id, item.sizes[size]);
            }}
          >
            ADD TO CART
          </Button>
        </Elements>
      </Wrapper>
    </Components>
  );
};

export default ProductDetail;
