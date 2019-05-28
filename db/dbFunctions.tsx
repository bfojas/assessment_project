import React from 'react';
import { Text, StyleSheet } from 'react-native'
import Button from '../components/Button'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo'
import ReservationTiles from '../components/ReservationTiles';

const GET_RESERVATIONS = gql`
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

export const ReservationQuery = (queryInput) => {
  return (
    <Query query={GET_RESERVATIONS} variables={queryInput}>
                            {({ loading, error, data})=>{
                                if (loading) {return <Text>Loading...</Text>}
                                if (error) {return <Text>Ooopsie poopsie {console.log(error)}</Text>}
                                return (
                                    <React.Fragment>
                                        {data.reservations.map((reservation, index)=><ReservationTiles {...reservation} key={index}/>)}
                                    </React.Fragment>
                                )
                            }}
                    </Query>
  )
}

const MAKE_RESERVATION = gql`
    mutation($input: ReservationCreateInput!){
    createReservation(data: $input) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export const ReservationMutation = (reservationInput) => {
    const {name, arrivalDate, departureDate, hotelName} = reservationInput;

    let disabled:boolean = name.length && arrivalDate.length && departureDate.length && hotelName.length ? false : true
    return (
        <Mutation mutation={MAKE_RESERVATION}>
            {(makeReservation, {loading, error}) => {
                if (loading) {return <Text>Loading...</Text>}
                if (error) {console.log('whoopsie', error)}
                return (<Button style={styles.button}
                    onPress={
                        () => makeReservation({variables: {input: reservationInput}})
                    }
                    title="Reserve"
                    disabled={disabled}
                />)
            }}
        </Mutation>
    )
}

const styles = StyleSheet.create({
  button: {
    width: "50%",
    height: "25%",
    margin: 5
  }
})
