import React from 'react';
import { Platform, StyleSheet, View, Picker } from 'react-native';



const HotelInput = props => {
    const {hotelName, setHotelName} = props;

    //list of hotels
    const hotels:string[] = ["Hilton 1", "Hilton 2", "Hilton 3"]
    const hotelMap = hotels.map((val, index)=> <Picker.Item label={val} value={val} key={index}/>)

    return (
        <View style={styles.hotel_container}>
            <Picker
                selectedValue={hotelName}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setHotelName("hotelName", itemValue)
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
        borderRadius: 5,
        backgroundColor: "white"
    },
    picker: {
        height: 50, 
        width: '100%'
    }
})