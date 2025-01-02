import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Post } from '../services/apiServices';

interface DataListProps {
  data: Post[];
}

const DataList: React.FC<DataListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
});

export default DataList;
