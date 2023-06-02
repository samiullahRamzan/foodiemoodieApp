import {Text, View,FlatList,Image, TouchableOpacity} from 'react-native';
import { styles } from './StyleSheets/FavouritesStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Popular_Food(props){
     const [Liked,setLiked]=useState(false);
    return(
        
    <FlatList
    data={props.Data}
    keyExtractor={item=>item.key}
    horizontal={props.Horizontal}
    renderItem={({item})=>(
//    <TouchableOpacity onPress={()=>{props.navigation.navigate("HuklDetail")}}>
    
    <View style={styles.main}>
     <View style={styles.rating}>
     <View style={{marginTop:3,marginRight:5}}>
     <Icon name={"star-o"} size={15}/>
     </View>

     <View style={{marginRight:100}}>
     <Text style={{fontWeight:'bold'}}>{item.ratingPoint}</Text>
     </View>
   

     

     <View style={{marginTop:5}}>
     {/* <Image source={{uri:item.heart}} style={{height:12,width:12}} /> */}
     <Icon name={"heart-o"} size={20} onPress={()=>{item.isLiked=(!Liked)}}/>
     </View>
     </View>

     <View style={styles.image}>
     <Image style={{width:130,height:130}} source={{uri:item.burgerImage}}/>
     </View>

     <View style={styles.imagName}>
      <Text style={{fontSize:15,fontWeight:'bold'}}>{item.burgerName}</Text>
      <Text>{item.price}</Text>
     </View>

     </View>
  //   </TouchableOpacity> 
    )
    } 
    />
    
    )
}