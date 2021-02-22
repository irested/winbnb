/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/macro';

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 1440px;
    margin: auto;
  }
`;

export const Container = styled.div`
  margin: 0 13px;
  @media (min-width: 768px) {
    margin: 0 94px;
  }
`;

export const Entities = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 50px 34px;
`;

export const Item = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Picture = styled.img`
  max-width: 100%;
  border-radius: 24px;
  margin-bottom: 15px;
`;

export const GroupTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 12px;
`;

export const Rating = styled.p`
  display: flex;
  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    filter: invert(42%) sepia(23%) saturate(4058%) hue-rotate(330deg)
      brightness(102%) contrast(83%);
  }
`;

export const SuperHost = styled.p`
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 6px 8px;
  margin-right: 10px;

  @media (min-width: 768px) {
    font-size: 12px;
    padding: 7px 10px;
  }
`;

export const Type = styled.p`
  margin-right: 10px;
  line-height: 1.3em;
  flex-grow: 2;
`;

/* Container,
  Group,
  Title,
  Type,
  Rating,
  SuperHost, */
