import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: transparent;
  color: ${({ theme: { colorTheme } }) => colorTheme.primary.contrastText};
  padding: 0;
 
  &:hover {
    opacity: 0.5;
  }
`;

export default Button;
