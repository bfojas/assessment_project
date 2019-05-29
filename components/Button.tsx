//stylable button component

import React from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableNativeFeedback
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

const Button = props => {
    return (
        props.disabled
            ?
            <View style={[{ ...styles.view, ...props.style, ...styles.disabled }]}>
                <Text style={[{ ...styles.text, ...props.text_style }]}>
                    {props.title}
                </Text>
            </View>
            :
            <Touchable onPress={() => props.onPress()}>
                <LinearGradient colors={["#a7cfdf", "#23538a"]} style={[{ ...styles.view, ...props.style }]}>
                    <Text style={[{ ...styles.text, ...props.text_style }]}>
                        {props.title}
                    </Text>
                </LinearGradient>
            </Touchable>
    );
};

export default Button;

const styles = StyleSheet.create({
    view: {
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#69d3eb"
    },
    text: {
        fontSize: 24
    },
    disabled: {
        backgroundColor: "#bbbbb9"
    }
});
