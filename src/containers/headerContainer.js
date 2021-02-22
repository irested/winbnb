import React from 'react';
import { Header } from '../components';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Container>
        <Header.Logo src="/images/logo.png" />
        <Header.Filters>
          <Header.FiltersIn>Location</Header.FiltersIn>
          <Header.FiltersIn>Guest</Header.FiltersIn>
          <Header.FiltersBtn>
            <i className="las la-search" />
          </Header.FiltersBtn>
        </Header.Filters>
      </Header.Container>
    </Header>
  );
}
