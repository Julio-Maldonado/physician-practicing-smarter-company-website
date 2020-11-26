import styled from 'styled-components';

const H2 = styled.h2`
  // font-size: 1.5em;
  color: ${props => props.color};
  margin-left: 5vw;
  // margin-left: ${props => props.width < 1000 ? "5" : "0"}vw;
  margin-right: 5vw;
`;

export default H2;
