import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  CalciteLabel,
  CalciteSwitch,
  CalciteNavigation,
  CalciteNavigationLogo,
  CalciteMenu,
  CalciteMenuItem,
} from '@esri/calcite-components-react'
import Search from '@arcgis/core/widgets/Search';
import { MapContext } from '../contexts/MapProvider';
import SearchBar from './SearchBar';
// import './Header.css'

function Header() {
  // const { view } = useContext(MapContext);
  // const searchDivRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   let searchWidget: __esri.widgetsSearch;
  //   if (view && searchDivRef.current) {
  //     console.log("Creating search widget");
  //     console.log("View:", view);

  //     searchWidget = new Search({
  //       view: view,
  //       sources: [],
  //       container: searchDivRef.current,
  //     });

  //     console.log("Search widget:", searchWidget);
  //   } else {
  //     console.log("View or searchDivRef.current is not available");
  //   }

  //   return () => {
  //     if (searchWidget) {
  //       searchWidget.destroy();
  //     }
  //   }
  // }, [view]);

  return (
    <CalciteNavigation slot='header'>
      <CalciteNavigationLogo
        slot='logo'
        heading='TEST REPO'
        target='_blank'
        href='https://geology.utah.gov/'
      />
      <CalciteMenu slot='content-end' label='asdf'>
        <SearchBar />
      </CalciteMenu>
    </CalciteNavigation>
  )
}

export default Header
