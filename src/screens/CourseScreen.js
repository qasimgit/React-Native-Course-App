import React from 'react';
import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNavigationBar from './components/BottomNavigationBar';

const CourseScreen = ({route}) => {
  const {data} = route.params;

  const CourseContentList = ({content, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 17,
          paddingVertical: 8,
          // borderRadius: 40,
        }}>
        <Text
          style={{
            fontSize: 25,

            fontWeight: 'bold',
            color: '#E4E7F4',
          }}>
          0{index + 1}
        </Text>
        <View
          style={{
            paddingHorizontal: 17,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 13,
              color: '#A0A5BD',
              fontWeight: '500',
              marginBottom: 5,
            }}>
            {content.time}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {content.title}
          </Text>
        </View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: '#49CC96',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="play-arrow"
            size={20}
            style={{
              color: '#fff',
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <ImageBackground
        source={data.image}
        style={{
          height: 320,
          paddingTop: 35,
          paddingRight: 18,
          paddingLeft: 18,
        }}>
        <Image
          resizeMode="contain"
          source={require('../assets/bestseller.png')}
          style={{width: 100, marginBottom: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            top: -27,
          }}>
          Design Thinking
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', top: -17}}>
            <Icon name="people" size={20} style={{color: '#61688B'}} />
            <Text style={{color: '#61688B'}}>{data.students + 'k'}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              top: -17,
            }}>
            <Icon name="star" size={18} />
            <Text style={{color: '#61688B'}}>{data.star + 'k'}</Text>
          </View>
        </View>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>$ {data.price}</Text>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          marginTop: -35,
          backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}>
        <Text
          style={{
            marginTop: 15,
            marginBottom: 10,
            marginHorizontal: 20,
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          Course Content
        </Text>
        <FlatList
          data={data.courseContent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CourseContentList index={index} content={item} />
          )}
        />
      </View>
      <BottomNavigationBar />
    </SafeAreaView>
  );
};

export default CourseScreen;
