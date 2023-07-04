import {View, Text} from 'react-native';
import React from 'react';
import {Colours} from '../Utils/Colors';

const Services = () => {
  return (
    <View
      style={{paddingHorizontal: 20, height: 180, justifyContent: 'center'}}>
      <Text
        style={{
          color: Colours.black,
          fontSize: 20,
          fontWeight: '600',
        }}>
        Services I Provide
      </Text>

      <View style={{gap: 10}}>
      
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',

            marginTop: 15,
            color: Colours.black,
          }}>
          ◙ Native Android Mobile App Using Java
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: Colours.black,
          }}>
          ◙ Cross Platform Mobile Apps Using Flutter
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: Colours.black,
          }}>
          ◙ Cross Platform Mobile Apps Using React Native
        </Text>
      </View>
    </View>
  );
};

export default Services;
