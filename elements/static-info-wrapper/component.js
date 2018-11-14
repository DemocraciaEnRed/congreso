import styled from 'styled-components'

const StaticInfoWrapper = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  padding: 80px 32px 123px 62px;
  margin-top: 108px;
  @media (min-width: 1024px) {
    > section {
      width: 90%;
      padding-right:10%;
    }
  }
`

export default StaticInfoWrapper
