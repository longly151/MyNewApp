/**
 * @format
 */

import {AppRegistry, Dimensions} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import Form from './src/components/10-Form/Form';
import AdvanceForm from './src/components/10-Form/AdvanceForm';

import ButtonExample from './src/components/12-Button/ButtonExample';
import ButtonAdvance from './src/components/12-Button/ButtonAdvance';

import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

// Screen names
import {Home, Info, Settings, Cloud} from './screenNames';

// Drawer Navigation

import {DrawerNavigator} from 'react-navigation';

import HomeComponent from './src/components/49-DrawerNavigation/HomeComponent';
import InfoComponent from './src/components/49-DrawerNavigation/InfoComponent';

var {height, width} = Dimensions.get('window');
let routeConfigs = {
  Home: {
    path: '/',
    screen: HomeComponent,
  },
  Info: {
    path: '/info',
    screen: InfoComponent,
  },
};
let drawerNavigatorConfig = {
  initialRouteName: Home,
  drawerWidth: width / 2,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  // drawerBackgroundColor: 'orange',
  contentOptions: {
    activeTintColor: 'red',
  },
  order: [Info, Home]
};
const drawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
const App = createAppContainer(drawerNavigator)

// End Drawer Navigation

// Login UI

// import React, { Component } from 'react'
// import Login from './src/components/62-LoginPage/Login';
// import Splash from './src/components/62-LoginPage/Splash';
// class Main extends Component {
//   constructor(props) {
//       super(props);
//       this.state = { currentScreen: 'Splash' };
//       console.log('Start doing some tasks for about 3 seconds')
//       setTimeout(()=>{
//           console.log('Done some tasks for about 3 seconds')
//           this.setState({ currentScreen: 'Login' })
//       }, 3000)
//   }
//   render() {
//       const { currentScreen } = this.state
//       let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
//       return mainScreen
//   }
// }

AppRegistry.registerComponent(appName, () => App);