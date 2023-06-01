import {StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location';

import {Linking} from 'react-native'
import MapView, {Marker} from "react-native-maps";


const Home = () => {

    const [location, setLocation] = useState(Location || null)


    useEffect(() => {
        console.log(location.coords)
    }, [location]);


    const requestLocation = () => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('No permission is granted!')
                return;
            }

            let tempLocation = await Location.getCurrentPositionAsync({});
            setLocation(tempLocation);
        })();
    };

    return (
        <View>
            <TouchableOpacity style={styles.button}
                              onPress={requestLocation}
            >
                 <Text>Get it!</Text>
            </TouchableOpacity>

            <MapView
                style={{ alignSelf: 'stretch', height: '100%' }}
                region={location.coords}>
                <Marker coordinate={location.coords}>
                    <Image source={{uri:'https://www.nicepng.com/png/detail/295-2955914_red-marker-on-map.png'}} />
                </Marker>
            </MapView>

        </View>

    )
}
export default Home
const styles = StyleSheet.create({
    button: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#1a73e8',
        color: '#fff',
        width: 80,
        height: 50,
        justifyContent: "center",
        textAlign: "center",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 24
    },
})
