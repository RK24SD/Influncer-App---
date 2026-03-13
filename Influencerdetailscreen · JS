import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { usePosts } from '../hooks/useData';
import { formatFollowers } from '../utils/format';
import CampaignPost from '../components/CampaignPost';

export default function InfluencerDetailScreen({ route }) {
  const { influencer } = route.params;
  const { posts, loading } = usePosts(influencer.postUserId);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero */}
      <View style={styles.hero}>
        <Image source={{ uri: influencer.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{influencer.name}</Text>
        <Text style={styles.username}>{influencer.username}</Text>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={14} color="#ccc" />
          <Text style={styles.locationText}>{influencer.location}</Text>
        </View>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{formatFollowers(influencer.followers)}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statBox}>
          <Text style={[styles.statValue, { color: '#6C47FF' }]}>{influencer.engagement}%</Text>
          <Text style={styles.statLabel}>Engagement</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{posts.length}</Text>
          <Text style={styles.statLabel}>Campaigns</Text>
        </View>
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <View style={styles.contactRow}>
          <Ionicons name="mail-outline" size={16} color="#6C47FF" />
          <Text style={styles.contactText}>{influencer.email}</Text>
        </View>
      </View>

      {/* Campaigns */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Campaigns</Text>
        {loading ? (
          <ActivityIndicator color="#6C47FF" style={{ marginTop: 16 }} />
        ) : (
          posts.map((post) => <CampaignPost key={post.id} post={post} />)
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F2FF',
  },
  hero: {
    backgroundColor: '#6C47FF',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 28,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#ddd',
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
  },
  username: {
    fontSize: 14,
    color: '#D6CCFF',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 13,
    color: '#ccc',
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: -16,
    borderRadius: 14,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 2,
  },
  divider: {
    width: 1,
    backgroundColor: '#eee',
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 14,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#555',
  },
});
