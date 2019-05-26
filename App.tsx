import {createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import MakeReservation from "./components/MakeReservation";
import ReservationList from "./components/ReservationList";



const App = createBottomTabNavigator(
  {
    // Home: {
    //   screen: HomeScreen,
    //   navigationOptions: {
    //     headerTitle: "HomeScreen"
    //   }
    // },
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



export default createAppContainer(App);
