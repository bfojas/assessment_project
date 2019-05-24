// import React from "react";
// import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer, DrawerNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import MakeReservation from "./components/MakeReservation";
import ReservationList from "./components/ReservationList";



const App = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "HomeScreen"
      }
    },
    Book: {
      screen: MakeReservation,
    },
    Reservations: 
      {screen: ReservationList},
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: "black",
      activeBackgroundColor: "red",
      style: {
        borderTopEndRadius: 5
      },
      labelStyle: {
        fontSize: 20,
        lineHeight: 24,
      }
    },
    
}
);

// const App = createAppContainer(Drawer)


export default createAppContainer(App);

// const styles = StyleSheet.create({
//   routes: {
//     flex:4,
//     backgroundColor: "blue"

//   },
//   navBar: {
//     flex: 1,
//     backgroundColor: "red"
//   }


// })







// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * 
//  * Generated with the TypeScript template
//  * https://github.com/emin93/react-native-template-typescript
//  * 
//  * @format
//  */

// import React from 'react';
// import { Component } from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// interface Props {}
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native! Test</Text>
//         <Text style={styles.instructions}>To get started, edit App.tsx</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });