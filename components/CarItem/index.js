import React from 'react'
import {Text, View ,ImageBackground} from 'react-native';
import styles from './styles'

const CarItem = (props)=>{
    return(
    <View style={styles.carContainer}>
        <ImageBackground 
        source={require('../../assets/images/mdlx.jpeg')} 
        style={styles.image}
        />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S3</Text>
        <Text style={styles.subtitle}>Starting at $69000</Text>
      </View>
      </View>
    );
};

export default CarItem