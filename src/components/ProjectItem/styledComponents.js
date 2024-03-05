import styled from 'styled-components'

export const BgContainer = styled.div`
  margin-left: 81px;
`

export const SelectCategoryInput = styled.select`
  height: 34px;
  width: 31%;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  margin-top: 39px;
  margin-bottom: 39px;
  outline: none;
`

export const ProjectsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  margin-bottom: 14px;
  margin-top: 49px;
  width: 451px;
`

export const FailureHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 31px;
  font-weight: bold;
  margin-bottom: -10px;
`

export const FailureInfo = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 450;
`

export const FailureRetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  border-radius: 3.9px;
  border: none;
  outline: none;
  padding: 11px 26px 11px 26px;
`
