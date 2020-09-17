import styled, {css} from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
      margin-top: 8px;
  }

  ${props => props.isFocused && css`
    color: #Ff9000;
    border-color: #Ff9000;
  `}

  ${props => props.isFilled && css`
    color: #Ff9000;
  `}

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
