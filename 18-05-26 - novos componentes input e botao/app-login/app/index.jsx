import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { useState } from "react";
import Logo from "../assets/logo.jpg";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Login() {
    console.log("Dados do login");
    console.log(email, senha);
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <StatusBar style="light" />

      <View style={estilos.card}>
        
        <Image
          source={Logo}
          resizeMode="cover"
          style={estilos.logo}
        />

        <Text style={estilos.titulo}>Login</Text>

        <Text style={estilos.sub}>
          Para prosseguir insira seus dados
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Digite seu email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={estilos.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={estilos.botao} onPress={Login}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#1E293B",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },

  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: "hidden",
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#3B82F6",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },

  sub: {
    fontSize: 15,
    color: "#CBD5E1",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#334155",
    borderRadius: 14,
    paddingHorizontal: 16,
    color: "#fff",
    marginBottom: 16,
    fontSize: 16,
  },

  botao: {
    width: "100%",
    height: 55,
    backgroundColor: "#3B82F6",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});