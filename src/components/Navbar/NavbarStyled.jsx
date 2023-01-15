import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 0.6em 1rem;
  background-color: #262625;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.377) 0px 20px 20px -20px;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;

  i {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
  }
  input {
    outline: none;
    font-size: .9em;
    font-weight: bold;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.2rem;
    transition: all 0.3s;
    :focus {
      border: 2px solid #13535a;
    }
    ::placeholder {
      font-size: .9em;
    }
  }
`;

export const Img_Logo = styled.img`
  width: 7rem;
  height: 5rem;
  object-fit: cover;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: #9bb9bf;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  :hover {
    background-color: #7ca2a6;
  }
`;
