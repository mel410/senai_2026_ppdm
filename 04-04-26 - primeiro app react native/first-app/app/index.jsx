import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Foto from "../assets/images/Fotoflor.jpg";

export default function App() {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      
      <Text style={estilos.titulo}>Meu primeiro app</Text>

      <View style={estilos.card}>
        <Image source={Foto} style={estilos.imagem} />
      
        <Text style={estilos.descricao}>
          Primeiro aplicativo feito com React Native.
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que aprenderei:</Text>

        <Text style={estilos.item}>• Push Notification</Text>
        <Text style={estilos.item}>• Acesso aos recursos nativos</Text>
        <Text style={estilos.item}>• Acesso a APIs externas</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que vou precisar:</Text>

        <Text style={estilos.item}>• Node.js</Text>
        <Text style={estilos.item}>• VS Code</Text>
        <Text style={estilos.item}>• Emulador ou celular</Text>
        <Text style={estilos.item}>• Ser um(a) bom(boa) aluno(a)</Text>
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#c67deb',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    width: '100%',
    maxWidth: 350,
  },

  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },

  descricao: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginBottom: 10,
  },

  item: {
    fontSize: 15,
    color: '#444',
    marginBottom: 5,
    lineHeight: 20,
  }
});