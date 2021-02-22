/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

/* Container,
  Logo,
  Filters,
  FiltersIn,
  FiltersBtn, */

export const HeaderSection = styled.section`
  padding: 50px 0;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    max-width: 1440px;
    margin: 0 auto 20px auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 13px;

  @media (min-width: 768px) {
    margin: 0 94px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 40px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const FiltersIn = styled.div`
  flex: 4;
  align-self: center;
  padding: 19px 16px;
  color: #bdbdbd;
`;

export const Filters = styled.div`
  display: flex;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  > ${FiltersIn}:last-of-type {
    border-left: 1px solid #f2f2f2;
  }
`;

export const FiltersBtn = styled.button`
  padding: 19px;
  margin: 0;
  text-decoration: none;
  background: none;
  border: none;
  border-left: 1px solid #f2f2f2;
  cursor: pointer;
  text-align: center;

  i {
    font-size: 24px;
    transform: (32deg);
    color: #eb5757;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;
