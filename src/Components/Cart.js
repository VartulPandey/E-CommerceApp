import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartCard from "./CartCard";

const Component = styled.div``;
const Heading = styled.div`
  display: flex;
  justify-content: center;
`;
const Span = styled.span`
  font-size: 2rem;
`;
const Container = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 0.5rem;
  color: white;
  background-color: green;
  cursor: pointer;
`;

const OrderItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  position: relative;
`;

const Element = styled.div``;

const Summary = styled.span`
  background-color: #d5eaf2;
  padding: 1rem;

  position: absolute;
  width: 25vw;
  height: 40vh;
  margin-left: 5vw;
  right: 1vw;
`;
const Label = styled.div`
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
const SummaryElement = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SummaryHeading = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  margin-top: 4vh;
`;
const SummaryData = styled.span`
  font-size: 1.4rem;
  margin-top: 4vh;
`;

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const totalCost=useSelector((store)=>store.totalPrice.total)
  // console.log("total price cart = "+totalCost)

  if (cartItem.length == 0)
    return (
      <>
        <hr /> <div>Cart</div>
      </>
    );

  return (
    <Component>
      <Heading>
        <Span>Your Bag</Span>
      </Heading>
      <Container>
        <Link to="/">
          {" "}
          <Button>CONTINUE SHOPPING</Button>
        </Link>
        <Link>Your Wishlist(0)</Link>
        <Button>_CHECKOUT NOW (0)</Button>
      </Container>

      <OrderItem>
        {cartItem.map((data,index) => {
          return (
            <div key={index}>          
              
              <CartCard data={data} index={index} />
            </div>
          );
        })}

        <Summary>
          <Label>Summary</Label>
          <SummaryElement>
            <SummaryData>Subtotal</SummaryData>
            <SummaryData>₹{totalCost}</SummaryData>
          </SummaryElement>
          <SummaryElement>
            <SummaryData>Estimated Shipping</SummaryData>
            <SummaryData>₹150</SummaryData>
          </SummaryElement>
          <SummaryElement>
            <SummaryData>Shipping Discount</SummaryData>
            <SummaryData>-₹150</SummaryData>
          </SummaryElement>
          <SummaryElement>
            <SummaryHeading>Total</SummaryHeading>
            <SummaryData>
              ₹
              {totalCost}
            </SummaryData>
          </SummaryElement>
        </Summary>
      </OrderItem>
    </Component>
  );
};

export default Cart;
