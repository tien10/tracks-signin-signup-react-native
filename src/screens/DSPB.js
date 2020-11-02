import React, { useState } from "react";
import { FlatList, Picker, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Input, Text } from "react-native-elements";
import yelp from "../api/yelp";

const DSPB = (props) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const filterResultByPrice = (deP_ID) => {
    return results.filter((result) => {
      return result.deP_ID === deP_ID;
    });
  };
  const [list, setList] = useState();
  const listApi = async () => {
    try {
      const res = await yelp.post("/CM_DEPARTMENT_Search", {
        params: {},
      });
      console.log("res: ", res.data.result.items);
      setList(res.data.result.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Mã phòng ban</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>Tên phòng ban</Text>
      <Input />
      <Text>Nhóm phòng ban</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="-----Tất cả-----" value="tatCa" />
        <Picker.Item label="A - KHỐI NỘI" value="khoiNoi" />
      </Picker>
      <Text>Trạng thái duyệt</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="-----Tất cả-----" value="tatCa" />
        <Picker.Item label="Đã duyệt" value="daDuyet" />
        <Picker.Item label="Chưa duyệt" value="chuaDuyet" />
      </Picker>
      <Button title="Get list" onPress={listApi} />
      <FlatList
        data={list}
        keyExtractor={(item) => item.deP_ID}
        renderItem={({ item }) => {
          return <Text>{item.deP_NAME}</Text>;
        }}
      />
      <ScrollView>
        <ResultList
          results={filterResultByPrice("DEP000000000072")}
          title="Bit Pricier"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  coText: {},
  khongText: {},
  picker: {},
});

export default DSPB;
