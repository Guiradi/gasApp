/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as GasAppName} from './GasApp.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(GasAppName, () => App);
