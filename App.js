import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// imported screens
import HomeScreen from './Home';
import LoginScreen from './login';
import SignUpScreen from './SignUp';
import FavouriteScreen from './Favorites';
import CategoryScreen from './Category';
import HuklDetailScreen from './HuklDetail';

const Stack = createNativeStackNavigator();
// graphQl client side code..
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  //console.log("client is that: ",client)
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Favorites" component={FavouriteScreen}/>
        <Stack.Screen name="Category" component={CategoryScreen}/>
        <Stack.Screen name="HuklDetail" component={HuklDetailScreen}/>
      
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );

}





