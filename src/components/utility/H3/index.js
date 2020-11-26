import styled from 'styled-components';

const H3 = styled.h3`
  color: ${props => props.color};
  margin-left: 10vw;
  // margin-left: ${props => props.width < 1000 ? "10" : "2.5"}vw;
  margin-right: 10vw;
`;

export default H3;
