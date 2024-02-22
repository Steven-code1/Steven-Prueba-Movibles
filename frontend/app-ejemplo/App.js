import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';

import {SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <Navigation />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
