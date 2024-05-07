import Search from "@arcgis/core/widgets/Search.js";
import React, { useContext, useEffect, useRef } from "react";
import { MapContext } from "../contexts/MapProvider";

function SearchBar() {
  const { view } = useContext(MapContext);
  const searchDivRef = useRef<HTMLDivElement | null>(null);
  const searchWidgetRef = useRef<__esri.widgetsSearch | null>(null);

  useEffect(() => {
    if (view && searchDivRef.current) {
      console.log("Creating search widget");
      console.log("View:", view);

      searchWidgetRef.current = new Search({
        view: view,
        sources: [],
        container: searchDivRef.current,
      });

      console.log("Search widget:", searchWidgetRef.current);
    } else {
      console.log("View or searchDivRef.current is not available");
    }

    return () => {
      if (searchWidgetRef.current) {
        searchWidgetRef.current.destroy();
        searchWidgetRef.current = null;
        searchDivRef.current = null;
      }
    }
  }, [view]);

  return <div ref={searchDivRef}></div>;
}

export default SearchBar;