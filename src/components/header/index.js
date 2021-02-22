/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  HeaderSection,
  Container,
  Logo,
  Filters,
  FiltersIn,
  FiltersBtn,
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <HeaderSection {...restProps}>{children}</HeaderSection>;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ src, ...restProps }) {
  return <Logo src={src} {...restProps} alt="Logo" />;
};

Header.Filters = function HeaderFilters({ children, ...restProps }) {
  return <Filters {...restProps}>{children}</Filters>;
};

Header.FiltersIn = function HeaderFiltersIn({ children, ...restProps }) {
  return <FiltersIn {...restProps}>{children}</FiltersIn>;
};

Header.FiltersBtn = function HeaderFiltersBtn({ children, ...restProps }) {
  return <FiltersBtn {...restProps}>{children}</FiltersBtn>;
};

// usestate pour location and guest
// usestate boolean pour ouvrir et fermer le modal
