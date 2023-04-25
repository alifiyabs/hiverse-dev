import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeConcert from './screens/homeConcert';
import DetailConcert from './screens/detailConcert';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
    
                <Stack.Screen name="Konser" component={HomeConcert} />
                <Stack.Screen name="Detail Konser" component={DetailConcert} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
