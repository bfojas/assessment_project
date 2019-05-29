import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import MakeReservation from "./components/MakeReservation";
import ReservationList from "./components/ReservationList";


// const { width, height } = Dimensions.get("window");
const App = createBottomTabNavigator(
  {
    Book: {
      screen: MakeReservation,
    },
    Reservations:
      { screen: ReservationList },
  },
  {
    tabBarOptions: {
      pressColor: "blue",
      indicatorStyle: {
        opacity: 0
      },
      allowFontScaling: true,

      upperCaseLabel: false,
      showLabel: true,
      activeTintColor: "white",
      activeBackgroundColor: "#002C51",
      labelStyle: {
        fontSize: 24,
        textAlign: "center"
      },
      style: {
        height: 50,
        backgroundColor: "black",
        forceTitlesDisplay: true,
        tabFontFamily: "Avenir-Medium"
      }
    },

  }
);



export default createAppContainer(App);
