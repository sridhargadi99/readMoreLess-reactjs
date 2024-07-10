// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 30px;
    align-items: center;
  }
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`
export const MainDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #334155;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ReactImage = styled.img`
  height: 300px;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`

export const ReactDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #334155;
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`
export const ReactButton = styled.button`
  height: 35px;
  width: 100px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  background-color: #1f81ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    height: 45px;
    width: 120px;
    align-self: center;
  }
`
