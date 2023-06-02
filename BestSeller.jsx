import {Text, View,FlatList,Image,TouchableOpacity} from 'react-native';
import { styles } from './StyleSheets/FavouritesStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BestSeller(props){
    return(
        <FlatList
        data={props.Data}
        keyExtractor={item=>item.key}
        horizontal={props.Horizontal}
        renderItem={({item})=>(
         <View style={styles.mainSeller}>
          {/* burger image */}
         <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
         <Image source={{uri:item.burgerImage}} style={{height:80,width:80}}/>
         </View>
         
         {/* burger name views */}
         <View style={{
                      flex:0.5,
                      
                      }}>
         
         <View style={{flex:0.5,
                      
                      justifyContent:'flex-end'}}>
         <Text style={{
                      fontSize:15,
                      marginLeft:10,
                      fontWeight:'bold'
                      }}>
         {item.burgerName}
         </Text>
         </View>
         
         <View style={{flex:0.5,
                       
                       justifyContent:'flex-start'}}>
         <Text style={{
                      fontSize:15,
                      marginLeft:10,
                      
                      }}>
         {item.price}
         </Text>
         </View>
         </View>
         
         {/* rating views */}
         <View style={{flex:0.2}}>
         {/* heart */}
         <View style={{flex:0.5,alignItems:'center',justifyContent:'flex-end'}}>
         <Icon name={"heart-o"} size={20} color={"red"}/>
         </View>
         
         <View style={{flex:0.5,flexDirection:'row'}}>
         {/* rating */}
         
         <View style={{flex:0.4,alignItems:'center'}}>
         <Image source={{uri:item.rating}} style={{height:20,width:20,marginLeft:10}}/>
         </View>
         
         <View style={{flex:0.6}}>
         <Text>{item.ratingPoint}</Text>
         </View> 
         
    
         </View> 
         
         </View>
         
         
         </View>
        )
        } 
        />
    )
}