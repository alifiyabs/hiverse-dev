import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeConcert from './screens/homeConcert';
import DetailConcert from './screens/detailConcert';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName='Konser'
            >
                <Stack.Screen name="HomeConcert" component={HomeConcert} />
                <Stack.Screen name="DetailConcert" component={DetailConcert} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}