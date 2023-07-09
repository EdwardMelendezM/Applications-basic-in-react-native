import * as React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import Calculadora from './src/components/Calculadora';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Calculadora />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
    safeArea:{
     flex: 1,
    },
});
