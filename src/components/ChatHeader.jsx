import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Profile from '../assets/user1.jpeg';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {getImage} from '../utils/helper';

const ChatHeader = ({contactUserRef}) => {
  const navigation = useNavigation();

  const [user, setUser] = useState({});

  useEffect(() => {
    getContactData();
  }, [contactUserRef]);

  const getContactData = async () => {
    const contactSnapshot = await contactUserRef.get();
    const data = contactSnapshot.data();
    const name = data.name;
    const profile = await getImage(data.profile);
    setUser({name, profile});
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <VectorIcon
          name="arrow-back"
          type="Ionicons"
          size={24}
          color={Colors.white}
          onPress={() => navigation.goBack()}
        />
        {user?.profile && (
          <Image source={{uri: user.profile}} style={styles.profilePhoto} />
        )}
        {user.name && <Text style={styles.username}>{user.name}</Text>}
      </View>
      <View style={styles.innerContainer}>
        <VectorIcon
          name="videocam"
          type="Ionicons"
          size={24}
          color={Colors.white}
        />
        <VectorIcon
          name="phone-alt"
          type="FontAwesome5"
          size={16}
          color={Colors.white}
          style={styles.iconStyle}
        />
        <VectorIcon
          name="dots-three-vertical"
          type="Entypo"
          size={18}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePhoto: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginHorizontal: 25,
  },
});

export default ChatHeader;
