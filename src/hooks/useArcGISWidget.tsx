import { useEffect, useRef, useContext } from 'react';
import { MapContext } from '../contexts/MapProvider';

interface ArcGISWidgetProps {
    WrappedWidget: any;
    position?: "bottom-leading" | "bottom-left" | "bottom-right" | "bottom-trailing" | "top-leading" | "top-left" | "top-right" | "top-trailing" | "manual";
    config?: object;
    container?: string;
}

// Custom hook to add an ArcGIS API for JavaScript widget to the view
function useArcGISWidget(widgets: ArcGISWidgetProps[]) {
    const { view } = useContext(MapContext);
    const widgetInstances = useRef(new Map());

    useEffect(() => {
        if (view) {
            widgets.forEach(({ WrappedWidget, position = "top-left", config = {}, container }) => {

                const widget = new WrappedWidget({
                    view,
                    container,
                    ...config
                });

                widgetInstances.current.set(WrappedWidget, widget);

                // if a container is specified, don't add the widget to the view's UI because it will be added to the container
                if (!container) {
                    view.ui.add(widget, position);
                }
            });
        }

        // Capture the current value of widgetInstances.current in a closure
        const currentWidgetInstances = widgetInstances.current;

        return () => {
            currentWidgetInstances.forEach((widget, WrappedWidget) => {
                view?.ui.remove(widget);
                currentWidgetInstances.delete(WrappedWidget);
            });
        }
    }, [widgets, view]);

    return widgetInstances;
}

export default useArcGISWidget;