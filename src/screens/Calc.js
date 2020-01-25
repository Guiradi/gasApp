import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import styles from '../assets/css/styles';

export default ({navigation: {navigate, getParam}}) => {
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(() => {
    const cityObj = getParam('cityObj');
    setCurrentCity(cityObj ? cityObj.long_name : '');
  }, [setCurrentCity, getParam]);

  return (
    <View style={styles.container}>
      <Text>{currentCity}</Text>
    </View>
  );
};
