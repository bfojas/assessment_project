import React from 'react';
import { Component } from 'react';
import { StoreContext } from "../contextWrapper"
import { Platform, StyleSheet, Text, View, Button, TextInput, Keyboard } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



class HomeScreen extends Component {
    // static navigationOptions = {
    //     tabBarIcon: <FontAwesome5 name={'git'} brand />
    //   };
    static contextType = StoreContext
    constructor() {
        super()
        this.state={name:""}
    }

    handleInput = name => {
        this.setState({name: name})
    }

    submit = () =>{
        this.context.login(this.state.name)
        Keyboard.dismiss()
    }

    render() {
        return (
            <View style={styles.home_container}>
                <Text>Home Screen</Text>
                <TextInput style={styles.input} selectTextOnFocus={true} value={this.state.name} keyboardType="default" onChangeText={(text)=>this.handleInput(text)}/>
                <Button onPress={this.submit} disabled={this.state.name.length ? false : true} title="Submit" />
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    home_container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 50,
        width: "80%",
        borderColor: 'black',
        backgroundColor: "white"
      },


})

