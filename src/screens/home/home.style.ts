import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bellIconView: {
    alignItems: 'flex-end',
    margin: 15,
  },
  bellIcon: {
    height: 20,
    width: 20,
  },
  redDot: {
    height: 5,
    width: 5,
    backgroundColor: 'red',
    alignSelf: 'flex-end',
    marginTop: -20,
    right: 3,
    borderRadius: 10,
  },
  listView: {
    flex: 1,
    marginTop: 20,
  },
  contentContainer: {
    flexGrow: 1,
    rowGap: 15,
    paddingBottom: 30,
  },
});
