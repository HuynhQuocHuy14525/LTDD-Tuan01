// Bài 5 (TypeScript cơ bản): Ô nhập text phản hồi (Live Input)
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function LiveInput() {
  const [text, setText] = useState<string>('');

  const handleChange = (value: string) => setText(value);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={handleChange} placeholder="Nhập phản hồi..." multiline />
      <Text style={styles.counter}>Số ký tự: {text.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 8 },
  input: { borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 8, padding: 12, minHeight: 80, textAlignVertical: 'top' },
  counter: { color: '#64748b' },
});
