/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/style';

interface CalculadoraButtonProps{
  text:string;
  onPress?:()=>void;
  theme?:string;
  color?:string;
  large?:boolean;
}


const CalculadoraButton:React.FC<CalculadoraButtonProps> = ({
  text,
  // onPress,
  theme = '#ccc',
  color = '#000',
  large = false,
}) => {

  return (
    <TouchableOpacity
      onPress={()=>{}}
      style={{
        ...styles.calculadoraButton,
        backgroundColor: theme,
        width: large ? 180 : 80,

      }}
    >
      <Text
        style={ {
          ...styles.calculadoraBtnText,
          color: color,
        } }
      >
        {text}
      </Text>
    </TouchableOpacity>
   );
};

export default CalculadoraButton;
