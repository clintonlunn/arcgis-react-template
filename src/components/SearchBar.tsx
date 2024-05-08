import Search from "@arcgis/core/widgets/Search.js";
import React, { useContext, useEffect, useRef } from "react";
import { MapContext } from "../contexts/MapProvider";

function SearchBar() {
  const { view } = useContext(MapContext);
  const searchDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let searchWidget: __esri.widgetsSearch;
    if (view && searchDivRef.current) {
      console.log("Creating search widget");
      console.log("View:", view);

      searchWidget = new Search({
        view: view,
        sources: [],
        container: searchDivRef.current,
      });

      console.log("Search widget:", searchWidget);
    } else {
      console.log("View or searchDivRef.current is not available");
    }

    return () => {
      if (searchWidget && searchWidget.destroy) {
        searchWidget.destroy();
      }
    }
  }, [view]);

  return <div ref={searchDivRef}></div>;

}

export default SearchBar;