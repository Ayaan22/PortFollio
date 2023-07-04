import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Colours} from '../Utils/Colors';

const Splash = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.replace('Home');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colours.primary,
      }}>
      <Text style={{color: 'white', fontSize: 30,fontWeight:'bold'}}>PortFolio</Text>
    </View>
  );
};

export default Splash;
