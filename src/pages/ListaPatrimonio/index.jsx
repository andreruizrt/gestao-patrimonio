import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback
} from 'react-native';

import { Patrimonio } from '../../service/Api/Patrimonio';

import { colors } from '../../globals';
import styles from './style';

const ListaPatrimonio = ({ navigation }) => {
  const renderItem = ({ item }) => <Item title={item.nome_patrimonio} id={item.id} />;
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);

  const Item = ({ title, id }) => (
    <TouchableWithoutFeedback onPress={() => actionOnRow(id)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>

  );
  const actionOnRow = (id) => {
    navigation.navigate('CadastrarPatrimonio', {
      postId: id
    });
  }

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await Patrimonio.index();
      setData(response.data);
      setLoading(false)
    }
    fetchMyAPI();

  }, []);

  return loading ?
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size='large' color={colors.secundary} />
    </View>
    :
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>

};

export default ListaPatrimonio;
