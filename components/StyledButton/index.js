import React from 'react'
import {Text, View ,ImageBackground} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './styles'

const StyledButton = (props)=>{
    const {type,content,onPress}= props
    const backgroundColor=type==='primary' ? '#171A20CC':'#FFFFFFA6'
    const textColor=type==='primary' ? '#FFFFFFA6':'#171A20CC'

    return(
    <View style={styles.container}>
     <Pressable 
     style={[styles.button,{backgroundColor: backgroundColor}]} 
     onPress={() => onPress()}>
         <Text style={[styles.text,{color:textColor}]}>{content}</Text>
     </Pressable>
      </View>
    );
};

export default StyledButton