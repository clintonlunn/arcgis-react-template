import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

export function init(container: HTMLDivElement): MapView {
    // // Destroy the view if it exists
    // if (app.view) {
    //     app.view.destroy()
    // }

    // Create a new map and view
    const map = new Map({
        basemap: 'topo-vector',
    })

    const options = {
        container: container,
        map: map,
        zoom: 8,
        center: [-112, 39.5],
    }

    return new MapView({ ...options })
}