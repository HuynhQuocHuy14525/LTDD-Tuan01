// Bài 1 (TypeScript cơ bản): Thẻ thông tin thành viên (UserCard)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UserCardProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

export default function UserCard({ name, age, isAdmin }: UserCardProps) {
  return (
    <View style={[styles.card, isAdmin && styles.adminCard]}>
      <Text style={styles.name}>{name} {isAdmin && '👑'}</Text>
      <Text style={styles.age}>Tuổi: {age}</Text>
      <Text style={styles.role}>{isAdmin ? 'Quản trị viên' : 'Thành viên'}</Text>
    </View>
  );
}

export function UserCardDemo() {
  return (
    <View style={styles.container}>
      <UserCard name="Nguyễn Văn A" age={30} isAdmin={true} />
      <UserCard name="Trần Thị B" age={22} isAdmin={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  card: { padding: 16, borderRadius: 8, backgroundColor: '#f1f5f9' },
  adminCard: { backgroundColor: '#fef3c7', borderWidth: 1, borderColor: '#f59e0b' },
  name: { fontSize: 18, fontWeight: 'bold' },
  age: { fontSize: 14, color: '#475569', marginTop: 4 },
  role: { fontSize: 12, color: '#64748b', marginTop: 4 },
});
