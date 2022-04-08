import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
position:"absolute",
zIndex:100,
flexDirection:'row',
justifyContent:"space-between",
paddingHorizontal:20,
width:'100%',

top:50,
  },
  logo:{
    width:100,
    resizeMode:'contain',
    height:20,
  },
  menu:{
height:25,
resizeMode:'contain',

width:25,
  }
});

export default styles;