import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect, initializing} from 'react';
import { firebase } from './firestore/configAuth'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeConcert from './screens/homeConcert2';
import DetailConcert from './screens/detailConcert';
import ConcertVenue from './screens/concertVenue';
import TicketDetails from './screens/ticketDetails';
import FetchData from './firestore/fetchFromDB';
import Login from './screens/login';
import Registration from './screens/registration';
import Profile from './screens/profile';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
      }, []);
    
    if (initializing) return null;  
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName='Konser'
            >
                {!user &&
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Registration" component={Registration} />
                    </>}
                {user &&
                    <>
                        {/* <Stack.Screen name = "FetchData" component={FetchData} /> */}
                        <Stack.Screen name="HomeConcert" component={HomeConcert} />
                        {/*<Stack.Screen name="DetailConcert" component={DetailConcert} /> */}
                        {/* <Stack.Screen name="TicketDetails" component={TicketDetails} /> */}
                        {/* <Stack.Screen name="ConcertVenue" component={ConcertVenue} /> */}
                        {/* <Stack.Screen name="Profile" component={Profile} /> */}
                    </>}

            </Stack.Navigator>
        </NavigationContainer>
    );
}