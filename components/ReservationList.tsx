import React from 'react';
import { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { StoreContext } from "../contextWrapper"

export const GET_RESERVATIONS = gql`
query GET_RESERVATIONS($name: String!){
    reservations(where: {name: $name}) {
      hotelName
      id
      name
      arrivalDate
      departureDate
    }
  }
`

class ReservationList extends Component {
    static contextType = StoreContext
    render(){
        return(
            <View><Text>List {this.context.user}</Text>
            <Query query={GET_RESERVATIONS} variables={{name:"Giraldo"}}>
                    {({ loading, error, data})=>{
                        if (loading) {return <Text>Loading...</Text>}
                        if (error) {return <Text>Ooopsie poopsie {console.log(error)}</Text>}
                        // console.log('---data', data)
                        return (
                            <View>
                                {console.log('data',data)}
                            </View>
                        )
                    }}
                </Query>
            </View>
        )
    }
}    

export default ReservationList;

