import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerItems = styled.div`
  width: 50%;
  height: 80%;
  background-color: #ffffff;
  border-radius: 10px;

  @media (min-width: 400px) {
    width: 90%;
  }
`

export const ContainerInput = styled.div`
  width: 100%;
  height: 20%;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }
  }
`

export const Input = styled.input`
  width: 50%;
  height: 50px;
  color: #000000;
  border-radius: 5px;
  border: 2px solid rgba(209, 211, 212, 0.4);
  padding-left: 15px;
  box-shadow: 0 0 0 0;
  outline: 0;

  @media (max-width: 800px) {
    width: 90%;
    margin-top: 15px;
  }
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5px;
  background-color: #8052ec;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #5a21df;
  }
`

export const ContainerOrders = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 20px;
`
