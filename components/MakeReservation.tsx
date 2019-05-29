import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ReservationMutation } from '../db/dbFunctions';
import { StoreContext } from '../contextWrapper';
import DateInput from './DateInput';
import HotelInput from './HotelInput';
import HomeScreen from './HomeScreen';



const today: object = new Date;
let mm: string = (today.getMonth() + 1).toString();
if (parseInt(mm) < 10) { mm = "0" + mm };
let dd: string = today.getDate().toString();
if (parseInt(dd) < 10) { dd = "0" + dd };
let yyyy: string = today.getFullYear().toString();

// dates for date picker
let minDate: string = `${mm}/${dd}/${yyyy}`;
let maxDate: string = `${mm}/${dd}/${(parseInt(yyyy) + 1).toString()}`;

// random generate id number
export const randomId = () =>  yyyy + mm + dd + today.getMilliseconds().toString() + (Math.floor(Math.random() * (99 + 10) + 10)).toString()


export class MakeReservation extends Component {
    static contextType = StoreContext
    
    state={
        id: "",
        arrivalDate: "",
        departureDate: "",
        hotelName: ""        
    } //reservation information

    componentDidMount = () => {
        this.setState({
            id: randomId()
        })
    }

    handleInput = (name:string, value:string) => {
        this.setState({[name]: value})
    }
    clearInput = () => {
        this.setState({
            id: randomId(),
            arrivalDate: "",
            departureDate: "",
            hotelName: ""
        })
    }

    render(){
        const {arrivalDate, departureDate, hotelName} = this.state
    return (
        this.context.user && this.context.user.length ? 
        <View style={styles.reservation_container}>
            <ImageBackground source={require('../assets/hilton-background.jpg')} style={styles.background}>
            <LinearGradient colors={["#002C51", "#eef2f3"]} style={styles.reservation_box}>
            <HotelInput 
                hotelName={hotelName} 
                setHotelName={this.handleInput}/>
            <DateInput 
                type="arrivalDate"
                minDate={minDate} 
                maxDate={departureDate.length ? departureDate : maxDate} 
                date={arrivalDate} 
                setDate={this.handleInput} 
                placeHolder="Arrival Date" />
            <DateInput 
                type="departureDate"
                minDate={arrivalDate.length ? arrivalDate : minDate}
                maxDate={maxDate} 
                date={departureDate} 
                setDate={this.handleInput} 
                placeHolder="Departure Date" />
            {ReservationMutation({...this.state, name: this.context.user}, this.clearInput)}
            </LinearGradient>
            </ImageBackground>
        </View>
        : <HomeScreen />
    )
    }
}

export default MakeReservation;

const styles= StyleSheet.create({
    reservation_container: {
        flex: 1
    },
    background: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    reservation_box: {
        top: "15%",
        width: "90%",
        height: "60%",
        backgroundColor: "white",
        borderRadius: 5,
        justifyContent: "space-around",
        alignItems: "center"
    }
})