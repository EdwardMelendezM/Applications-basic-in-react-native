import React,{useState} from 'react';
import { Text, View} from 'react-native';
import {styles} from '../theme/style';
import CalculadoraButton from './CalculadoraButton';

const Calculadora = () => {

  const [valorActual, setValorActual] = useState('0');
  const [valorAnterior,setValorAnterior ] = useState('0');
  const [operacionAnterior, setOperacionAnterior] = useState('+');

  const añadirValor = (num:string)=>{
    if (num === '.'){
      if (!valorActual.includes('.')){
        setValorActual(valorActual + num);
      }
      return;
    } else {
      if (num === '+/-'){
        if (valorActual.includes('-')){
          setValorActual(valorActual.replace('-',''));
          return;
        }
        setValorActual('-' + valorActual);
        return;
      }
      if (valorActual === '0' || valorActual === '-0'){
        if (valorActual.includes('-')) {
          setValorActual('-' + num);
          return;
        }
        setValorActual(num);
        return;
      }

      setValorActual(valorActual + num);
      return;
    }


  };
  const sumar = ()=>{
    if (valorAnterior === '0') {
      setValorAnterior(valorActual);
      setValorActual('0');
      return;
    } else {
      const resultado = parseFloat(valorActual) + parseFloat(valorAnterior);
      setValorActual('0');
      setValorAnterior(resultado.toString());
      return;
    }
  };
  const restar = ()=>{
    if (valorAnterior === '0') {
      setValorAnterior(valorActual);
      setValorActual('0');
      return;
    } else {
      const resultado = parseFloat(valorAnterior) - parseFloat(valorActual);
      setValorActual('0');
      setValorAnterior(resultado.toString());
      return;
    }
  };
  const multiplicar = () => {
    if (valorAnterior === '0') {
      setValorAnterior(valorActual);
      setValorActual('0');
      return;
    } else {
      const resultado = parseFloat(valorAnterior) * parseFloat(valorActual);
      setValorActual('0');
      setValorAnterior(resultado.toString());
      return;
    }
  };
  const dividir = () => {
    if (valorAnterior === '0') {
      setValorAnterior(valorActual);
      setValorActual('0');
      return;
    } else {
      const resultado = parseFloat(valorAnterior) / parseFloat(valorActual);
      setValorActual('0');
      setValorAnterior(resultado.toString());
      return;
    }
  };
  const añadirOperation = (operacion:string)=>{
    if (operacion === '='){
      if (operacionAnterior === '+') { sumar(); }
      if (operacionAnterior === '-') { restar();}
      if (operacionAnterior === 'x') { multiplicar();}
      if (operacionAnterior === '/') { dividir(); }

    }
    if (operacion === '+'){
      setOperacionAnterior('+');
      sumar();
    }
    if (operacion === '-') {
      setOperacionAnterior('-');
      restar();
    }
    if (operacion === 'x'){
      setOperacionAnterior('x');
      (valorActual !== '0') && multiplicar();

    }
    if (operacion === '/') {
      setOperacionAnterior('/');
      (valorActual !== '0') && dividir();
    }
  };
  const limpiarTodo = ()=>{
    setValorActual('0');
    setValorAnterior('0');
  };

  return (
    <View style={styles.calculadoraContainer}>
      <View>
        <Text style={styles.calculadoraTextSec}>
          {valorAnterior}
        </Text>
      </View>
      <View>
        <Text style={styles.calculadoraText}>
          {valorActual}
        </Text>
      </View>

      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton
          text="C"
          onPress={limpiarTodo}
        />
        <CalculadoraButton
          text="+/-"
          onPress={añadirValor}
        />
        <CalculadoraButton
          text="%"
        />
        <CalculadoraButton
          text="/"
          onPress={añadirOperation}
        />
      </View>
      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton
          text="7"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          text="8"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          text="9"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          onPress={añadirOperation}
          text="x"
          theme="#E7CC2C"
          color="#fff"
        />
      </View>
      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton
          text="4"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          text="5"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          text="6"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          onPress={añadirOperation}
          text="-"
          theme="#E7CC2C"
          color="#fff"
        />
      </View>
      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton
          text="1"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          text="2"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          text="3"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          onPress={añadirOperation}
          text="+"
          theme="#E7CC2C"
          color="#fff"
        />
      </View>
      <View style={styles.calculadoraContainerBtn}>
        <CalculadoraButton
          text="0"
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        large />
        <CalculadoraButton
          text="."
          theme="#282322"
          color="#fff"
          onPress={añadirValor}
        />
        <CalculadoraButton
          onPress={añadirOperation}
          text="="
          theme="#E7CC2C"
          color="#fff"
        />
      </View>
    </View>
  );
};

export default Calculadora;
