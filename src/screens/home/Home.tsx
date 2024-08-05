import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './home.style';
import imageIndex from '../../assets/imageIndex';
import {CustomStatusbar, Post} from '../../components';
import {PostList} from './home.const';

const Home = () => {
  const [postList, setPostList] = useState(PostList);
  const [isEndReach, setIsEndReach] = useState(false);

  useEffect(() => {
    if (isEndReach) {
      const newList: any = [...postList, PostList];
      setPostList(newList);
    }
  }, [isEndReach]);

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
          data={postList}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => <Post item={item} index={index} />}
          showsVerticalScrollIndicator={false}
          onEndReached={info => {
            if (info.distanceFromEnd === 0) {
              setIsEndReach(!isEndReach);
            }
          }}
        />
      </View>
    </View>
  );
};

export default Home;
