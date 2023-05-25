import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect, initializing} from 'react';
import { firebase } from './firestore/configAuth'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeConcert from './screens/homeConcert';
import DetailConcert from './screens/detailConcert';
import ConcertVenue from './screens/concertVenue';
import TicketDetails from './screens/ticketDetails';
import TicketPurchase from './screens/ticketPurchase';
// import Board from './screens/onBoarding';
import Payment from './screens/payment';
import PaymentStatus from './screens/paymentStatus';
// import FetchData from './firestore/fetchFromDB';
import Login from './screens/login';
import Registration from './screens/registration';
import Profile from './screens/profile';
import SplashScreen from './screens/splashScreen';

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
                        {/* <Stack.Screen name="OnBoarding" component={Board} /> */}
                {!user &&
                    <>
                        <Stack.Screen name="SplashScreen" component={SplashScreen} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Registration" component={Registration} />
                    </>}
                {user &&
                    <>
                        {/* <Stack.Screen name="OnBoarding" component={Board} /> */}
                        <Stack.Screen name="HomeConcert" component={HomeConcert} />
                        <Stack.Screen name="DetailConcert" component={DetailConcert} />
                        <Stack.Screen name="TicketDetails" component={TicketDetails} />
                        <Stack.Screen name="TicketPurchase" component={TicketPurchase} />
                        <Stack.Screen name="ConcertVenue" component={ConcertVenue} />
                        <Stack.Screen name="Payment" component={Payment} />
                        <Stack.Screen name="PaymentStatus" component={PaymentStatus} />
                        <Stack.Screen name="Profile" component={Profile} />
                    </>}

            </Stack.Navigator>
        </NavigationContainer>
    );
}