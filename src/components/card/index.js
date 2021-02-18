/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Container,
  Group,
  Entities,
  Item,
  Picture,
  GroupTitle,
  Title,
  Meta,
  Type,
  Rating,
  SuperHost,
} from './styles/card';

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.Picture = function CardPicture({ children, ...restProps }) {
  return <Picture {...restProps}>{children}</Picture>;
};

Card.GroupTitle = function CardGroupTitle({ children, ...restProps }) {
  return <GroupTitle {...restProps}>{children}</GroupTitle>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Type = function CardType({ children, ...restProps }) {
  return <Type {...restProps}>{children}</Type>;
};

Card.Rating = function CardRating({ children, ...restProps }) {
  return (
    <Rating {...restProps}>
      <img src="/images/fav.png" alt="icon-rating" />
      {children}
    </Rating>
  );
};

Card.SuperHost = function CardSuperHost({ children, ...restProps }) {
  return <SuperHost {...restProps}>{children}</SuperHost>;
};
