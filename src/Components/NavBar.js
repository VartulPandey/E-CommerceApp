import { Badge, Input } from "@mui/material";
import { border } from "@mui/system";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const Content = styled.div`
  background-color: #f5f7f7;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Search = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex: 1;
`;
const AppName = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Edu NSW ACT Foundation', cursive;
`;
const Cart = styled.div`
  display: flex;
  justify-content: end;
  flex: 1;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  background-color: white;
  border: 0.1px solid grey;
`;
const Span = styled.span`
  font-size: 1.1rem;
  cursor: pointer;
`;
const INPUT = styled.input`
  border: none;
  outline: none;
  padding-left: 6px;
  
`;

const Menuitem = styled.div`
  margin-left: 25px;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <Content>
      <Search>
        <Span>EN</Span>
        <SearchBox>
          {/* <input placeholder="Search" style={{border:"none",outline:"none",paddingLeft:"10px"}}></input> */}
          <INPUT placeholder="Search" />
          <SearchIcon style={{cursor:"pointer"}} />
        </SearchBox>
      </Search>

      <AppName><Link to="/" style={{textDecoration:"none",}}>CLOTH HOUSE</Link></AppName>
      <Cart>
        <Menuitem>Register</Menuitem>
        <Menuitem>Signin</Menuitem>
        <Menuitem>
          <Badge badgeContent={5} color="primary">
            <Link to={"/cart"}> <ShoppingCartOutlinedIcon/></Link>
          </Badge>
        </Menuitem>
      </Cart>
    </Content>
  );
};

export default NavBar;
