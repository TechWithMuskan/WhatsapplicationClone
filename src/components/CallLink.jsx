import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';

const CallLink = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBg}>
        <VectorIcon
          name="link"
          type="Fontisto"
          size={20}
          color={Colors.white}
        />
      </View>
      <View style={styles.linkSection}>
        <Text style={styles.callLink}>Create call link</Text>
        <Text style={styles.shareLink}>
          Share a link for your Whatsapp call
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconBg: {
    backgroundColor: Colors.tertiary,
    height: 45,
    width: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callLink: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
  },
  shareLink: {
    fontSize: 13,
    color: Colors.textGrey,
    marginTop: 3,
  },
  linkSection: {
    marginLeft: 15,
  },
});

export default CallLink;
