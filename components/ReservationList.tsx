import React from 'react';
import { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Query } from 'react-apollo';
import HomeScreen from './HomeScreen';
import { GET_RESERVATIONS } from '../db/dbFunctions';
import { StoreContext } from '../contextWrapper';
import ReservationTiles from './ReservationTiles';



class ReservationList extends Component {
    static contextType = StoreContext
    
    render(){
        return(
                this.context.user.length ?
                <View>
                    <Text>List {this.context.user}</Text>
                    <Query query={GET_RESERVATIONS} variables={{name:this.context.user}}>
                            {({ loading, error, data})=>{
                                if (loading) {return <Text>Loading...</Text>}
                                if (error) {return <Text>Ooopsie poopsie {console.log(error)}</Text>}
                                return (
                                    <View>
                                        {data.reservations.map((reservation, index)=><ReservationTiles {...reservation} key={index}/>)}
                                    </View>
                                )
                            }}
                    </Query>
                </View>
                : <HomeScreen/>
        )
    }
}    

export default ReservationList;

