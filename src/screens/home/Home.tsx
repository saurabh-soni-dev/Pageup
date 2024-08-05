import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import imageIndex from '../../assets/imageIndex';
import {CustomStatusbar, Post} from '../../components';
import {PostList} from './home.const';
import {styles} from './home.style';

const Home = () => {
  const [postList, setPostList] = useState(PostList);
  const [isEndReach, setIsEndReach] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isEndReach && currentIndex < PostList.length) {
      const newList = [...postList, PostList[currentIndex]];
      setPostList(newList);
      setCurrentIndex(currentIndex + 1);
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
