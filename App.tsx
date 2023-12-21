import React from 'react';
import PresupuestoScreen from './src/screens/PresupuestoScreen';
import PresupuestoState from './src/context/Presupuesto/PresupuestoState';

const App = () => {
  return (
    <PresupuestoState>
      <PresupuestoScreen />
    </PresupuestoState>
  );
};

export default App;
