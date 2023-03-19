import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useEffect, useState } from "react";
import { productDetail } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../utils/TotalCostSlice";
import { removeItem, updateNumberOfItem } from "../utils/CartSlice";
import CloseIcon from '@mui/icons-material/Close';

const Component = styled.div`
  /* border: 1px solid black; */
  width: 70vw;
  height: 30vh;
  display: flex;
  padding-bottom: 4vh;
  margin: 8px;

  border-bottom: 3px solid black;
`;
const ImageDiv = styled.div`
  /* border: 1px solid black; */
  width: 20%;
  height: 100%;
`;
const Image = styled.img`
height: 100%;
margin-left: 2vw;
`;
const CartDetail = styled.div`
  /* border: 1px solid black; */
  width: 60%;
  height: 100%;
`;
const Span = styled.div`
    /* border: 1px solid black; */
    margin-bottom: 4vh;
    padding-left: 4vw;
`;
const SpanHeader = styled.span`
font-size: 1.3rem;
font-weight: 600;
`;
const SpanDetail = styled.span`
font-size: 1.3rem;
margin-left:1vw;
`;
const CartPrice = styled.div`
  /* border: 1px solid black; */
  position: relative;
  width: 30%;
  height: 100%;
`;
const Elements = styled.div`
/* border: 1px solid black; */
margin-top: 2vh;  
margin-bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  &:hover {
    cursor: pointer;
  }
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
  font-size: 2rem;
`;
const Price=styled.span`
font-size: 2rem;
margin-top: 3.5vh;
`
const RemoveButton=styled.div`
/* border: 1px solid black; */
cursor: pointer;
position: absolute;
right: 0;
top: 0;
`
const CartCard = ({data,index}) => {
  const [numberOfItem, setNumberOfItem] = useState(1);
  const dispach=useDispatch()
  
  useEffect(()=>{
    setNumberOfItem(data.numberOfItem)
    console.log("index = "+index)
  },[])


  function addItemToCart(price){
    dispach(updateNumberOfItem({index:index,numberofItems:numberOfItem+1}))

    setNumberOfItem(numberOfItem + 1);
    dispach(addPrice(price))
  }

  function removeItemFromCart(price)
  {
    if(numberOfItem!=1)
    dispach(updateNumberOfItem({index:index,numberofItems:numberOfItem-1}))
    setNumberOfItem(numberOfItem - 1) 
    dispach(addPrice(-price))
  }
  function RemoveButtonClicked(index){
      dispach(removeItem(index))
  }
    
  return (
    <Component>
      
      <ImageDiv>
        <Image src={productDetail[data?.id].images[data.color][0]}></Image>
      </ImageDiv>
      
      <CartDetail>
        <Span>
          <SpanHeader>Product:</SpanHeader>
          <SpanDetail>{productDetail[data?.id].name}</SpanDetail>
        </Span>
        <Span>
          <SpanHeader>ID:</SpanHeader>
          <SpanDetail>{data?.id}</SpanDetail>
        </Span>
        <Span>
          <SpanHeader>Color:</SpanHeader>
          <SpanDetail>{data.color}</SpanDetail>
        </Span>
        <Span>
          <SpanHeader>Size:</SpanHeader>
          <SpanDetail>{data.size}</SpanDetail>
        </Span>
      </CartDetail>

      <CartPrice>
      <Elements>
          <Icon
            onClick={() => {
              numberOfItem != 1 ? removeItemFromCart(productDetail[data?.id].sizes[data.size]) : null;
            }}
          >
            <RemoveOutlinedIcon   color={numberOfItem==1? "disabled":"action"} />
          </Icon>
          <NumberOfElement>{numberOfItem}</NumberOfElement>
          <Icon
            onClick={() => {
              addItemToCart(productDetail[data?.id].sizes[data.size])
            }}
          >
            <AddOutlinedIcon />
          </Icon>
        </Elements>
        <Elements>
            <Price>₹{numberOfItem * productDetail[data?.id].sizes[data.size]}</Price>
        </Elements>
        <RemoveButton onClick={()=>{RemoveButtonClicked(index)}}><CloseIcon/></RemoveButton>
      </CartPrice>



    </Component>
  );
};

export default CartCard;
