import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomNavigationBar = () => {
  return (
    <View
      style={{
        height: 65,
        bottom: 0,
        zIndex: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          backgroundColor: '#FFEDEE',
          borderRadius: 30,
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="local-mall"
          size={25}
          style={{
            color: '#FF6670',
          }}
        />
      </View>
      <View>
        <Text>Buy Now</Text>
      </View>
    </View>
  );
};

export default BottomNavigationBar;
