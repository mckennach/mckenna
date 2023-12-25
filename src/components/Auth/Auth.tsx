import React, { useState } from 'react'
import { useAtom } from 'jotai';
import { sessionAtom } from '@/lib/atoms/session.atoms';

import { Alert, StyleSheet, View } from 'react-native'
import { supabase } from '@/config/supabase'

import { Button, Input } from 'react-native-elements'
import { buttonStyles } from '@/constants/Styles'
import type { Session } from '@supabase/supabase-js';

export default function Auth() {
  const [session, setSession] = useAtom(sessionAtom);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
  
    if (error) Alert.alert(error.message);

    const { data: { session: newSession } } = await supabase.auth.getSession();

    if(newSession) setSession(newSession);
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  console.log('session', JSON.stringify(session, null, 2));

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          style={styles.input}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
          style={styles.input}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} buttonStyle={buttonStyles.buttonPrimary} titleStyle={buttonStyles.buttonTextPrimary} />
      </View>
      <View style={styles.verticallySpaced}>
        <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} buttonStyle={buttonStyles.buttonSecondary} titleStyle={buttonStyles.buttonText} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    flex: 1,
    height: '100%',
    alignContent: 'center',
  },
  input: {
    color: 'white',
  },
  verticallySpaced: {
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})