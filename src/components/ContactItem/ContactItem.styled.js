import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  align-items: center;
  transition: transform 300ms ease-in-out;
&:hover {
    transform: scale(1.2);
`;

export const Li = styled.li`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  transition: background-color 300ms ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;
