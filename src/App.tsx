
import { CalciteShell } from '@esri/calcite-components-react'
import React from 'react'
import FullScreenMap from './components/FullScreenMap'
import Header from './components/Header'
import Toolbar from './components/Toolbar'

export function App() {

  return (
    <div>
      <CalciteShell className={`calcite-mode-dark bg-dotted`}>
        <Toolbar />
        <Header />
        <FullScreenMap />
      </CalciteShell>
    </div>
  )
}

export default App
