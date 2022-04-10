import styled from "styled-components";
import { keyframes } from "styled-components";

const Heart = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
`;

// eslint-disable-next-line no-undef
const heartBeat = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


 const loader = styled(Heart)`
  animation: ${heartBeat} 1s infinite;
`;

export default loader;