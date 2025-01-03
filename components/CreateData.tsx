import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import useDataStore from '../stores/zustand/dataStore';

const CreateData: React.FC = () => {
  const [input, setInput] = useState('');
  const { postData, isLoading, isError, data } = useDataStore();

  const handlePost = async () => {
    const data = { value: input };
    await postData(data);
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Enter value"
        value={input}
        onChangeText={setInput}
      />
      <Button title={isLoading ? 'Loading...' : 'Submit'} onPress={handlePost} disabled={isLoading} />
      {isError && <Text style={styles.error}>An error occurred while making the request.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  response: {
    marginTop: 10,
    color: 'green',
  },
});

export default CreateData;
