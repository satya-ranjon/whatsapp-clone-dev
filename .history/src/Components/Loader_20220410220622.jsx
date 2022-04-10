import { render } from "@testing-library/react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { FiLoader } from 'react-icons/fi'
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

render(
  <div className=" bg-[#0a1014] w-full h-screen ">
    <div className="flex justify-center">
      <Rotate>
        <FiLoader className="text-9xl text-[#2a3942]" />
      </Rotate>
    </div>
  </div>
);
export default Rotate;