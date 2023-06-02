import { Alert,TouchableOpacity, Text, View} from 'react-native';
import React, { useState } from 'react';
import styles from './StyleSheets/SignUpStyle';
import CheckBox from "react-native-check-box"
import {auth,db} from "./firebase";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";

import {collection,add, addDoc} from 'firebase/firestore';
import { TextField } from './TextField';
import Header from './header';

export default function SignUpScreen({navigation,route}) {
    const [isSelected,setisSelected]=useState(false);  
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState();
    const [Name,setName]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');
        
        const disab=()=>{
          return (!Name || !ConfirmPassword || !isSelected);
        }

        //it is for authentication....
        const handleSignup = async () => {
          if(Password!=ConfirmPassword){
            Alert.alert("password and confirm pasword does'nt match!");
            return;
          }
          await createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
              // Sign Up
              console.log(Email);
              console.log(Password);
              console.log("Succesfull");
              const user = userCredential.user;
              console.log("user data,", user);
              
              global.user=Email;
              // write code to save your data in firestore
              // FirebaseError.firestore.write(user.uid,user.uid)
              
              addDoc(collection(db,'user'),{
                uid:user.uid,
                name:Name,
                email:Email,
                password:Password,
              })

              // after signup user will move toward next screen
              navigation.navigate('Favorites',{data :Name});
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log('Error Code == ',errorCode);
              console.log('Error Message == ',errorMessage);
              Alert.alert(errorCode,errorMessage);
              // ..
            })
        };

    return (
      
      <View style={styles.container}>
        <View style={{  flex:0.1 }}>
        <Header head='Sign Up' navigation={navigation}/> 
        </View>
        
        <View style={styles.outerV_F}>
         <Text style={styles.textHeader}>Email</Text> 
         
         <TextField
         label={"Email"}
         value={Email}
         onChangeText={(Email)=>setEmail(Email)}
         />
   
         <Text style={styles.textHeader}>Name</Text>
         
         <TextField
         label={"Name"}
         value={Name}
         onChangeText={(Name)=>setName(Name)}
         />
        
         <Text style={styles.textHeader}>Password</Text>
         
         <TextField
         label={"Password"}
         value={Password}
         onChangeText={(Password)=>setPassword(Password)}
         isPassword={true}
         />
      
         <Text style={styles.textHeader}>Confirm Password</Text>
         
         <TextField
         label={"Confirm Password"}
         value={ConfirmPassword}
         onChangeText={(ConfirmPassword)=>setConfirmPassword(ConfirmPassword)}
         isPassword={true}
         />
        
         <View style={styles.checkbOuter}>
         <CheckBox
          isChecked={isSelected}
          onClick={()=>setisSelected(!isSelected)}
          style={styles.checkbx}
         />
          <Text>I accept the term of use and privacy policy</Text>
         </View>

         <TouchableOpacity style={[styles.button,{backgroundColor:disab()?"grey":"red"}]} 
                           disabled={disab()} onPress={handleSignup}>
         <Text style={{fontSize:20,color:"white"}} >Sign Up</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.signIn}>
          <Text>Already on foodie moodie?</Text>
          <TouchableOpacity 
                onPress={()=>{
                         navigation.navigate("login");
                         }}>
            <Text>Sign in</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    );
  }
  
  