// Bài 4 (TypeScript cơ bản): Nút bấm tùy biến (Custom Button - MyButton)
import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

interface MyButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

export default function MyButton({ label, onPress, color = '#2563eb' }: MyButtonProps) {
  return (
    <Pressable style={[styles.btn, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

export function MyButtonDemo() {
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <MyButton label="Mặc định (xanh)" onPress={() => {}} />
      <MyButton label="Tùy chỉnh (đỏ)" onPress={() => {}} color="#dc2626" />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: { paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  text: { color: '#fff', fontWeight: '600' },
});
