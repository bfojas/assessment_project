import React from 'react';
import { useState } from 'react';
import { Platform, StyleSheet, Text, View, Picker } from 'react-native';



const HotelInput = props => {
    const {hotelName, setHotelName} = props;
    const hotels = ["Hilton 1", "Hilton 2", "Hilton 3"]
    const hotelMap =hotels.map((val, index)=> <Picker.Item label={val} value={val} key={index}/>)

    return (
        <View style={styles.hotel_container}>
            <Picker
                selectedValue={hotelName}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setHotelName(itemValue)
                }>
                <Picker.Item label="Choose Hotel" value=""/>
                {hotelMap}
            </Picker>
        </View>

    )

}

export default HotelInput;

const styles= StyleSheet.create({
    hotel_container: {
        width: "80%",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: "white"
    },
    picker: {
        height: 50, 
        width: '100%'
    }
})