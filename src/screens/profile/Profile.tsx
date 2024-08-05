import React, {useContext, useState} from 'react';
import {View, Text, Button, StyleSheet, Modal, TextInput} from 'react-native';
import {UserContext} from '../../i18n/UserContext';
import {CustomStatusbar} from '../../components';

const Profile = () => {
  const context = useContext(UserContext);
  const updateData = context?.updateData;
  const userData = context?.userData;

  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(userData?.name);
  const [mobile, setMobile] = useState(userData?.mobile);
  const [address, setAddress] = useState(userData?.address);

  const handleUpdate = () => {
    updateData?.({
      name,
      mobile,
      address,
    });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <CustomStatusbar />
      <View style={styles.card}>
        <Text style={[styles.value, {fontSize: 20, fontWeight: '600'}]}>
          {userData?.name}
        </Text>
        <Text style={styles.value}>{userData?.mobile}</Text>
        <Text style={[styles.value, {marginBottom: 20}]}>
          {userData?.address}
        </Text>
        <Button title="Update Profile" onPress={() => setModalVisible(true)} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Update Profile</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              value={mobile}
              onChangeText={text => setMobile(text)}
              placeholder="Mobile"
            />
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={text => setAddress(text)}
              placeholder="Address"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View style={{flex: 1}}>
                <Button title="Update" onPress={handleUpdate} />
              </View>
              <View style={{marginLeft: 80, flex: 1}}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'lightgray',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  value: {
    fontSize: 14,
    color: 'black',
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    marginBottom: 15,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});

export default Profile;
