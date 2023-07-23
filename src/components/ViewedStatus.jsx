import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import {ViewedStatusData} from '../data/ViewedStatusData';

const ViewedStatus = () => {
  return (
    <View>
      <Text style={styles.recentUpdates}>Viewed updates</Text>
      {ViewedStatusData.map(item => (
        <View key={item.id} style={styles.storySection}>
          <View style={styles.imgStory}>
            <Image source={item.storyImg} style={styles.statusStyle} />
          </View>
          <View style={styles.statusInfo}>
            <Text style={styles.username}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  statusStyle: {
    height: 42,
    width: 42,
    borderRadius: 50,
  },
  recentUpdates: {
    fontSize: 14,
    color: Colors.textGrey,
    paddingBottom: 10,
    paddingTop: 20,
  },
  imgStory: {
    height: 50,
    width: 50,
    backgroundColor: Colors.background,
    borderColor: Colors.textGrey,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
  },
  time: {
    fontSize: 13,
    color: Colors.textGrey,
    marginTop: 3,
  },
  storySection: {
    flexDirection: 'row',
    marginTop: 15,
  },
  statusInfo: {
    marginLeft: 15,
  },
});

export default ViewedStatus;
