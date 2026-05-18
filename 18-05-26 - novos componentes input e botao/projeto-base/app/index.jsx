import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from './components/Header'
import tarefas from './dados/tarefas';



function ItemTarefa({item}){
  return(
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto}/>
      <Text style={estilos.titulo}>{item.title}</Text>
      <Text style={estilos.status}>{item.status}</Text>
      <Text style={estilos.desc}>{item.description}</Text>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo='sesi produtividade'/>
      <FlatList
      data={tarefas}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <ItemTarefa item={item}/>}
      />
    </SafeAreaView>
  );
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },

  lista: {
    padding: 16,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 18,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,

    elevation: 5,
  },

  foto: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },

  info: {
    padding: 16,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
    textTransform: 'capitalize',
  },

  statusBox: {
    backgroundColor: '#dbeafe',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 30,
    marginBottom: 12,
  },

  status: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '700',
  },

  desc: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },
});