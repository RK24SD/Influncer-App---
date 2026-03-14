import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { formatFollowers } from '../utils/format';

export default function InfluencerCard({ item, isFavorite, onToggleFavorite, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.location}>
          <Ionicons name="location-outline" size={12} color="#888" /> {item.location}
        </Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{formatFollowers(item.followers)}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: '#6C47FF' }]}>{item.engagement}%</Text>
            <Text style={styles.statLabel}>Engagement</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => onToggleFavorite(item.id)} style={styles.star}>
        <Ionicons
          name={isFavorite ? 'star' : 'star-outline'}
          size={22}
          color={isFavorite ? '#FFB800' : '#ccc'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 16,
    marginVertical: 7,
    padding: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  username: {
    fontSize: 12,
    color: '#6C47FF',
    marginBottom: 2,
  },
  location: {
    fontSize: 12,
    color: '#888',
    marginBottom: 6,
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
  },
  stat: {
    alignItems: 'flex-start',
  },
  statValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: 10,
    color: '#aaa',
  },
  star: {
    padding: 6,
  },
});
