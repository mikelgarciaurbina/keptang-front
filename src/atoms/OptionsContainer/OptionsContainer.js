import styled from 'styled-components';

const OptionsContainer = styled.div`
  background: #fff;
  border: 2px solid #cdd4d9;
  border-radius: 4px;
  box-shadow: 4px 4px rgba(6, 41, 66, 0.1);
  display: flex;
  flex-wrap: wrap;
  left: 0px;
  padding: 5px;
  position: absolute;

  &:before {
    background-color: #fff;
    border-right: 2px solid #cdd4d9;
    border-top: 2px solid #cdd4d9;
    content: '';
    left: 15%;
    height: 15px;
    pointer-events: none;
    position: absolute;
    top: -1px;
    transform: translateX(-50%) translateY(-50%) rotate(315deg);
    width: 15px;
    z-index: 0;
  }
`;

export default OptionsContainer;
