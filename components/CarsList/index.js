import React from 'react'
import {Text, View,FlatList} from 'react-native';
import styles from './styles'
import cars  from './cars';
import CarsItem from '../CarItem'
import { Dimensions } from 'react-native-web';

const CarsList = (props)=>{
    return(
    <View style={styles.carContainer}>
     <FlatList 
     data={cars}
     renderItem={({item}) => <CarsItem car={item}/>}
     snapToAlignment={'start'}
     decelerationRate={'fast'}
     showsVerticalScrollIndicator={false}
     snapToInterval={Dimensions.get('window').height}
     />
    </View>

    );
};

export default CarsList