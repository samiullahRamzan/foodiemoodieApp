import * as React from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {db,app} from './firebase';
import firestore from '@react-native-firebase/firestore';

//import {collection,add, addDoc} from 'firebase/firestore';
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import Header from './header';
import SeeAllHeader from './SeeAll';
import FoodCategory from './FoodCategory';
import BestSeller from './BestSeller';
import { styles } from './StyleSheets/FavouritesStyle';
import Popular_Food from './PopularFood';

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

import { TextInput,Text, View,Image} from 'react-native';

import { fetchApiData } from './getApiHook';
//'deprecated-react-native-prop-types'





// const fetchData=async()=>{
// console.log(db);
// await collection(db,'user')
// .get()
// .then(documentSnapshot => {
//   console.log('User exists: ', documentSnapshot.exists);

//   if (documentSnapshot.exists) {
//     console.log('User data: ', documentSnapshot.data());
//   }
// })}
        
    

    

    //   snapshot.forEach((doc) => {
    //   console.log(doc.id, '=>', doc.data());
    // });



export default function FavouriteScreen({navigation}) {
 
//  React.useEffect(()=>{
//   fetchData();
// },[])
const collecArray1=(collec)=>{
  const snapshot = collection(db, collec);   // or getFirestore() replace by db
  
  //console.log(ref);
  const arr=new Array;
  const q = query(snapshot,ref)           // it can work without ref
  onSnapshot(q, snapshot=>{
    // console.log('Fetched', snapshot.docs)
    snapshot.docs.forEach(doc=>{
      

      if(doc.data().email==global.user){
        console.log(doc.data().email);  
        console.log(doc.data().name);  
               
        setName(doc.data().name);
      }
    })
  }
  )
  
}

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

  collecArray1("user");
  

  const [Name,setName]=useState("");
  const [Category,setCategory]=useState(collecArray('foodCategory'))
  const [PopularFood , setPopularFood] = useState(collecArray('popularFood'));

  GoBackfunc=()=>{
          navigation.goBack();     //navigation.pop(); is also applicable
  }

  return (
    <View style={styles.container}>

      <View style={styles.outerSearchBar}>
        <View style={styles.header}>
          <Header head="Favourites" navigation={navigation}/>  
        </View>
        <View style={styles.outerName}>
          <Text style={styles.name}>Hello {Name}</Text>
        </View>

        <View style={styles.searchView}>
          <View>
            <Text style={styles.searchName}>Choose your favourite Food</Text>
          </View>

          <View style={styles.outerSearchInput}>          
              <Icon name={"search"} size={30} style={styles.searchIcon}/>
              <TextInput style={styles.searchTextInput} placeholder='Search your favourite food'/>
            <View>
              <Icon name={'sliders'} size={40} style={styles.slider}/>    
            </View>
          </View> 
        </View>
      
      </View>
    
      <View style={{flex:0.15,maxHeight:130}}>
        <SeeAllHeader title="Food Category" detail="See All"/>
        <FoodCategory Data={Category} Horizontal={true} navigation={navigation}/>
      </View>

      <View  style={{flex:0.35}}>
        <SeeAllHeader title="Popular Food" detail="See All"/>
        <Popular_Food Data={PopularFood} Horizontal={true} navigation={navigation}/>
      </View>
    
      <View style={{flex:0.2}}>
        <SeeAllHeader title="Best Seller" detail="See All"/>
        <BestSeller Data={PopularFood} Horizontal={true}/>
      </View>  
    </View>
             
  );
}

