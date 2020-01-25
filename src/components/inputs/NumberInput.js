import React, {useState, useEffect} from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default ({setNumberValue, placeholder}) => {
  const [value, setValue] = useState('0');

  useEffect(() => {
    const floatValue = parseFloat(value);
    setNumberValue(isNaN(floatValue) ? 0 : floatValue);
  }, [value, setNumberValue]);

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
