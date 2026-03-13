# Influncer-App---
A React Native mobile app built with Expo that simulates an influencer marketing platform.
# Influencer Marketing App

A React Native mobile app built with **Expo** that simulates an influencer marketing platform.

## Features

- Browse 20 influencers fetched from [randomuser.me](https://randomuser.me)
- Search by name or location in real-time
- Star/favorite influencers (persisted with AsyncStorage)
- View detailed influencer profiles with stats
- Recent campaign posts from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

## Tech Stack

| Tool | Purpose |
|------|---------|
| Expo (SDK 51) | Zero-config React Native setup |
| React Navigation (Stack) | Screen navigation |
| @expo/vector-icons | Ionicons for UI icons |
| AsyncStorage | Favorites persistence |

## Project Structure

```
InfluencerApp/
├── App.js                        # Navigation setup
├── src/
│   ├── screens/
│   │   ├── InfluencerListScreen.js   # Browse + search + favorites
│   │   └── InfluencerDetailScreen.js # Profile + campaigns
│   ├── components/
│   │   ├── InfluencerCard.js         # List card
│   │   ├── CampaignPost.js           # Campaign post item
│   │   └── SearchBar.js              # Search input
│   ├── hooks/
│   │   ├── useData.js                # API fetching hooks
│   │   └── useFavorites.js           # Favorites state + persistence
│   └── utils/
│       └── format.js                 # Number formatting helpers
```

## Setup & Run

### Prerequisites
- Node.js 18+
- Expo Go app on your phone (iOS or Android)

### Steps

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd InfluencerApp

# 2. Install dependencies
npm install

# 3. Start the dev server
npx expo start

# 4. Scan the QR code with Expo Go (Android) or Camera app (iOS)
```

### Run on emulator

```bash
npx expo start --android   # Android emulator
npx expo start --ios       # iOS simulator (macOS only)
```

## APIs Used

- **Influencer Data**: `https://randomuser.me/api/?results=20`
  - Fields: profile image, name, email, city, country
  - Generated: followers count, engagement rate

- **Campaign Posts**: `https://jsonplaceholder.typicode.com/posts?userId={id}`
  - Displays 5 most recent posts per influencer
