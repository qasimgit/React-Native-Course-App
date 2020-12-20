import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import courses from '../content/courses';

const HomeScreen = ({navigation}) => {
  const CourseCard = ({course}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('CourseScreen', {data: course})}>
        <ImageBackground
          source={course.image}
          style={{
            marginVertical: 8,
            marginHorizontal: 4,
            borderRadius: 50,
            width: windowWidth / 2 - 30,
            height: windowHeight / 3,
            overflow: 'hidden',
            paddingTop: 20,
            paddingLeft: 18,
            borderRadius: 14,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 5,
            }}>
            {course.name}
          </Text>
          <Text
            style={{
              color: '#8F95B2',
              fontWeight: '600',
            }}>
            {course.totalCourse + 'Course'}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Hey Qasim</Text>
        <Text style={{fontSize: 19, marginTop: 15, color: '#61688B'}}>
          Find a course you want to learn
        </Text>
        <View
          style={{
            height: 50,
            backgroundColor: '#F5F5F7',
            borderRadius: 40,
            marginTop: 10,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon name="search" size={25} />
          <TextInput
            placeholder="search anything.."
            style={{
              fontSize: 18,
              marginLeft: 5,
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Categories</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#6E8AFA'}}>
            See All
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={courses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
