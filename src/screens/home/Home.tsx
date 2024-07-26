import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './home.style';
import imageIndex from '../../assets/imageIndex';
import {CustomStatusbar, Post} from '../../components';
import {PostList} from './home.const';

const Home = () => {
  return (
    <View style={styles.container}>
      <CustomStatusbar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.bellIconView}>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={imageIndex.bellIcon} style={styles.bellIcon} />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={PostList}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => <Post item={item} index={index} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;
