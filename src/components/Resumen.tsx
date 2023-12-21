/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../constants/styles';

interface Props {
  presupuesto: number;
  totalEgreso: number;
}

const Resumen = ({presupuesto, totalEgreso}: Props) => {
  const formatMoney = (monto: number) => {
    return '$ ' + parseFloat(monto >= 0 && monto).toFixed(2);
  };

  const getDisponible = (presupesto: number, egresoTotal: number) => {
    return formatMoney(
      parseFloat(parseFloat(presupesto) - parseFloat(egresoTotal)),
    );
  };

  return (
    <View style={styles.resumenContainer}>
      <View style={styles.rowContainer}>
        <TouchableOpacity>
          <Text style={styles.textPE}>Presupuesto</Text>
          <Text style={[styles.textBold, {color: '#219ef3'}]}>
            {formatMoney(presupuesto)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textPE}>Egreso</Text>
          <Text style={[styles.textBold, {color: '#f0624b'}]}>
            {formatMoney(totalEgreso)}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.disponibleContainer}>
        <Text style={[styles.textBold, {color: 'gray'}]}>Disponible</Text>
        <Text style={[styles.textBold, {color: 'green'}]}>
          {getDisponible(presupuesto, totalEgreso)}
        </Text>
      </View>
    </View>
  );
};

export default Resumen;
