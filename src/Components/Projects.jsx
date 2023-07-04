import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Colours} from '../Utils/Colors';
import {projects} from '../Utils/Data';

const Projects = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        backgroundColor: Colours.secondary,
        paddingTop: 10,
        gap: 20,
      }}>
      <Text
        style={{
          color: Colours.black,
          fontSize: 20,
          fontWeight: '600',
        }}>
        Look at my projects
      </Text>
      <FlatList
        scrollEnabled={false}
        data={projects}
        renderItem={({item, index}) => (
          <View style={{marginBottom: 15}}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: Colours.black,
                }}>
                {item.title}
              </Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: Colours.black,
                  }}>
                  Role :
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '400',
                    color: Colours.black,
                  }}>
                  Frontend Developer
                </Text>
              </View>
              <Text
                numberOfLines={5}
                style={{
                  fontSize: 13,
                  color: Colours.black,
                  lineHeight: 20,
                }}>
                {item.description}
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: Colours.black,
                  }}>
                  Technologies :
                </Text>
                <Text
                  numberOfLines={4}
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    color: Colours.black,
                    width: '80%',

                    lineHeight: 17,
                  }}>
                  {item.technologies}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Projects;
