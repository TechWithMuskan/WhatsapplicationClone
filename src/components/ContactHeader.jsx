import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';

const ContactHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <VectorIcon
          name="arrow-back"
          type="Ionicons"
          size={24}
          color={Colors.white}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text style={styles.selectContact}>Select Contact</Text>
          <Text style={styles.count}>23 Contacts</Text>
        </View>
      </View>

      <View style={styles.headerContainer}>
        <VectorIcon
          type="Ionicons"
          name="search"
          color={Colors.white}
          size={20}
          style={styles.iconStyle}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.white}
          size={18}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectContact: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 20,
  },
  count: {
    fontSize: 12,
    color: Colors.white,
    marginLeft: 20,
    marginTop: 2,
  },
  iconStyle: {
    marginHorizontal: 25,
  },
});

export default ContactHeader;
