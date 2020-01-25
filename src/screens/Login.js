import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import NumberInput from '../components/inputs/NumberInput';

import logo from '../assets/images/logo.png';

export default () => {
  const [gasConsumption, setGasConsumption] = useState('');
  const [alcoholConsumption, setAlcoholConsumption] = useState('');

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Seu consumo de gasolina é: {gasConsumption} Km / L</Text>
      <NumberInput
        setNumberValue={setGasConsumption}
        placeholder="Consumo de Gasolina"
      />

      <Text>Seu consumo de etanol é: R$ {alcoholConsumption} Km / L</Text>
      <NumberInput
        setNumberValue={setAlcoholConsumption}
        placeholder="Consumo de Etanol"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    height: 300,
    aspectRatio: 1,
  },
});
