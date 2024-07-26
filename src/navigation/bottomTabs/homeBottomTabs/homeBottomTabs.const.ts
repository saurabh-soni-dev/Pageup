import imageIndex from '../../../assets/imageIndex';
import Home from '../../../screens/home/Home';
import Post from '../../../screens/post/Post';
import Profile from '../../../screens/profile/Profile';

export const homeBottomTabs = [
  {id: 1, name: 'Home', component: Home, icon: imageIndex.homeIcon},
  {id: 2, name: 'Post', component: Post, icon: imageIndex.postIcon},
  {id: 3, name: 'Profile', component: Profile, icon: imageIndex.userIcon},
];
