import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 25px;


    &:hover{
      color: #666;
    }

    svg{
      margin-right: 4px;
    }

  }

`;

export const HowItWorkInfo = styled.section`
  margin-top: 70px;
  max-width: 700px;
  text-align: justify;

  h2{
    color: #fff;
  }


`;

export const Subtitle = styled.h2`
  font-size: 25px;
  max-width: 700px;
  line-height: 56px;
  font-family: Poppins, sans-serif;
  padding-bottom: 10px;
  color: #fff;

  svg{
    display: flex;
    align-items: center;

  }

`

export const Card = styled.div`
  margin-top: 80px;
  max-width: 900px;

  a{
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    transition: transform 0.2s;
    text-align: justify;

     & + a {
       margin-top: 16px;
     }

    &:hover{
     transform: translateX(10px)
    }

    div {
      margin: 16px;
      flex: 1;

      strong{
        font-size: 20px;
        color: #3D3D4D;
      }


      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
        text-align: justify;
      }
    }

    svg{
      margin-left: auto;
      margin-right: 16px;
      color: #47248f;
    }



  }
`;

