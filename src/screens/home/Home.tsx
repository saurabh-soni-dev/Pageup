import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './home.style';
import imageIndex from '../../assets/imageIndex';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'red', alignItems: 'flex-end'}}>
        <TouchableOpacity>
          <Image source={imageIndex.bellIcon} style={{}} />
        </TouchableOpacity>
      </View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
