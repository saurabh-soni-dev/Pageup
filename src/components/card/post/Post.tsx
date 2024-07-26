import React, {FC, memo, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import {styles} from './post.style';
import {PostProps} from './postProps';

const Post: FC<PostProps> = ({item, index}) => {
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(offsetX / width);
    setCurrentIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <View style={styles.profileImageView}>
            <Image source={item.profileImage} style={styles.profileImage} />
          </View>
          <View style={styles.infoView}>
            <View style={styles.nameView}>
              <Text
                style={styles.nameText}
                allowFontScaling={false}
                numberOfLines={1}>
                {item.name}
              </Text>
              <Image source={imageIndex.checkIcon} style={styles.checkIcon} />
            </View>
            <Text
              style={styles.descText}
              allowFontScaling={false}
              numberOfLines={1}>
              {item.desc}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={imageIndex.threeDotsIcon}
            style={styles.threeDotIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.scollView}>
        <ScrollView
          horizontal
          contentContainerStyle={{flexGrow: 1}}
          pagingEnabled
          onScroll={handleScroll}>
          {item?.images?.map((img: any, idx: number) => (
            <Image
              key={idx}
              source={img}
              style={{
                height: 300,
                width: width,
              }}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
        <View style={styles.dotsContainer}>
          {item?.images?.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dottView}
              onPress={() => setCurrentIndex(index)}>
              <View
                style={[
                  styles.dott,
                  index === currentIndex && styles.activeDot,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.likeCommentView}>
        <View style={styles.likeCommentIcon}>
          <TouchableOpacity>
            <Image source={imageIndex.heartIcon} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageIndex.commentIcon} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imageIndex.sendIcon} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.likeCommentCount}>
          <Text
            style={styles.likeText}
            allowFontScaling={false}
            numberOfLines={1}>
            {item.likes} Likes
          </Text>
          <View style={styles.dotView} />
          <Text
            style={styles.likeText}
            allowFontScaling={false}
            numberOfLines={1}>
            {item.comments} Comments
          </Text>
        </View>
      </View>
      <View style={styles.readMore}>
        <Text style={styles.nameText} numberOfLines={2}>
          {item.name} <Text style={styles.descText}>{item.postDesc}</Text>
        </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text
            style={[
              styles.likeText,
              {textDecorationLine: 'underline', textDecorationStyle: 'solid'},
            ]}>
            read more
          </Text>
        </TouchableOpacity>
        <Text style={[styles.likeText, {marginTop: 4}]}>{item.postTime}</Text>
      </View>
    </View>
  );
};

export default memo(Post);
