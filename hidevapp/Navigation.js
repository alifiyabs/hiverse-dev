import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeConcert from './screens/homeConcert';
import DetailConcert from './screens/detailConcert';
import ConcertVenue from './screens/concertVenue';
import TicketDetails from './screens/ticket-details';
import FetchData from './firestore/fetchFromDB';
import Login from './screens/login';
import Registration from './screens/registration';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName='Konser'
            >
                 <Stack.Screen name="HomeConcert" component={HomeConcert} />
                {/* <Stack.Screen name="DetailConcert" component={DetailConcert} />
                <Stack.Screen name="TicketDetails" component={TicketDetails} />
                <Stack.Screen name="ConcertVenue" component={ConcertVenue} /> */}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="FetchData" component={FetchData} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}