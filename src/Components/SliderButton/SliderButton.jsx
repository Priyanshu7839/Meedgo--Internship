import React, { useState } from "react";
import styled from "styled-components";

const SliderButton = ({isChecked}) => {
 

  

 
  return (
    <StyledWrapper>
      <input
        checked={isChecked}
        type="checkbox"
        className="switch"
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    position: relative;
    height: 1rem;
    width: 2rem;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 9999px;
    background-color:#0f62fe;
    transition: all 0.3s ease;
    z-index: 10;
    margin-top: .35rem;
    
  }

  .switch:checked {
    background-color: #0f62fe;
  }

  .switch::before {
    position: absolute;
    content: "";
    left: calc(1.6rem - 1.6rem);
    top: calc(1.6rem - 1.6rem);
    display: block;
    height: 1rem;
    width: 1rem;
    cursor: pointer;
    border: 1px solid #0f62fe;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 10px rgba(100, 116, 139, 0.327);
    transition: all 0.3s ease;
  }

  .switch:hover::before {
    box-shadow: 0 0 0px 8px rgba(0, 0, 0, 0.15);
  }

  .switch:checked:hover::before {
    box-shadow: 0 0 0px 8px rgba(255, 118, 67, 0.15);
  }

  .switch:checked:before {
    transform: translateX(100%);
    border-color: #0f62fe;
    }


//   @media (min-width: 601px) and (max-width: 1000px) {
//   .switch {
   
//     height: 1.3rem;
//     width: 2.5rem;
    
//   }
//      .switch::before {
    
//     left: calc(1.6rem - 1.6rem);
//     top: calc(1.53rem - 1.6rem);
    
//     height: 1.4rem;
//     width: 1.4rem;
   
//   }
//  }
//   @media (min-width: 0px) and (max-width: 600px) {
//   .switch {
   
//     height: 1.3rem;
//     width: 2.2rem;
    
//   }
//      .switch::before {
    
//     left: calc(1.4rem - 1.6rem);
//     top: calc(1.6rem - 1.6rem);
    
//     height: 1.3rem;
//     width: 1.3rem;
   
//   }
//  }


`;



export default SliderButton;
