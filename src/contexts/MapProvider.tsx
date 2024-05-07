import React, { createContext, useState } from "react";
import MapView from "@arcgis/core/views/MapView";

type MapContextProps = {
    view?: MapView,
    activeLayers?: __esri.Collection<__esri.ListItem>, // add a layers property to the context
    loadMap?: (container: HTMLDivElement) => Promise<void>
    setActiveLayers?: (layers: __esri.Collection<__esri.ListItem>) => void
}

export const MapContext = createContext<MapContextProps>({});

export function MapProvider({ children }: { children: React.ReactNode }) {
    const [view, setView] = useState<MapView>();
    const [activeLayers, setActiveLayers] = useState<__esri.Collection<__esri.ListItem>>();

    async function loadMap(container: HTMLDivElement) {
        if (view) return;
        const { init } = await import("../util/util")
        setView(init(container))
    }

    return (
        <MapContext.Provider value={{ view, loadMap, activeLayers, setActiveLayers }}>
            {children}
        </MapContext.Provider>
    )
}