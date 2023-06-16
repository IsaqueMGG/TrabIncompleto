import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>APP ZAQUE</Text>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='Senha'/>
      <TouchableOpacity>
      <Text style={styles.botao}>
        Entrar
      </Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.link}>
        Recuperar senha 
      </Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.link}>
        Criar conta
      </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 26,
    fontWeight: 'bold',
  },
  TextInput:{
    color: '#fff'
  },
  botao:{
    fontSize: 20,
    backgroundColor: "#00ff7f",
    width: 100,
    marginBottom: 15,
    marginLeft: 14 
  },
  link:{

  }
});
