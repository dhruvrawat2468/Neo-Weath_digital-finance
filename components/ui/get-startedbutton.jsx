import React from 'react';
import styled from 'styled-components';

const StartedButton = ({text}) => {
  return (
    <StyledWrapper>
      <button>
        {text}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    font-size: 1rem;
    padding: 0.8em 2em;
    background-color: #000000ff;
    border: 3px solid #0254c0ff;
    border-radius: 1em;
    color: #fff;
    font-weight: bolder;
    transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s;
    box-shadow: -5px 5px 0px 0px #0254c0ff;
  }

  button:hover {
    transform: translate(5px, -5px);
  }`;

export default StartedButton;
