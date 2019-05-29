import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';


const ReservationTiles = (props) => {

    return (
        <View style={styles.tile_container}>
            <View style={styles.data_container}>
                <Text style={styles.name}>{props.hotelName}</Text>
                <View style={styles.dates_container}>
                    <View style={styles.sections}>
                        <Text style={styles.subtitle}>Check-In</Text>
                        <Text style={styles.date}>{props.arrivalDate}</Text>
                    </View>
                    <View style={styles.sections}>
                        <Text style={styles.subtitle}>Check-Out</Text>
                        <Text style={styles.date}>{props.departureDate}</Text>
                    </View>
                </View>
            </View>
            <Image source={require('../assets/hilton-background.jpg')} style={styles.image_container}></Image>
        </View>
    )
}

export default ReservationTiles;

const styles = StyleSheet.create({
    tile_container: {
        flexDirection: "row",
        width: "90%",
        height: 150,
        margin: 5,
        padding: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "white"
    },
    data_container: {
        flex: 1
    },
    name: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: "bold"
    },
    dates_container: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    sections: {
        flexDirection: "column",
        margin: 10
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    date: {
        fontSize: 18
    },
    image_container: {
        position: "absolute",
        right: 0,
        height: 146,
        width: 120,
        resizeMode: "cover",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    }
})
