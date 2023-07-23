import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../theme/Colors';
import {RecentStatusData} from '../data/RecentStatusData';
import FullModal from '../utils/FullModal';

const RecentStatus = () => {
  const [showStatusModal, setShowStatusModal] = useState(true);

  const setTimeUp = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: false}));
  };

  const viewStatus = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: true}));
  };

  return (
    <View>
      <Text style={styles.recentUpdates}>Recent updates</Text>
      {RecentStatusData.map(item => (
        <View key={item.id}>
          <TouchableOpacity onPress={() => viewStatus(item.id)}>
            <View style={styles.storySection}>
              <View style={styles.imgStory}>
                <Image source={item.storyImg} style={styles.statusStyle} />
              </View>
              <View style={styles.statusInfo}>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FullModal
            setShowStatusModal={value =>
              setShowStatusModal(prev => ({...prev, [item.id]: value}))
            }
            item={item}
            showStatusModal={showStatusModal[item.id] || false}
            setTimeUp={() => setTimeUp(item.id)}
          />
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
    borderColor: Colors.tertiary,
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

export default RecentStatus;
