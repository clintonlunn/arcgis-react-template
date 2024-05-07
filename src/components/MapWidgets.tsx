import Home from '@arcgis/core/widgets/Home';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import Locate from '@arcgis/core/widgets/Locate';
import Legend from '@arcgis/core/widgets/Legend';
import Search from '@arcgis/core/widgets/Search';
import useArcGISWidget from '../hooks/useArcGISWidget';

// Arcgos JS API Widgets that are overlaid on the map
const MapWidgets: React.FC = () => {
    useArcGISWidget([
        { WrappedWidget: Home, position: 'top-left' },
        { WrappedWidget: BasemapToggle, position: 'bottom-right', config: { secondBasemap: 'satellite' } },
        { WrappedWidget: Locate, position: 'top-left' },
        { WrappedWidget: Legend, position: 'top-left' },
        // { WrappedWidget: Search, container: 'searchDiv' }
        // { WrappedWidget: Search, position: 'top-right' }
    ]);

    return null;
};

export default MapWidgets;