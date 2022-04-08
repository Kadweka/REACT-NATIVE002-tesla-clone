import React from 'react'
import {Text, View ,ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
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
      <StyledButton type='primary' content={'Custom Order'} onPress={()=>{
        console.warn('CUSTOM ORDER PRESSED')
      }}/>
      <StyledButton type='secondary' content={'EXISTING INVENTORY'} onPress={()=>{
        console.warn('Existing Inventory')
      }}/>
      </View>
    );
};

export default CarItem