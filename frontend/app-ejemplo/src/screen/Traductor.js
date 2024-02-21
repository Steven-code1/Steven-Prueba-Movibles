import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";
import {Picker} from "react-native-web"
const Traductor = () => {

    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')
    const [selectLanguage, setSelectLanguage] = useState('')

    const getResultFromOpenApi = async () => {
        try {
            const response = await fetch('http://localhost:9004/translate', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt, language: selectLanguage})
            })
            const jsonData = await response.json()
            setResult(`${jsonData.result} y los token utilizados fueron ${jsonData.token} `)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Ingrese el texto que desea traducir'}
            </Text>
            <TextInput
                multiline
                numberOfLines={5}
                value={prompt}
                onChangeText={setPrompt}
                style={styles.input}
            />
            <Picker
                style={styles.picker}
                selectedValue={selectLanguage}
                onValueChange={(itemValue) => setSelectLanguage(itemValue)}>
                <Picker.Item label="Español" value="español"/>
                <Picker.Item label="English" value="ingles"/>
                <Picker.Item label="Kichwa" value="kichwa"/>
                <Picker.Item label="Francés" value="frances"/>
                <Picker.Item label="Portugues" value="portugues"/>
                <Picker.Item label="Italiano" value="italiano"/>
                <Picker.Item label="Ruso" value="ruso"/>
                <Picker.Item label="Japonés" value="japones"/>
                <Picker.Item label="Chino" value="chino"/>
                <Picker.Item label="Hindi" value="hindi"/>
                <Picker.Item label="Arabe" value="arabe"/>
                <Picker.Item label="Polaco" value="polaco"/>
            </Picker>
            <Button title={'TRADUCIR'} onPress={getResultFromOpenApi}/>
            <Text style={styles.text}>
                {result}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 100,
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    picker: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
});

export default Traductor;