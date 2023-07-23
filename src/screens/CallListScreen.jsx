import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CallLink from '../components/CallLink';
import RecentCalls from '../components/RecentCalls';
import {Colors} from '../theme/Colors';

const CallListScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CallLink />
      <RecentCalls />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 16,
  },
});

export default CallListScreen;
