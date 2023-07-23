import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';
import firestore from '@react-native-firebase/firestore';

const ChatFooter = ({userId, chatRef}) => {
  const [message, setMessage] = useState('');
  const [sendEnable, setSendEnable] = useState(false);

  const onChange = value => {
    setMessage(value);
    setSendEnable(true);
  };

  const onSend = () => {
    chatRef.collection('messages').add({
      body: message,
      sender: userId,
      timestamp: firestore.FieldValue.serverTimestamp(),
    });
    setMessage('');
    setSendEnable(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.row}>
          <VectorIcon
            type="MaterialIcons"
            name="emoji-emotions"
            size={24}
            color={Colors.white}
          />
          <TextInput
            placeholder="Message"
            placeholderTextColor={Colors.textGrey}
            onChangeText={value => onChange(value)}
            style={styles.inputStyle}
            value={message}
          />
        </View>
        <View style={styles.row}>
          <VectorIcon
            type="Entypo"
            name="attachment"
            size={18}
            color={Colors.white}
          />
          {!sendEnable && (
            <>
              <VectorIcon
                type="FontAwesome"
                name="rupee"
                size={20}
                color={Colors.white}
                style={styles.iconStyle}
              />
              <VectorIcon
                type="FontAwesome"
                name="camera"
                size={18}
                color={Colors.white}
              />
            </>
          )}
        </View>
      </View>
      <View style={styles.rightContainer}>
        {sendEnable ? (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="send"
            size={25}
            color={Colors.white}
            onPress={onSend}
          />
        ) : (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="microphone"
            size={25}
            color={Colors.white}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    width: '85%',
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    marginHorizontal: 25,
  },
  rightContainer: {
    backgroundColor: Colors.teal,
    padding: 10,
    borderRadius: 50,
  },
  inputStyle: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 5,
  },
});

export default ChatFooter;
