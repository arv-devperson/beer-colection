import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  display: --ms-flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  align-self: center;
`;

export const PaginationButton = styled.button`
  color: #fff;
  text-transform: uppercase;
  background-color: #0a3d62;
  font-weight: 600;
  padding: 10px;
  border: none;
  transition: all 0.3s ease-out;
  cursor: pointer;
  width: 90px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    background-color: #6a89cc;
  }
  &:disabled {
    background-color: #3c6382;
    cursor: not-allowed;
  }
`;
