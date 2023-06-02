import {ImageBackground,Text, View ,useEffect} from 'react-native';
import React from 'react';
import { Button } from './button';
import {styles} from "./StyleSheets/HomeStyle"
import graphql from 'graphql';
import { useQuery, gql } from '@apollo/client';

// Task 
// Filters code, curency, continent

const USER_QUERY = gql`
  query{
    codeimprove {
      id
      name
      email
      phone
    }
  }
`;


export default function HomeScreen({navigation}) {
  console.log("USER QUERY:",USER_QUERY);
  const {data, loading} = useQuery(USER_QUERY)

  useEffect(()=>{
    console.log('GraphQL ===', data)
  })
    
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri:"https://raw.githubusercontent.com/akhzarna/restuarantappclone/main/assets/images/login_splash_backdrop.jpg"}}
         style={{
                width:360,
                height:760
                }}  >
        
        <View style={{flex:0.6}}>
         {/* */}
        </View>

        <View style={styles.textView}>
        <Text style={styles.fText}>  
        Enjoy your fast food only in foodie moodie
        </Text>
        
        <Text style={styles.sText}>
         Here is the place to buy food you want
         </Text>
        
        </View>
                 
        <View style={styles.buttonView}>
        <Button
         forLogin={true}
         label={"Login"}
         press={()=>{navigation.navigate("login")}}
        />
        <Button
          label={"SignUp"}
          press={()=>{navigation.navigate("SignUp")}}
        />
       
        </View>     
       </ImageBackground>
      </View>
      
    )
  } 