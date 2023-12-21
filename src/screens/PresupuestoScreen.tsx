import {View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from '../constants/styles';
import Dashboard from '../components/Dashboard';
import Resumen from '../components/Resumen';
import PresupuestoContext from '../context/Presupuesto/PresupuestoContext';

const PresupuestoScreen = () => {
  const {presupuesto, egresos, setPresupuesto, setEgreso} =
    useContext(PresupuestoContext);

  const [totalEgreso, setTotalEgreso] = useState(0);

  useEffect(() => {
    let totalTemp = 0;
    egresos.map(egreso => {
      totalTemp += parseFloat(egreso.mount);
    });
    setTotalEgreso(totalTemp);
  }, [egresos]);

  return (
    <View style={styles.container}>
      <Resumen presupuesto={presupuesto} totalEgreso={totalEgreso} />
      <Dashboard />
    </View>
  );
};

export default PresupuestoScreen;
