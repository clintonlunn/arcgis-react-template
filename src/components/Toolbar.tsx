import React, { lazy } from 'react'
import { CalciteActionBar, CalciteActionGroup, CalciteShellPanel } from '@esri/calcite-components-react';
import { useCalciteActionBar, ActionItem } from '../hooks/useCalciteActionBar';

const actionItems: ActionItem[] = [
  { name: 'Search Bar', icon: 'data-magnifying-glass', component: lazy(() => import('./SearchBar')) },
];

export function Toolbar() {
  const { currentAction, actions, shellPanelCollapsed } = useCalciteActionBar(
    actionItems,
    undefined
  );
  return (
    <CalciteShellPanel
      widthScale='l'
      slot='panel-start'
      position='start'
      collapsed={shellPanelCollapsed}
    >
      <CalciteActionBar slot='action-bar'>
        <CalciteActionGroup>
          {actions}

        </CalciteActionGroup>
      </CalciteActionBar>
      <React.Suspense fallback={<div>Loading...</div>}>
        {currentAction && <currentAction.component />}
      </React.Suspense>
    </CalciteShellPanel>
  );
}

export default Toolbar
