import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    height: 250,
    aspectRatio: 1,
  },

  button: {
    height: 45,
    backgroundColor: 'black',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
