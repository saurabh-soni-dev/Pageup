import {ImageSourcePropType} from 'react-native';

export interface PostProps {
  item: Post;
  index: number;
}
interface Post {
  id: number;
  profileImage: ImageSourcePropType;
  name: string;
  desc: string;
  images: string[];
  likes: number;
  comments: number;
  postDesc: string;
  postTime: string;
}
