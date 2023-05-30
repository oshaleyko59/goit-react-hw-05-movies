import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: green;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: green;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const FlexColumn = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  border-bottom: solid gray 1px;
  flex-grow: 2;
`;

export const GoBack = styled(Link)`
  margin-bottom: 8px;
  width: 80px;
  text-decoration: none;
  padding: 0 4px;
  color: orangered;
  border-radius: 4px;
  border: solid 1px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
