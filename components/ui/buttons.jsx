import React from 'react';
import styled from 'styled-components';

//-------------------------------------------------- SPACE BUTTON---------------------------------------

export const SpaceButton = ({ children }) => {
  return (
    <StyledWrapper>
      <button type="button" className="btn py-3 px-6 flex flex-row w-auto group mt-1 sm:mt-5 md:mt-5 lg:mt-5 transform scale-75 sm:scale-90 ">
        <strong className='w-auto flex flex-row items-center gap-x-2 -mt-1'>{children}</strong>
        <div id="container-stars">
          <div id="stars" />
        </div>
        <div id="glow">
          <div className="circle" />
          <div className="circle" />
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 300% 300%;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#212121, #212121),
      linear-gradient(
        137.48deg,
        #ffdb3b 10%,
        #fe53bb 45%,
        #8f51ea 67%,
        #0044ff 87%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  #container-stars {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
  }

  strong {
    z-index: 2;
    font-size: 1.10rem;
    letter-spacing: 2px;
    color: #f7f7f7;
    text-shadow: 0 0 4px white;
  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;
  }

  .circle {
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;
  }

  .circle:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  .circle:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }

  .btn:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }

    .btn:hover {
    transform: scale(1.1); // Valor por defecto
  }

  @media (max-width: 640px) { // Pantallas "sm" y menores
    .btn:hover {
      transform: scale(1.0); // Escala para pantallas "sm"
    }
  }

  @media (max-width: 480px) { // Pantallas "xs"
    .btn:hover {
      transform: scale(0.90); // Escala para pantallas "xs"
    }
  }

  .btn:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  .btn:active .circle {
    background: #fe53bb;
  }

  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;
  }

  #stars::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
  }

  #stars::after {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  #stars::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
  }

  #stars::before {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }

  @keyframes animStar {
    from {
      transform: translate(0, 0);
    }

    to {
      transform: translate(-135rem, 50rem);
    }
  }

  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0);
    }
  }

  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }`;

//--------------------------------------------------END SPACE BUTTON---------------------------------------


//-------------------------------------------------- SOCIAL BUTTONS---------------------------------------

export function IconBtn({ name, link, icon }){

  const styleBtn = () => {
    if (name === 'linkedin')
      return "social-icon-3"; 
    else if(name === 'github')
      return "social-icon-4";
    else if(name === 'x')
      return "social-icon-1";
  };

  return(
    <>
      <a href={link} className='transform scale-75 md:scale-100' target="_blank" rel="noopener noreferrer">
        <StyledWrapper2>
          <div className="socialcontainer">
            <div className={styleBtn()}>
              {icon}
            </div>
            <div className={styleBtn()}>
              {icon}
            </div>
          </div>
        </StyledWrapper2>
      </a>
    </>
  );
}

const StyledWrapper2 = styled.div`
  .social-login-icons {
    display: flex;
    align-items: center;
  }
  .social-login-icons svg {
    width: 40px;
  }

  .social-icon-1,
  .social-icon-2,
  .social-icon-3,
  .social-icon-4 {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* .social-icon-1 i{
      color: rgba(175, 7, 7, 0.899);
      font-size:50px;

  } */
  /* .social-icon-2 i{
      color: skyblue;
      font-size:50px;

  } */
  /* .social-icon-3 i{
      color: rgb(58 58 227 / 87%);
      font-size:50px;

  } */
  /* .social-login-icons{
      margin: 30px 0px;
  } */

  .socialcontainer {
    height: 50px;
    overflow: hidden;
  }
  .social-icon-1 {
    transition-duration: 0.4s;
    background: linear-gradient(180deg, rgba(153,153,153,1) 0%, rgba(85,85,85,1) 35%, rgba(30,30,30,1) 100%);
  }
  .socialcontainer:hover .social-icon-1 {
    transform: translateY(-50px);
  }
  .social-icon-2 {
    transition-duration: 0.4s;
    background: linear-gradient(
      72.44deg,
      #ff7a00 11.92%,
      #ff0169 51.56%,
      #d300c5 85.69%
    );
  }
  .socialcontainer:hover .social-icon-2 {
    transform: translateY(-50px);
  }
  .social-icon-3 {
    transition-duration: 0.4s;
    background: linear-gradient(180deg, rgba(65,135,255,1) 0%, rgba(50,105,198,1) 40%, rgba(0,45,121,1) 100%);
  }

  .socialcontainer:hover .social-icon-3 {
    transform: translateY(-50px);
  }
  .social-icon-4 {
    transition-duration: 0.4s;
    background: linear-gradient(
      180deg,
      rgba(129, 34, 144, 1) 0%,
      rgba(77, 34, 124, 1) 91%
    );
  }

  .socialcontainer:hover .social-icon-4 {
    transform: translateY(-50px);
  }`;

//------------------------------------------------END SOCIAL BUTTONS---------------------------------------
