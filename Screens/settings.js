import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>settings</Text>
            </View>
        );
    }
}
export default settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});