import React,{useEffect, useState} from 'react';
import { Image,FlatList,StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native';
import Header from './header';

export default function CategoryScreen({navigation,route}) {

   const num=2; 

   return (
    <View style={styles.container}>
    <View style={{
                 flex:0.1,
                 backgroundColor:'white',
                 flexDirection:'row',
                 alignItems:'center',
                 justifyContent:'space-between',
                 marginTop:30,
                 }}>

    <Header head='Category' navigation={navigation}/> 
    </View>
    <View style={{flex:0.9}}>
    
    <FlatList
    data={global.passFlat}
    horizontal={false}
    numColumns={num}
    keyExtractor={item=>item.key}
    renderItem={({item})=>(
     
     <View style={styles.flatcontainer}>
     
     <View style={{flex:0.7}}>
     <Image source={{uri:item.image}} style={{height:120,width:150,marginRight:5,resizeMode:'contain'}} />
     </View>
     
     <View style={{flex:0.3,alignItems:'center'}}>
     <Text>{item.title}</Text>
     <Text>{item.price}</Text>
     </View>
     
     </View>
     

    )}  
    />
    </View>
    </View>
  );

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding:10,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  flatcontainer:{
    
    flex:1,
    height:200,
    width:150,
    marginRight:10,
    marginBottom:10,
    borderRadius:10,
    backgroundColor:'white',
    
  },
});
