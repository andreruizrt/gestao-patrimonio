import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableWithoutFeedback } from 'react-native';
import { Patrimonio } from '../../service/Api/Patrimonio';


const ListaPatrimonio = ({ navigation }) => {
  const renderItem = ({ item }) => <Item title={item.nome_patrimonio} id={item.id} />;
  const [data, setData] = useState([]);
  const Item = ({ title,id}) => (
    <TouchableWithoutFeedback onPress={ () => actionOnRow(id)}>
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableWithoutFeedback>

);
const actionOnRow = (id)=>{
    console.log("valor"+id)
    navigation.navigate('AtualizarPatrimonio',{
        postId: id
    });
}
  
  useEffect( () => {
    async function fetchMyAPI() {
        const response = await Patrimonio.index();
        console.log(response.data);
        setData(response.data);
    }
    fetchMyAPI();

}, []);

useEffect(() => {

}, data);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListaPatrimonio;
