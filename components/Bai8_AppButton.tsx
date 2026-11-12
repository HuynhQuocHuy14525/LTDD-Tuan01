// Bài 8 (Pattern): Component tái sử dụng với Props & Variant (Compound Props Pattern - AppButton)
import React from 'react';
import { Pressable, Text, ActivityIndicator, View, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Variant = 'primary' | 'secondary' | 'outline' | 'danger';
type Size = 'small' | 'medium' | 'large';

interface AppButtonProps {
  title: string;
  variant?: Variant;
  size?: Size;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const variantStyles: Record<Variant, { container: ViewStyle; text: TextStyle }> = {
  primary: { container: { backgroundColor: '#4f46e5' }, text: { color: '#fff' } },
  secondary: { container: { backgroundColor: '#e2e8f0' }, text: { color: '#1e293b' } },
  outline: { container: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#4f46e5' }, text: { color: '#4f46e5' } },
  danger: { container: { backgroundColor: '#dc2626' }, text: { color: '#fff' } },
};

const sizeStyles: Record<Size, { container: ViewStyle; text: TextStyle }> = {
  small: { container: { paddingVertical: 6, paddingHorizontal: 12 }, text: { fontSize: 12 } },
  medium: { container: { paddingVertical: 10, paddingHorizontal: 16 }, text: { fontSize: 14 } },
  large: { container: { paddingVertical: 14, paddingHorizontal: 20 }, text: { fontSize: 16 } },
};

export default function AppButton({ title, variant = 'primary', size = 'medium', onPress, disabled, loading, icon }: AppButtonProps) {
  const v = variantStyles[variant];
  const s = sizeStyles[size];
  return (
    <Pressable
      style={[styles.base, v.container, s.container, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={v.text.color as string} />
      ) : (
        <View style={styles.content}>
          {icon}
          <Text style={[styles.text, v.text, s.text]}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}

export function AppButtonDemo() {
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <AppButton title="Thêm vào giỏ hàng" variant="primary" onPress={() => {}} />
      <AppButton title="Xem chi tiết" variant="outline" onPress={() => {}} />
      <AppButton title="Xóa sách" variant="danger" size="small" onPress={() => {}} />
      <AppButton title="Đang xử lý" variant="primary" loading onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  content: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  text: { fontWeight: '600' },
  disabled: { opacity: 0.5 },
});
