import React from 'react';
import { Text, StyleSheet, View, Image, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon} from '@expo/vector-icons';

const Home = () => {
    const handleOnPress = () => {
        Alert.alert('botão')
    }

    return (
        <>
            <View style={styles.container}>
                <Image 
                    style={styles.gamerImage} 
                    source={require('../../assets/gamer.png')} 
                />

                <Text style={styles.title}>Vote agora!</Text>
                <Text style={styles.subTitle}>Nos diga qual o seu jogo favorito!</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>
                        COLETAR DADOS
                    </Text>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="chevron-right" color="#FFF" size={25}/>
                        </Text>
                    </View>
                </RectButton>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        backgroundColor: '#0B1F34',
        alignItems: 'center',
    },
    gamerImage: {
        width: 309,
        height: 288
    },
    title: {
        color: '#00D4FF',
        fontSize: 36,
        marginTop: 31,
        fontFamily: "Play_700Bold",
    },
    subTitle: {
        color: '#ED7947',
        fontSize: 21,
        marginTop: 15,
        fontFamily: "Play_400Regular",
    },
    footer: {
        marginTop: '15%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#00D4FF',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonIcon: {
        backgroundColor: '#ED7947',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontFamily: "Play_700Bold",
        fontSize: 18,
        color: '#0B1F34',
    }
})

export default Home;