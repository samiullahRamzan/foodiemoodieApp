import {Text, View,FlatList,Image,TouchableOpacity} from 'react-native';
import { useState,useEffect} from 'react';
import { styles } from './StyleSheets/FavouritesStyle';
import { getDatabase, ref, onValue, set, update } from "firebase/database";

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
import {db,app} from './firebase';
import firestore from '@react-native-firebase/firestore';


export default function FoodCategory(props){
    const collecArray=(collec)=>{
        const snapshot = collection(db, collec);   // or getFirestore() replace by db
        //console.log(ref);
        const arr=new Array;
        const q = query(snapshot,ref)           // it can work without ref
        onSnapshot(q, snapshot=>{
          // console.log('Fetched', snapshot.docs)
          snapshot.docs.forEach(doc=>{
            //console.log(doc.id,doc.data())
            arr.push(doc.data());
          })
        }
        )
        return arr;
     }
  
    const [Burger,setBurger]=useState(collecArray("Burger"));
    const [Kebab,setKebab]=useState(collecArray("Kebab"));
    const [Fried,setFried]=useState(collecArray("Fried"));
    const [Shawarma,setShawarma]=useState(collecArray("Shawarma"));
    //console.log(route.params.data.name);
    
    

    const checkCategory=(name)=>{
           console.log(name);
           if(name==='Shawarma'){
            //console.log(route.params.data.name)
            global.passFlat=Shawarma;
           } 
           else if(name==='Kebab'){
            //console.log(route.params.data.name)
            global.passFlat=Kebab;
            }else if(name==='Fried'){    
             //console.log(route.params.data.name)
             global.passFlat=Fried;
            }else{
              global.passFlat=Burger;
            }
            props.navigation.navigate("Category");
    }

    
    return(
    <FlatList      
    data={props.Data}
    horizontal={props.Horizontal}
    keyExtractor={item=>item.key}
    renderItem={({item})=>(
     <TouchableOpacity onPress={()=>checkCategory(item.name)}>
     <View style={styles.mainCategory}>
     <View>
     <Image source={{uri:item.image1}} style={{height:30,width:30,marginRight:5}} />
     </View>
     <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>{item.name}</Text>
     <View>

     </View>
     </View>
     </TouchableOpacity>
    )}  
    />
    )
}