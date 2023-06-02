import Icon from 'react-native-vector-icons/FontAwesome';

import {Text,View} from "react-native";




const Header=({head,navigation})=>{
  
    return(
    <View style={{
                 flexDirection:'row',
                 marginLeft:20,
                 }}>
    <Icon name={'angle-left'} size={30} 
            style={{
                fontWeight:'bold',
                marginRight:15
                }}
            onPress={()=>{     
                navigation.goBack();     //navigation.pop(); is also
              }}
    />
    <Text style={{
                fontSize:25,
                fontWeight:"bold",
                }}>
     {head}</Text>
   </View>
  )
};
export default Header;
