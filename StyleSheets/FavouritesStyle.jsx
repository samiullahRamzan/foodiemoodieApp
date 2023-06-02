import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FAF9F6',
      padding: 5,
    },
    outerSearchBar:{
      flex:0.25,
      marginBottom:10
    },
    searchView:{
      flex:0.5,
      marginBottom:10
    },
    searchName:{
      fontSize:20,
      fontWeight:'bold',
      marginBottom:10,
      marginLeft:10
    },
    outerSearchInput:{
      flexDirection:'row',
      backgroundColor:'white',
      width:'80%',
      marginLeft:10,
      marginRight:10,
      borderRadius:10,
    },
    searchIcon:{
      marginTop:10,
      marginLeft:5
    },
    searchTextInput:{
      height:50,
      width:220,
      alignItems:"center",
      justifyContent:"center",
      marginLeft:10,
    },
    slider:{
      marginLeft:40,
      marginTop:5,
      backgroundColor:'red',
      borderRadius:5
    },
    header:{
      flex:0.3,
      justifyContent:'flex-end'
    },
    outerName:{
      marginBottom:3,
      flex:0.2,
      justifyContent:'flex-end'
    },
    name:{
      fontWeight:'bold',
      fontSize:15,
      marginRight:10,
      marginLeft:10
    },
    mainCategory:{
      flex:1,
      flexDirection:"row",
      backgroundColor:"white",
      marginTop:10,
      marginBottom:10,
      marginLeft:10,
      marginright:10,
      padding:10,
      borderRadius:5,
      height:50,
      width:140,
      alignItems:'center',
      justifyContent:'center',
    },
  
    main:{
      backgroundColor:'white',
      marginRight:10,
      padding:5,
      marginBottom:10,
    },
    rating:{
      flexDirection:"row",
    },
    image:{
      alignItems:"center",
      marginBottom:20,
      
    },
    imagName:{
      alignItems:"center",
      justifyContent:"center",
    },
    mainSeller:{
      flex:1,
      height:80,
      width:340,
      marginTop:10,
      marginLeft:10,
      marginRight:10,
      borderRadius:10,
      backgroundColor:'white',
      flexDirection:'row',
    },
  
  });
export {styles};  