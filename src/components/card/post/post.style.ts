import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  threeDotIcon: {
    height: 20,
    width: 20,
  },
  profile: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageView: {
    height: 35,
    width: 35,
    borderRadius: 6,
  },
  profileImage: {
    height: 35,
    width: 35,
    borderRadius: 6,
  },
  infoView: {
    marginLeft: 10,
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textTransform: 'capitalize',
  },
  descText: {
    fontSize: 12,
    fontWeight: '300',
    color: 'black',
  },
  checkIcon: {
    marginLeft: 5,
    height: 12,
    width: 12,
    tintColor: 'red',
  },
  socialIcon: {
    height: 20,
    width: 20,
    marginRight: 20,
  },
  scollView: {
    flex: 1,
    height: 300,
    backgroundColor: 'cyan',
    marginVertical: 8,
  },
  likeCommentView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  likeCommentIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray',
  },
  readMore: {
    marginTop: 5,
    paddingHorizontal: 15,
  },
  likeCommentCount: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dotView: {
    marginHorizontal: 4,
    height: 4,
    width: 4,
    backgroundColor: 'darkgray',
    borderRadius: 5,
  },
  imageView: {
    backgroundColor: 'dark',
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: '100%',
    flex: 1,
  },
  videoView: {
    width: '100%',
    height: 300,
  },
  video: {
    flex: 1,
  },
  paginationContainer: {
    backgroundColor: 'transparent',
    marginTop: -60,
  },
  placeHolderImage: {
    height: 300,
    width: '100%',
  },
  waterMarkContainer: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  watermark: {
    height: 30,
    width: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
  inactiveDot: {
    backgroundColor: 'white',
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 280,
  },
  dottView: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dott: {
    height: 6,
    width: 6,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  activeDot: {
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
});
