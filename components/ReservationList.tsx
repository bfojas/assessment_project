import React from 'react';
import { Component } from 'react';
import {Platform, StyleSheet, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from './HomeScreen';
import { StoreContext } from '../contextWrapper';
import { ReservationQuery } from '../db/dbFunctions'


class ReservationList extends Component {
    static contextType = StoreContext
    
    render(){
        return(
                this.context.user.length ?
                <LinearGradient colors={["#002C51", "#eef2f3"]} style={styles.gradient}>
                    <ScrollView style={{flexGrow: 1}} contentContainerStyle={{...styles.container}}>
                    <Text style={styles.user}>Reservations for {this.context.user}</Text>
                    {ReservationQuery({name: this.context.user})}
                    </ScrollView>
                </LinearGradient>
                : <HomeScreen/>// returns to login if not logged in
        )
    }
}    

export default ReservationList;

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    user: {
        color: "white",
        height: 45,
        fontSize: 24,
        textAlign: "center"
    },
    container: {
    justifyContent: "space-around",
    alignItems: "center"
  },
})

