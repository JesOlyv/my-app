import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    // Implementar lógica de autenticação aqui
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    // Implementar lógica de registro aqui
    console.log('Registering username:', username);
    console.log('Registering password:', password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {isRegistering ? (
        <Button title="Enviar" onPress={handleRegister} />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
      <Text style={styles.textLink} onPress={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? ' Voltar' : 'Cadastre-se!'}
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#38a69d',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: 'white',
  },
  textLink: {
    marginTop: 12,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;