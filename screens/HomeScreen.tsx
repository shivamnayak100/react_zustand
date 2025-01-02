import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import useDataStore from '../stores/zustand/dataStore';
import DataList from '../components/DataList';

const HomeScreen: React.FC = () => {
  const { data, isLoading, isError, fetchData } = useDataStore();

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Failed to load data. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DataList data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default HomeScreen;
