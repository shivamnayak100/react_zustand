import React, { useEffect } from 'react';
import {  View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import useDataStore from '../stores/zustand/dataStore';
import DataList from '../components/DataList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const HomeScreen: React.FC = () => {
  const { data, isLoading, isError, fetchData } = useDataStore();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
      {/* AppBar with Add Icon */}
      <View style={styles.appBar}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddData')}>
          <Ionicons name="add-circle" size={28} color="#007bff" />
        </TouchableOpacity>
      </View>
      <DataList data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
