import React from 'react';
import { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StoreContext } from '../contextWrapper'
import { Platform, StyleSheet, Text, View, TextInput, Keyboard, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Button from './Button'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

class HomeScreen extends Component {
    // static navigationOptions = {
    //     tabBarIcon: <FontAwesome5 name={'git'} brand />
    //   };
    static contextType = StoreContext
    constructor() {
        super()
        this.state = { name: "" }
    }

    handleInput = (name:string) => {
        this.setState({ name: name })
    }

    handleKeyDown = (e:object) => {
        if (e.nativeEvent.key == "Enter") {
            this.submit();
        }
    }

    submit = () => {
        this.context.login(this.state.name)
        Keyboard.dismiss()
    }

    render() {
        const { user } = this.context
        return (
            <View style={styles.home_container}>
                <ImageBackground source={require('../assets/hilton-background.jpg')} style={styles.background}>
                        <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset} behaviour="position" style={styles.login_container}>
                            <LinearGradient colors={["#8e9eab", "#eef2f3"]} style={styles.gradient}>
                                <Text style={styles.welcome}>Sign In To Hilton</Text>
                                <View style={styles.input_container}>
                                    <TextInput style={styles.input} onSubmitEditing={this.submit} placeholder="Username" selectTextOnFocus={true} value={this.state.name} keyboardType="default" onChangeText={(text) => this.handleInput(text)} onKeyPress={this.handleKeyDown} />
                                </View>
                                <Button onPress={this.submit} disabled={this.state.name.length ? false : true} title="Log In" />
                            </LinearGradient>
                        </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    home_container: {
        height: "100%",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    login_container: {
        top: "7%",
        height: "35%",
        width: "90%",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15
    },
    gradient: {
        height: "100%",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15
    },
    welcome: {
        fontSize: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },

    input_container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        width: 300,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,

    },
    input_icon: {
        width: 20,
        // borderRightColor: "black",
        // borderRightWidth: 2,
        // borderTopRightRadius: 50,
        // borderBottomRightRadius: 50
    },
    input: {
        height: 50,
        width: "95%",
        backgroundColor: "white",
    },


})

