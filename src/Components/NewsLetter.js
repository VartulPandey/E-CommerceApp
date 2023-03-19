import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
height: 40vh;
  background-color: #f0daea;
`;

const Heading = styled.span`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  font-weight: 700;
  padding-top: 4vh;
`;
const NewsletterDescription = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 2vh;
  font-size: 1.5rem;
`;
const EmialDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Email = styled.div`
  display: flex;
  border: 1px solid black;
  width: 20vw;
  align-items: center;
  justify-content: center;
  margin-top: 4vh;
`;
const Input = styled.input`
  height: 2rem;
  border: none;
  outline: none;
  width: 20vw;
  padding-left: 1vw;
`;
const Button = styled.button`
  display: flex;
  height: 2rem;
  background-color: green;
  align-items: center;
  justify-items: center;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Heading>NewsLetter</Heading>
      <NewsletterDescription>
        Get timely update from your favrorite products
      </NewsletterDescription>
      <EmialDiv>
        <Email>
          <Input placeholder="Your email"></Input>
          <Button>
            <SendIcon />
          </Button>
        </Email>
      </EmialDiv>
    </Container>
  );
};

export default NewsLetter;
