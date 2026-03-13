import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CampaignPost({ post }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="megaphone-outline" size={16} color="#6C47FF" />
        <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
      </View>
      <Text style={styles.body} numberOfLines={3}>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F7F5FF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#6C47FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a1a1a',
    flex: 1,
    textTransform: 'capitalize',
  },
  body: {
    fontSize: 12,
    color: '#555',
    lineHeight: 18,
  },
});
