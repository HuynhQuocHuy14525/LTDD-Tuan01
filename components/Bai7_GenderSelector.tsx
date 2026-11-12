// Bài 7 (TypeScript cơ bản): Chọn giới tính (Gender Selector)
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type Gender = 'male' | 'female' | 'other';

const OPTIONS: { value: Gender; label: string }[] = [
  { value: 'male', label: 'Nam' },
  { value: 'female', label: 'Nữ' },
  { value: 'other', label: 'Khác' },
];

export default function GenderSelector() {
  const [gender, setGender] = useState<Gender>('male');

  return (
    <View style={styles.row}>
      {OPTIONS.map((opt) => (
        <Pressable
          key={opt.value}
          style={[styles.chip, gender === opt.value && styles.chipActive]}
          onPress={() => setGender(opt.value)}
        >
          <Text style={[styles.text, gender === opt.value && styles.textActive]}>{opt.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8, padding: 16 },
  chip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: '#4f46e5' },
  chipActive: { backgroundColor: '#4f46e5' },
  text: { color: '#4f46e5' },
  textActive: { color: '#fff' },
});
