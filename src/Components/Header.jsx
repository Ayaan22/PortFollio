import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colours} from '../Utils/Colors';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
       
        alignItems: 'center',
         paddingVertical: 10,
        paddingHorizontal: 20,
      
      }}>
      <Text style={{color: Colours.black, fontSize: 20, fontWeight: 'bold'}}>
        WELCOME 👋
      </Text>
      <Image
      style={{height:30,width:30,borderRadius:20}}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        }}
      />
    </View>
  );
};

export default Header;
