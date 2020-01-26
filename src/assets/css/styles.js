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

  typeHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20,
  },

  showTypeView: {
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'stretch',
    padding: 20,
  },

  description: {
    marginTop: 10,
    textAlign: 'justify',
  },

  buttonView: {
    marginTop: 20,
    alignSelf: 'stretch',
  },
});
