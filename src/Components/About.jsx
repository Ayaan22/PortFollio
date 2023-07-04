import {View, Text} from 'react-native';
import React from 'react';
import {Colours} from '../Utils/Colors';

const About = () => {
  return (
    <View
      style={{
        flexDirection: 'row',

        alignItems: 'center',

        backgroundColor: Colours.primary,

        paddingHorizontal: 15,
        justifyContent: 'space-between',
        height: 230,
      }}>
      <View
        style={{
          backgroundColor: Colours.secondary,
          paddingHorizontal: 10,
          borderRadius: 10,
          height: 150,
        }}>
        <Text
          style={{
            fontSize: 100,
            color: Colours.primary,
          }}>
          2+
        </Text>
        <Text style={{fontSize: 13, color: Colours.primary}}>
          Years of Experience
        </Text>
      </View>
      <View style={{height: '60%', width: '60%', justifyContent: 'center'}}>
        <Text
          style={{
            color: Colours.white,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          About Me
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 13,

            lineHeight: 20,
            color: Colours.white,
          }}>
          You can express yourself however you want and whenever you want,we can
          complete your request and we will send you a notification to your
          account and you will receive it.
        </Text>
      </View>
    </View>
  );
};

export default About;
