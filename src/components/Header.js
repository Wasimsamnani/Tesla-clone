import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import {selectCar} from '../features/car/carSlice'
import { useSelector } from "react-redux";
function Header() {
  const [Open, setOpen] = useState(false);
  const cars = useSelector(selectCar)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo of tesla" />
      </a>
      <Menu>
        {cars && cars.map(function(cars,index){
            return <a href={`#${cars}`} key={index}>{cars}</a>
        })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setOpen(true)} />
      </RightMenu>
      <BurgerNav show={Open}>
        <CloseWrapper>
          <CustomClose onClick={()=>setOpen(false)}/>
        </CloseWrapper>
        {cars && cars.map((cars,index)=>(
            <li keys={index}>
            <a href={`#${cars}`}>{cars}</a>
          </li>
        ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-wrap: nowrap;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  transform: ${(props) => props.show ? "translateX(0)" : "translateX(100%)"};
  transition:transform 0.2s ;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CustomClose = styled(CloseSharpIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
