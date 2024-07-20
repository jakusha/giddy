import React, { useEffect } from 'react';
import {useFonts} from 'expo-font'
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen'
import RootNavigation from './src/navigation';

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [loaded, error] = useFonts({
    'Cabin-Bold': require('./src/assets/fonts/Cabin-Bold.otf'),
    'Cabin-Medium': require('./src/assets/fonts/Cabin-Medium.otf'),
    'Cabin-Regular': require('./src/assets/fonts/Cabin-Regular.otf'),
    'Cabin-SemiBold': require('./src/assets/fonts/Cabin-SemiBold.otf'),
  })

  useEffect(()=> {
    if(loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if(!loaded && !error) {
    return null
  }

  return (
      <RootNavigation />
  );
}