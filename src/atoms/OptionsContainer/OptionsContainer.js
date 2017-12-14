import styled from 'styled-components';

const OptionsContainer = styled.div`
  left: 0px;
  position: absolute;
  border: 2px solid #cdd4d9;
  box-shadow: 4px 4px rgba(6,41,66,.1);
  border-radius: 4px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  background: #fff;

  &:before {
    content: "";
    border-top: 2px solid #cdd4d9;
    border-right: 2px solid #cdd4d9;
    height: 15px;
    width: 15px;
    position: absolute;
    pointer-events: none;
    background-color: #fff;
    z-index: -1;
    transform: translateX(-50%) translateY(-50%) rotate(315deg);
    top: -1px;
    left: 15%;
    z-index: 0;
  }
`;

export default OptionsContainer;
