import React, { useState, useMemo } from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { useInfluencers } from '../hooks/useData';
import { useFavorites } from '../hooks/useFavorites';
import InfluencerCard from '../components/InfluencerCard';
import SearchBar from '../components/SearchBar';

export default function InfluencerListScreen({ navigation }) {
  const { influencers, loading, error } = useInfluencers();
  const { favorites, toggleFavorite } = useFavorites();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return influencers.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.location.toLowerCase().includes(q)
    );
  }, [influencers, query]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#6C47FF" />
        <Text style={styles.loadingText}>Loading influencers...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChangeText={setQuery} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InfluencerCard
            item={item}
            isFavorite={favorites.has(item.id)}
            onToggleFavorite={toggleFavorite}
            onPress={() => navigation.navigate('InfluencerDetail', { influencer: item })}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No influencers found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F2FF',
  },
  list: {
    paddingBottom: 24,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F2FF',
  },
  loadingText: {
    marginTop: 12,
    color: '#6C47FF',
    fontSize: 14,
  },
  errorText: {
    color: '#e53e3e',
    fontSize: 15,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#aaa',
    fontSize: 15,
  },
});
