import {View, Text} from 'react-native';
import React from 'react';
import {Colours} from '../Utils/Colors';

const Footer = () => {
  return (
    <View style={{ paddingVertical: 10, paddingHorizontal: 15}}>
      <Text
        style={{
          color: Colours.black,
          fontSize: 20,
          fontWeight: '600',
          gap: 10,
        }}>
        Let's work together
      </Text>
      <Text
        numberOfLines={2}
        style={{
          marginTop: 5,
          fontSize: 13,
          color: Colours.black,
          lineHeight: 20,
          width: '90%',
        }}>
        You can express yourself however you want and whenever you want as you
        see.
      </Text>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 3,marginTop:10}}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            color: Colours.black,
          }}>
          Call :
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            color: Colours.black,
          }}>
          +91 8985412390
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 3,marginTop:5}}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            color: Colours.black,
          }}>
          E-mail :
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            color: Colours.black,
          }}>
          pathan.gouse77@gmail.com
        </Text>
      </View>
     
    </View>
  );
};

export default Footer;
