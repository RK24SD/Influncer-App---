import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InfluencerListScreen from './src/screens/InfluencerListScreen';
import InfluencerDetailScreen from './src/screens/InfluencerDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#6C47FF' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: '600' },
            }}
          >
            <Stack.Screen
              name="InfluencerList"
              component={InfluencerListScreen}
              options={{ title: 'Influencers' }}
            />
            <Stack.Screen
              name="InfluencerDetail"
              component={InfluencerDetailScreen}
              options={{ title: 'Profile' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
