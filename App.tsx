import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import MakeReservation from "./components/MakeReservation";
import ReservationList from "./components/ReservationList";


const { width, height } = Dimensions.get("window");
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
      activeTintColor: "blue",
      labelStyle: {
        fontSize: width * 0.022,
        textAlign: "center"
      },
      showIcon: true,
      style: {
        // borderTopWidth: 0,
        backgroundColor: "#221f1f",
        tabBarButtonColor: "#000",
        navBarTextFontSize: 34,
        forceTitlesDisplay: true,
        tabFontFamily: "Avenir-Medium"
      }
    },

  }
);



export default createAppContainer(App);
