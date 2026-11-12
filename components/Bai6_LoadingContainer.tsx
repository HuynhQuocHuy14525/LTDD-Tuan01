// Bài 6 (TypeScript cơ bản): Trạng thái tải trang (Loading Wrapper - LoadingContainer)
import React, { PropsWithChildren } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface LoadingContainerProps {
  isLoading: boolean;
}

export default function LoadingContainer({ isLoading, children }: PropsWithChildren<LoadingContainerProps>) {
  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4f46e5" />
      </View>
    );
  }
  return <>{children}</>;
}

export function LoadingContainerDemo() {
  return (
    <LoadingContainer isLoading={false}>
      <View style={styles.center}>
        <Text>Nội dung đã tải xong!</Text>
      </View>
    </LoadingContainer>
  );
}

const styles = StyleSheet.create({
  center: { padding: 32, alignItems: 'center', justifyContent: 'center' },
});
