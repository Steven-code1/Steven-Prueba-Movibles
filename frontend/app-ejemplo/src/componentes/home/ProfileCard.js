import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const discord = <Icon name={'discord'} size={50} color={'#721422'} />
const twitch = <Icon name={'twitch'} size={50} color={'#721422'}/>
const university = <Icon name={'university'} size={50} color={'#721422'}/>
const whatsapp = <Icon name={'whatsapp'} size={50} color={'#721422'}/>
const tiktok = <Icon name={'btc'} size={50} color={'#721422'}/>
const ProfileCard = () => {
    const user = {
        avatar: "https://wallpapercave.com/wp/wp9792381.jpg",
        coverPhoto: "https://wallpapercave.com/uwp/uwp3527615.jpeg",
        name: "Steven Ortiz (ง︡'-'︠)ง"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback  onPress={() => {
                    Linking.openURL('https://www.twitch.tv/s_stryker')
                }}>
                    {twitch}
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback  onPress={() => {
                    Linking.openURL('https://discord.gg/SPYgNvRZzG')
                }}>
                    {discord}
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback  onPress={() => {
                    Linking.openURL('mailto:sartizn@uce.edu.ec')
                }}>
                    {university}
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>
                    Linking.openURL('http://wa.me/593979086610?text=Que%20fueps')}>
                    {whatsapp}
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>
                    Linking.openURL('https://www.binance.com/es-LA/feed/profile/Square-Creator-9aec7d199319')}>
                    {tiktok}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#721422'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard