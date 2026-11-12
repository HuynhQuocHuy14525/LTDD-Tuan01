// Bài 3 (TypeScript cơ bản): Danh sách việc cần làm đơn giản (Todo Basic)
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

interface Todo {
  id: string;
  title: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Học TypeScript' },
    { id: '2', title: 'Làm bài tập React Native' },
  ]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now().toString(), title: text.trim() }]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput style={styles.input} value={text} onChangeText={setText} placeholder="Nhập việc cần làm" />
        <Pressable style={styles.addBtn} onPress={addTodo}>
          <Text style={styles.addText}>Thêm</Text>
        </Pressable>
      </View>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.item}>
          <Text>{todo.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 8 },
  row: { flexDirection: 'row', gap: 8, marginBottom: 8 },
  input: { flex: 1, borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 8, paddingHorizontal: 12, height: 40 },
  addBtn: { backgroundColor: '#4f46e5', paddingHorizontal: 16, justifyContent: 'center', borderRadius: 8 },
  addText: { color: '#fff', fontWeight: '600' },
  item: { padding: 12, backgroundColor: '#f1f5f9', borderRadius: 8 },
});
