import React, {useState, useEffect} from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default ({setMoneyValue, placeholder}) => {
  const [value, setValue] = useState('0');

  useEffect(() => {
    const moneyValue = parseFloat(value);

    setMoneyValue(
      isNaN(moneyValue)
        ? '0,00'
        : moneyValue
            .toFixed(2)
            .replace('.', ',')
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
    );
  }, [value, setMoneyValue]);

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    marginVertical: 10,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
  },
});
