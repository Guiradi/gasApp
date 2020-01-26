import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../assets/css/styles';

import api from '../assets/fake_api';

const getGasValue = (city, type, setter) => {
  const gasTypeValues = api[type];
  const cityGasInfo = gasTypeValues.find(
    x =>
      x['MUNICIPIO'] ===
      city
        .split(' ')
        .join('')
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''),
  );

  if (cityGasInfo) {
    setter(formatValueToStore(cityGasInfo['PREÇO MÉDIO']));
  }
};

const formatValueToStore = value => parseFloat(value.replace(',', '.'));

const formatValueToDisplay = value =>
  value
    .toFixed(2)
    .toString()
    .replace('.', ',');

const checkEconomicGasType = (getParam, alcoholValue, gasolineValue) => {
  const alcoholConsumption = getParam('alcoholConsumption');
  const gasConsumption = getParam('gasConsumption');

  //R$ / L / Km / L = R$ / Km
  const alcoholCostPerLiter = alcoholValue / alcoholConsumption;
  const gasolineCostPerLiter = gasolineValue / gasConsumption;

  if (alcoholCostPerLiter < gasolineCostPerLiter) {
    return 'Etanol';
  } else if (alcoholCostPerLiter > gasolineCostPerLiter) {
    return 'Gasolina';
  } else {
    return 'Qualquer combustível';
  }
};

export default ({navigation: {navigate, getParam}}) => {
  const [currentCity, setCurrentCity] = useState('Bauru');
  const [alcoholValue, setAlcoholValue] = useState(0);
  const [gasolineValue, setGasolineValue] = useState(0);
  const [gasType, setGasType] = useState('');

  useEffect(() => {
    const cityObj = getParam('cityObj');
    setCurrentCity(cityObj ? cityObj.long_name : '');
    getGasValue(currentCity, 'alcohol', setAlcoholValue);
    getGasValue(currentCity, 'gasoline', setGasolineValue);

    setGasType(checkEconomicGasType(getParam, alcoholValue, gasolineValue));
  }, [
    getParam,
    setCurrentCity,
    currentCity,
    setAlcoholValue,
    setGasolineValue,
    alcoholValue,
    gasolineValue,
    setGasType,
  ]);

  const goBack = useCallback(() => navigate('main'), [navigate]);

  return (
    <View style={styles.container}>
      <View style={styles.showTypeView}>
        <Text>Escolha o tipo:</Text>
        <Text style={styles.typeHeader}>{gasType}</Text>
      </View>
      <View style={styles.description}>
        <Text>
          Por estar na cidade {currentCity}, onde o preço da gasolina está em
          média R$ {formatValueToDisplay(gasolineValue)} e o preço do álcool
          está em média R$ {formatValueToDisplay(alcoholValue)}, você
          economizará se utilizar o tipo {gasType}!
        </Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
