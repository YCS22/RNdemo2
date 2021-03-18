import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

//header component for screens
const Header = ({ text, iconname }) => {
    return (
        <View>

            <Appbar style={styles.View}><Text style={styles.Text}>
                <Avatar.Icon size={36} icon={iconname} />
                {text}
            </Text></Appbar>
        </View>

    );
};


const styles = StyleSheet.create({
    Text: {
        fontSize: 30,
        color: 'white',
        marginBottom: 5,
        marginLeft: 5
    },
    View: {
        height: 50,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',

        shadowOpacity: 0.5,

    }
})



export default Header;