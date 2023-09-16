import styled from "styled-components";

export const TodoInputBox = styled.div`
  border-top: 1px solid #e6f8ff;
    display: flex;
  margin: 0 1rem;
  padding: 1rem;
`;

export const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  background: transparent;
`;

export const AddButton = styled.button`
  outline: none;
  border: none;
  border-radius: 20px 20px;
  background-color: #e6f8ff;
  padding: 1rem 2rem;
  color: #78ade2;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #78ade2;
    color: #ffffff;
  }
  &:active {
    background-color: #78ade2;
    color: #ffffff;
  }
`;