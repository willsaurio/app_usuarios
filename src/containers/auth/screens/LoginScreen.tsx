import { StyleSheet, Text, View, Button as RNButton } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { Button, Input } from '@core'

export const LoginScreen = () => {
    const { top } = useSafeAreaInsets();

    return (
      <View style={[styles.container, { paddingTop: top + 100 }]}>
        <Text style={styles.title}> Login </Text>

        <view style={styles.inputContainer}>
          <Text>Email</Text>
          <Input value='' onChange={() => null} />
        </view>

        <view style={styles.inputContainer}>
          <Text>Password</Text>
          <Input value='' onChange={() => null} />
        </view>
        <view style={styles.buttonsContainer}>
        <Button title='Iniciar Sesión' onPress={() => null} />
            <RNButton title='Crear cuenta' onPress={() => null} />
            </view>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        gap: 24,
    },
    title: {
        fontSize: 24,
        fontFamily: 'PlaypenSans-Bold',
        textAlign: 'center',
        marginBottom: 90,
    },
    inputContainer: {
        backgroundColor: '#f5f5f5',
    },
    label: {
        fontSize: 16,
        fontFamily: 'PlaypenSans-Regular',
        marginBottom: 8,
    },
    buttonsContainer: {
        marginTop: 90,
        gap:24,

    }
})