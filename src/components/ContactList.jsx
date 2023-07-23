import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../theme/Colors';
import firestore from '@react-native-firebase/firestore';
import {getImage} from '../utils/helper';
import {useNavigation} from '@react-navigation/native';

const ContactList = ({userId}) => {
  const navigation = useNavigation();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getImage();
    getUserData()
      .then(res => setUsers(res))
      .catch(error => console.log('error :', error));
  }, []);

  const getUserData = async () => {
    const userRef = await firestore().collection('users').get();
    const userData = Promise.all(
      userRef.docs
        .filter(item => {
          return item.id != userId;
        })
        .map(async item => {
          const id = item.id;
          const name = item.data().name;
          const profile = await getImage(item.data().profile);
          return {
            id,
            name,
            profile,
          };
        }),
    );
    return userData;
  };

  const onNavigate = contactId => {
    navigation.navigate('ChatScreen', {
      userId: userId,
      contactId: contactId,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts on Whatsapp</Text>
      {users.map(item => (
        <View key={item.id}>
          <TouchableOpacity
            onPress={() => onNavigate(item.id)}
            style={styles.contactContainer}>
            <Image source={{uri: item.profile}} style={styles.imgStyle} />
            <Text style={styles.username}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 16,
    flex: 1,
  },
  imgStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    fontSize: 16,
    color: Colors.textColor,
    marginLeft: 15,
  },
  title: {
    fontSize: 12,
    color: Colors.textGrey,
    marginVertical: 5,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default ContactList;
