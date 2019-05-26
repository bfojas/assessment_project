import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


const ReservationTiles =(props) => {

        return(
            <View>
                <Text>{props.hotelName}</Text>
                <Text>{props.arrivalDate}</Text>
                <Text>{props.departureDate}</Text>
            </View>
        )
}    

export default ReservationTiles;

