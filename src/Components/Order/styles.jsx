import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import styled from 'styled-components'

export const Order = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  color: #000000;
  border-radius: 5px;
  background: ${(props) => (props.orderColor ? '#E8FF8B' : '#e4e4e4')};
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);

  @media (min-width: 400px) {
    width: 90%;
  }
`

export const RocketStyle = styled(RocketLaunchIcon)`
  color: #4f0fc5;
  cursor: pointer;

  &:hover {
    color: #7232e8;
  }
`
