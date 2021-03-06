import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';
import geocode from '../store/geocode_api';

import NumberInput from '../components/inputs/NumberInput';

import styles from '../assets/css/styles';
import logo from '../assets/images/logo.png';

export default ({navigation: {navigate}}) => {
  const [gasConsumption, setGasConsumption] = useState('');
  const [alcoholConsumption, setAlcoholConsumption] = useState('');

  const getCity = useCallback(async () => {
    await Geolocation.getCurrentPosition(
      async position => {
        const {
          coords: {latitude, longitude},
        } = position;

        const {data} = await geocode.get(
          // eslint-disable-next-line prettier/prettier
          `/json?latlng=${latitude},${longitude}&key=${Config.GOOGLE_API_KEY}`,
        );

        const cityObj = data.results[0].address_components.find(x =>
          x.types.includes('administrative_area_level_2'),
        );

        navigate('calc', {cityObj, alcoholConsumption, gasConsumption});
      },
      error => alert(error),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  }, [alcoholConsumption, gasConsumption, navigate]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text>Consumo (gasolina): {gasConsumption} Km / L</Text>
      <NumberInput
        setNumberValue={setGasConsumption}
        placeholder="Consumo de Gasolina"
      />

      <Text>Consumo (etanol): {alcoholConsumption} Km / L</Text>
      <NumberInput
        setNumberValue={setAlcoholConsumption}
        placeholder="Consumo de Etanol"
      />

      <TouchableOpacity onPress={getCity} style={styles.button}>
        <Text style={styles.buttonText}>Calcular!</Text>
      </TouchableOpacity>
    </View>
  );
};
