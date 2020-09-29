import styled from "styled-components";

const VoteButton = styled.button`
  background-color: transparent;
  border: 1px solid #e7e7e7;
  cursor: pointer;
  height: 40px;
  width: 100px;
  color: white;
  font-size: 14px;
  @media (max-width: 768px) {
    margin-left: 5px;
    font-size: 9px;
    height: 24.5px;
  }
`;

export default VoteButton;
