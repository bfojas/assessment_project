import React from 'react';
import { useState, useContext } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
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
const randomId: string = yyyy + mm + dd + today.getMilliseconds().toString() + (Math.floor(Math.random() * (99 + 10) + 10)).toString()


const MakeReservation = () => {
    const context = useContext(StoreContext);
    const [arrivalDate, setArrivalDate] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [hotelName, setHotelName] = useState("")

    const reservationInput: object = {
        id: randomId,
        name: context.user,
        arrivalDate,
        departureDate,
        hotelName
    }

    return (
        context.user.length ? 
        <View style={styles.reservation_container}>
            <ImageBackground source={require('../assets/hilton-background.jpg')} style={styles.background}>
            <LinearGradient colors={["#8e9eab", "#eef2f3"]} style={styles.reservation_box}>
            <HotelInput 
                hotelName={hotelName} 
                setHotelName={setHotelName}/>
            <DateInput 
                minDate={minDate} 
                maxDate={departureDate.length ? departureDate : maxDate} 
                date={arrivalDate} 
                setDate={setArrivalDate} 
                placeHolder="Arrival Date" />
            <DateInput 
                minDate={arrivalDate.length ? arrivalDate : minDate}
                maxDate={maxDate} 
                date={departureDate} 
                setDate={setDepartureDate} 
                placeHolder="Departure Date" />
            {ReservationMutation(reservationInput)}
            </LinearGradient>
            </ImageBackground>
        </View>
        : <HomeScreen />
    )
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
        borderRadius: 15,
        justifyContent: "space-around",
        alignItems: "center"
    }
})