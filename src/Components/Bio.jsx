import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colours} from '../Utils/Colors';

const Bio = () => {
  return (
    <View
      style={{
        flexDirection: 'row',

       
        alignItems: 'center',
        justifyContent:'space-between',
          paddingHorizontal: 20,
      }}>
      <View style={{width: '60%', gap: 5}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: Colours.black,
          }}>
          Pathan Gouse
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: 'grey',
          }}>
          React Native Developer
        </Text>
        <Text
          numberOfLines={2}
          style={{marginTop: 5, fontSize: 13, color: Colours.black,lineHeight:20}}>
          I'm very passionate and creative in my app development.
        </Text>
      </View>

      <Image
        style={{height: 200, width: 160}}
        source={require('../Utils/assets/pic.png')}
      />
    </View>
  );
};

export default Bio;
