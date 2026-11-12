// Bài 2 (TypeScript cơ bản): Bộ đếm số tăng giảm (Counter)
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Counter() {
  // useState(0) cũng suy luận number nhờ Type Inference; viết tường minh useState<number>(0) để rõ ràng hơn
  const [count, setCount] = useState<number>(0);

  const decrease = () => setCount((c) => Math.max(0, c - 1));
  const increase = () => setCount((c) => c + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{count}</Text>
      <View style={styles.row}>
        <Pressable style={styles.btn} onPress={decrease}>
          <Text style={styles.btnText}>-</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={increase}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center', gap: 16 },
  value: { fontSize: 40, fontWeight: 'bold' },
  row: { flexDirection: 'row', gap: 16 },
  btn: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#4f46e5', alignItems: 'center', justifyContent: 'center' },
  btnText: { color: '#fff', fontSize: 24 },
});
