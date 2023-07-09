import * as React from 'react';

import {View } from 'react-native';
import { styles } from '../theme/style';
import CalculadoraButton from './CalculadoraButton';

const CalculadoraList = () => {
  return (
    <View style={styles.calculadoraContainerBtn}>

      <CalculadoraButton  />
      <CalculadoraButton />
      <CalculadoraButton />
      <CalculadoraButton />

    </View>
   );
};

export default CalculadoraList;
