import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems([...items, text]);
    setText('');
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Digite o item"
      />
      <Button title="Adicionar" onPress={handleAddItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
}
