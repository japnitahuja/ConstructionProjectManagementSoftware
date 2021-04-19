import styled from "styled-components";


export const NavBar = styled.div`
 @media screen and (min-width: 320px) {
    width:100vw;
    height:40px;
    font-family: 'Roboto', sans-serif;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    background-color: #6C7B8A;
    color: white;
  }
`;

export const Heading = styled.p`
 @media screen and (min-width: 320px) {
    margin:0;
  }
`;

export const NotifDiv = styled.div`
 @media screen and (min-width: 320px) {
    padding-right:5%;
    text-align:center;
  }
`;