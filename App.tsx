import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, StyleSheet, StatusBar } from 'react-native';

import { UserCardDemo } from './components/Bai1_UserCard';
import Counter from './components/Bai2_Counter';
import TodoList from './components/Bai3_TodoList';
import { MyButtonDemo } from './components/Bai4_MyButton';
import LiveInput from './components/Bai5_LiveInput';
import { LoadingContainerDemo } from './components/Bai6_LoadingContainer';
import GenderSelector from './components/Bai7_GenderSelector';
import { AppButtonDemo } from './components/Bai8_AppButton';

type Lesson = {
  id: number;
  title: string;
  Component: React.ComponentType;
};

const lessons: Lesson[] = [
  { id: 1, title: 'UserCard (Props + interface)', Component: UserCardDemo },
  { id: 2, title: 'Counter (useState<number>)', Component: Counter },
  { id: 3, title: 'Todo List (mảng object)', Component: TodoList },
  { id: 4, title: 'MyButton (optional props)', Component: MyButtonDemo },
  { id: 5, title: 'Live Input (TextInput)', Component: LiveInput },
  { id: 6, title: 'Loading Wrapper (children)', Component: LoadingContainerDemo },
  { id: 7, title: 'Gender Selector (union type)', Component: GenderSelector },
  { id: 8, title: 'AppButton (variant + size)', Component: AppButtonDemo },
];

export default function App() {
  const [current, setCurrent] = useState<number>(1);
  const lesson = lessons.find((l) => l.id === current) ?? lessons[0];
  const { Component } = lesson;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Tuần 1 - TypeScript cơ bản</Text>
        <Text style={styles.subtitle}>23654001 - Huỳnh Quốc Huy</Text>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs}>
          {lessons.map((l) => (
            <Pressable
              key={l.id}
              onPress={() => setCurrent(l.id)}
              style={[styles.tab, current === l.id && styles.tabActive]}
            >
              <Text style={[styles.tabText, current === l.id && styles.tabTextActive]}>Bài {l.id}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.lessonTitle}>
        Bài {lesson.id}: {lesson.title}
      </Text>
      <ScrollView style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
        <Component />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff', paddingTop: 32 },
  header: { paddingHorizontal: 16, paddingBottom: 8 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1e293b' },
  subtitle: { fontSize: 13, color: '#64748b', marginTop: 2 },
  tabs: { paddingHorizontal: 12, paddingVertical: 8, gap: 8 },
  tab: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, backgroundColor: '#f1f5f9' },
  tabActive: { backgroundColor: '#4f46e5' },
  tabText: { color: '#334155', fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  lessonTitle: { fontSize: 16, fontWeight: '700', paddingHorizontal: 16, paddingVertical: 8, color: '#4f46e5' },
  content: { flex: 1 },
});
