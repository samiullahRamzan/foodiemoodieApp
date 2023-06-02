import {View,Text,TouchableOpacity,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetailHeader({navigation}){
     return(
          <View style={{
               flex:0.1,
               marginTop:40,
               flexDirection:'row',
               alignItems:'center',
               justifyContent:'space-between'
             }}>
               <View>
               <Icon name={'angle-left'} size={30} style={{fontWeight:'bold'}} onPress={()=>{navigation.goBack()}}/>    
               </View>
               <View>
               <Text style={{fontWeight:'bold',fontSize:20}}>Detail</Text>
               </View>
               <View>
               <Icon name={'heart-o'} size={20} style={{fontWeight:'bold'}}/>
               </View>
          </View>
           
     )

}