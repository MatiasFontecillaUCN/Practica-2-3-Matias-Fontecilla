import agent from "./agent";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  List,
  ProgressBar,
  MD3Colors,
  DataTable,
} from "react-native-paper";
import Programacion from "../assets/programacion.jpg";
import Libros from "../assets/libro.png";
import Anime from "../assets/anime.png";
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    alignItems: "center",
    gap: 20,
  },
  widtFull: {
    width: "100%",
  },
  img: {
    width: 300,
    height: 350,
  },
  pBar: {
    marginTop: 20,
  },
});
const images = {
  Programacion,
  Libros,
  Anime,
};
function chooseImg(img_name) {
  return images[img_name];
}

export default function Profile() {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    agent.EndPoints.profile()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView
      style={[style.widthFull]}
      automaticallyAdjustKeyboardInsets={true}
    >
      <SafeAreaView style={style.container}>
        {data ? (
          <>
            <Card>
              <Card.Title title={data.user.name} />
              <Card.Content>
                <Text variant="bodyMedium">{data.user.summary}</Text>
              </Card.Content>
              <Card.Cover source={require("../assets/download.png")} />
              <Card.Content>
                <List.Section style={style.widtFull}>
                  <List.Accordion
                    title="Datos"
                    left={(props) => <List.Icon {...props} icon="equal" />}
                  >
                    <List.Item title={"Edad: " + data.user.age} />
                    <List.Item
                      title={"Ciudad de origen: " + data.user.birth_place}
                    />
                    <List.Item title={"Correo electronico: "} />
                    <List.Item title={data.user.email} />
                  </List.Accordion>
                </List.Section>
              </Card.Content>
            </Card>
            {data.interests.map((interest) => {
              return (
                <Card key={interest.id} style={style.widtFull}>
                  <Card.Title title={interest.interest} />
                  <Card.Cover source={chooseImg(interest.interest)} />
                </Card>
              );
            })}
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Framework</DataTable.Title>
                <DataTable.Title>Manejo</DataTable.Title>
              </DataTable.Header>
              {data.frameworks.map((framework) => {
                return (
                  <DataTable.Row key={framework.id}>
                    <DataTable.Cell>{framework.framework}</DataTable.Cell>
                    <DataTable.Cell>
                      <ProgressBar
                        style={style.pBar}
                        progress={framework.handle / 100}
                        color={MD3Colors.error50}
                      />
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })}
            </DataTable>
          </>
        ) : (
          <Text variant="displayMedium">"Cargando..."</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}
