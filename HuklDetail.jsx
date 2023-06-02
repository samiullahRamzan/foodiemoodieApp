import {Alert,View,Text,TouchableOpacity,Image,StyleSheet} from "react-native";
import DetailHeader from "./DetailHeader";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from "./button";
import { useEffect, useState } from "react";

export default function HuklDetailScreen({navigation}){
  const [Count,setCount]=useState(0);  
  
  return(
      <View  style={styles.container} >
    
        <DetailHeader navigation={navigation}/>
        <View  style={{flex:0.4,alignItems:'center',justifyContent:'center'}}>
        <Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/sami-2a51e.appspot.com/o/Hukl_burger-removebg-preview.png?alt=media&token=512102a4-7953-4b9d-9262-e819212e26cb"}}
               style={{height:250,width:250}}/>
        </View>
        <View style={{flex:0.1,flexDirection:'row'}}>
          <View style={{flex:0.5}}>
            <View>
              <Text style={{fontWeight:'bold',fontSize:20}}>Hukl Burger</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <Icon name={'star-o'} size={20} style={{fontWeight:'bold'}}/>
              <Text>4,9</Text>
            </View>
          </View>
          <View style={{flex:0.5,justifyContent:'center',alignItems:'flex-end'}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'red'}}>$15.00</Text>
          </View>
        </View>
        
        <View style={{flex:0.12}}>
          <View>
            <Text style={{fontWeight:'bold',fontSize:20}}>Detail</Text>
          </View>
          <View>
            <Text style={{textAlign:'justify'}}>This burger uses 1000% quailty beef with slice tomatoes, pickles , vegetables ,onions and extra thick cheese</Text>
          </View>
        </View>
        
        <View style={{flex:0.2,flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
            <View style={{  height:40,
                            width:100,
                            flexDirection:'row',                          
                            backgroundColor:'white',
                            alignItems:'center',
                            justifyContent:'space-between',
                            borderRadius:20,
                            padding:10
                          }}>
            <TouchableOpacity onPress={()=>{setCount(Count-1)}}>                
            <Icon name={"minus"} size={20} />
            </TouchableOpacity>
            <Text style={{fontSize:15}}>{Count}</Text>
            <TouchableOpacity onPress={()=>{setCount(Count+1)}}>
            <Icon name={"plus"} size={20}/>
            </TouchableOpacity>
            </View>
           <View style={{flexDirection:'row'}}>
            <Icon name={"check"} size={30}/>
            <Text style={{marginTop:10}}>Free Shipping</Text>
           </View>
        </View>

        <View style={{alignItems:'center'}}>
          <Button label="Order Now" forLogin={true} press={()=>{Alert.alert("order button is pressed")}}/>
        </View>
      
      </View>
     )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor: '#FAF9F6',
    flex:1,
    padding:20
  },
  



});