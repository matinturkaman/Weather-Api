import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 320px;
  height: 250px;
  background: #ffffff31;
  border-radius: 13px;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 220px;
  padding: 10px;
  box-shadow: inset 2px -2px 7px #cacccd;
  background: white;
  border-radius: 7px;
  border: none;
  outline: none;
`;

export const Image = styled.img`
  width: 140px;
  transform: translateY(-80px);
`;

export const Link = styled.a`
  @media (max-width: 768px) and (min-width: 310px) {
    display: none;
  }
`;

export const Bold = styled.p`
  width: 140px;
  transform: translateY(-75px);
  font-weight: 700;
  font-size: 23px;
  color: white;
`;

export const Text = styled.p`
  width: 200px;
  transform: translateY(-65px);
  font-weight: 400;
  font-size: 15px;
  color: white;
`;

export const Div = styled.div`
  width: 85%;
  height: 25px;
`;

export const Hr = styled.hr`
  width: 90%;
`;
