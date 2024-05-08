import React from 'react'
import {
  CalciteNavigation,
  CalciteNavigationLogo,
  CalciteMenu,
} from '@esri/calcite-components-react'
import SearchBar from './SearchBar';
// import './Header.css'

function Header() {

  return (
    <CalciteNavigation slot='header'>
      <CalciteNavigationLogo
        slot='logo'
        heading='TEST REPO'
        target='_blank'
        href='https://google.com'
      />
      <CalciteMenu slot='content-end' label='asdf'>
        <SearchBar />
      </CalciteMenu>
    </CalciteNavigation>
  )
}

export default Header
