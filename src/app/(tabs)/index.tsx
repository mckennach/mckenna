import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { useAtomValue } from 'jotai';
import { sessionAtom } from '@/lib/atoms/session.atoms';
// import { Session } from '@supabase/supabase-js'
import { supabase } from '@/config/supabase';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import Account from '@/components/Account/Account';
import { Redirect } from 'expo-router';

export default function TabOneScreen() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const session = useAtomValue(sessionAtom);
  
  console.log('HERE', JSON.stringify(session, null, 2));
  // if(!session) return <Redirect href="/auth" />;
  
  return <Account />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
