import styled from "styled-components";

export const Overlay = styled.div`
  @media screen and (min-width: 320px) {
    height: 100vh;
    background-color: #f5f5f5;
    width: 100%;
    position: fixed;
    z-index: 3;
    left: 0;
    bottom: -100;
    overflow-x: hidden;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    bottom: 0;
  }
`;

export const NavBar = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 3.5em;
    margin: 0;
    box-sizing: border-box;
    padding: 0em 1.5em;
    color: black;
    border: 1px solid #d3d3d3;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const OneThirdDiv = styled.div`
  @media screen and (min-width: 320px) {
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => props.align};
    color: ${(props) => props.color};
  }
`;

export const LowerNavDiv = styled.div`
  width: 100%;
  height: 3.5em;
  margin: 0;
  box-sizing: border-box;
  color: rgba(102, 102, 102, 0.7);

  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.08);
`;

export const OneHalfDiv = styled.div`
  flex: calc(1 / 2);
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => (props.active ? "2px solid #3F8CFF" : "none")};
  color: ${(props) => (props.active ? "black" : "none")};
  box-sizing: border-box;
  font-weight: 600;
`;

export const LongInput = styled.input`
  width: 100%;
  height: 2.5em;
  font-size: 1em;
  border: none;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  margin-top: 1em;
  padding: 0em 1em;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-top: 1em;
`;

export const InfoTitle = styled.div`
  font-size: 0.9em;
  flex: 0.5;
  font-weight: bold;
  color: #555555;
`;

export const InfoInput = styled.input`
  font-size: 0.9em;
  flex: 0.5;
  background-color: #f4f6f9;
  border-radius: 5px;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.12);
  padding: 1em 0.5em;
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

export const GreenButton = styled.button`
  padding: 0.5em 1em;
  background-color: #429629;
  color: white;
  font-weight: 600;
  border: none;
  font-size: 1em;
  letter-spacing: 0.5px;
  border-radius: 4px;
  margin: 1em 1em;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const StepDiv = styled.div`
  width: 100%;
  padding: 1em 1em;
  background-color: white;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0.5em 0em;
`;

export const SmallCircle = styled.div`
  background-color: #8997b1;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  margin: 1px 0px;
`;
