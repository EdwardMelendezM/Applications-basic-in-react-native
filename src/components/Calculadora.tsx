import * as React from 'react';
import { Text, View} from 'react-native';
import {styles} from '../theme/style';
import CalculadoraButton from './CalculadoraButton';

const Calculadora = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <View>
        <Text style={styles.calculadoraTextSec}>
          150
        </Text>
      </View>
      <View>
        <Text style={styles.calculadoraText}>
          1,500,000
        </Text>
      </View>

      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton text="C" />
        <CalculadoraButton text="+/-" />
        <CalculadoraButton text="%" />
        <CalculadoraButton text="+" />
      </View>
      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton text="7" theme="#282322" color="#fff" />
        <CalculadoraButton text="8" theme="#282322" color="#fff" />
        <CalculadoraButton text="9" theme="#282322" color="#fff" />
        <CalculadoraButton text="X" theme="#E7CC2C" color="#fff" />
      </View>
      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton text="4" theme="#282322" color="#fff" />
        <CalculadoraButton text="5" theme="#282322" color="#fff" />
        <CalculadoraButton text="6" theme="#282322" color="#fff" />
        <CalculadoraButton text="-" theme="#E7CC2C" color="#fff" />
      </View>
      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton text="1" theme="#282322" color="#fff" />
        <CalculadoraButton text="2" theme="#282322" color="#fff" />
        <CalculadoraButton text="3" theme="#282322" color="#fff" />
        <CalculadoraButton text="+" theme="#E7CC2C" color="#fff" />
      </View>
      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton text="0" theme="#282322" color="#fff" large />
        <CalculadoraButton text="." theme="#282322" color="#fff" />
        <CalculadoraButton text="=" theme="#E7CC2C" color="#fff" />
      </View>
    </View>
  );
};

export default Calculadora;
