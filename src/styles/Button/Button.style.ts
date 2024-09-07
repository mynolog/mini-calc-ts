import styled from 'styled-components'

const ButtonStyle = styled.button`
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 25%;
  border: none;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
    transition: 0.2s;
  }
`
export default ButtonStyle
