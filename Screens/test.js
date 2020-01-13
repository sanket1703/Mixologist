import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";


class test extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>test</Text>
            </View>
        );
    }
}
export default test;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


