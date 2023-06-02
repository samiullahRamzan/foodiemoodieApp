import {View,Text,TouchableOpacity} from "react-native";

export default function SeeAllHeader(props){
   return(
   
    <View style={{flexDirection:"row",marginBottom:10,justifyContent:"space-between"}}>
    <Text style={{fontWeight:'bold',fontSize:15,marginLeft:10}}>{props.title}</Text>
    <TouchableOpacity>
    <Text style={{fontWeight:'bold',fontSize:15,marginRight:10}}>{props.detail}</Text>
    </TouchableOpacity>
    </View>

   )
}