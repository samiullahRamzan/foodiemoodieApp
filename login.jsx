import { TouchableOpacity,Text, View, TextInput,Image, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './StyleSheets/loginStyle';
import { fetchApiData } from './getApiHook';
import { postApiHook } from './postApiHook';
import {db,auth} from "./firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import app from "./firebase";
import {getDatabase,ref,onValue} from "firebase/database";


export default function LoginScreen({navigation,route}) {
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState();
    // const user={
    //   "userId": 1,
    //   "id": 11,
    //   "title": "I am samiullah"
    // } 
   
    // useEffect(()=>{
    // // post api data using axios
    // console.log("post api data...in useeffect...");
    // let url="https://jsonplaceholder.typicode.com/users/1/albums";
    // postApiHook(url,user);
    // },[])
    
    


    // fetch api data using axios..
    // console.log("fetch api data.....!")
    // let url="https://jsonplaceholder.typicode.com/users/1/albums";
    
    

    const handleLogin = async () => {
       console.log('Handle Sign In')
      // await signInWithEmailAndPassword(auth, Email, Password)
      //   .then((userCredential) => {
      //     // Signed in
      //     console.log(Email);
      //     console.log(Password);
      //     const user = userCredential.user;
      //     console.log("user data,", user);
      //     console.log("user data,", user);

      //     global.user=Email;
        navigation.navigate('Favorites');
      //   })
      //   .catch((error) => {
      //     console.log("Email=>" + Email);
      //     console.log("Password=>" +Password);
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     console.log("Error,", errorMessage);
      //     Alert.alert(errorCode,errorMessage);
      //     // ..
      //   });
    };

    // const [Name,setName]=useState(collecArray("user"));
  
    
  // useEffect(()=>{
  //   const db=getDatabase(app);
  //   const dbRef=ref(db,"best");
  //   console.log("Receiving data...");

  //   onValue(dbRef,(snapshot)=>{
      
  //     let data=snapshot.val();
  //     const {Email,Password}=data;
  //     console.log("Testing data..");
  //     console.log("sami data..",data[0]);
  //   })



  // },[])

    return (
      
      <View style={styles.container}>
         <View style={{ flex:0.1 }}>     
         <Text style={styles.headr}>WELCOME</Text>
         </View>
         
         <View style={{ flex:0.1 }}>
         <Image
         style={styles.logo}
         source={{uri:"https://raw.githubusercontent.com/akhzarna/restuarantappclone/main/assets/images/logo.png"}}
         />
         </View>
         
         <View style={styles.EM_PS_login}>

         <View style={styles.outerView}>
         <Icon name="email" size={30} style={styles.icon}/> 
         <TextInput
         style={styles.textinpt}
         placeholder='Email'
         value={Email}
         onChangeText={(Email)=>{
          setEmail(Email)
         }}
         />
         </View>
         
         <View style={styles.outerView}>
         <Icon name="form-textbox-password" size={30} style={styles.icon}/> 
         <TextInput 
         style={styles.textinpt}
         placeholder='Password'
         value={Password}
         onChangeText={(Password)=>{
          setPassword(Password)
         }}
         />
         </View>

         <Text style={styles.forgot}>Forgot Password?</Text>
         
         <TouchableOpacity style={styles.button} onPress={handleLogin}>
         <Text style={styles.login}>Login</Text>
         </TouchableOpacity>
        
         <Text style={styles.loginwith}>or login with</Text>
         
         </View>

        <View style={styles.signup}>
        <Text>new on foodie moodie?</Text>
        <TouchableOpacity 
            onPress={()=>{
              navigation.navigate('SignUp');
            }}>
  
          <Text>Sign Up</Text>
        </TouchableOpacity>
        </View>     
      </View>
      
    );
  }
  
 