import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { DataTable, IconButton, MD3Colors, Text } from "react-native-paper";

const Service = () => {
  const [items] = useState([
    {
      id: "1",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
    },
    {
      id: "2",
      serviceName: "OIO",
      serviceDescription: 356,
      estimatedDuration: "1h",
    },
    {
      id: "3",
      serviceName: "OJUGY",
      serviceDescription: 356,
      estimatedDuration: "30mins",
    },
    {
      id: "4",
      serviceName: "PIOHy",
      serviceDescription: 356,
      estimatedDuration: "null",
    },
    {
      id: "5",
      serviceName: "PIOHy",
      serviceDescription: 356,
      estimatedDuration: "null",
    },
    {
      id: "6",
      serviceName: "PIOHy",
      serviceDescription: 356,
      estimatedDuration: "null",
    },
    {
      id: "7",
      serviceName: "PIOHy",
      serviceDescription: 356,
      estimatedDuration: "null",
    },
    {
      id: "8",
      serviceName: "PIOHy",
      serviceDescription: 356,
      estimatedDuration: "null",
    },
    {
      id: "9",
      serviceName: "PIOHy",
      serviceDescription: 356,
      estimatedDuration: "null",
    },
    {
      id: "10",
      serviceName: "PIOHy",
      serviceDescription: 356,
      estimatedDuration: "null",
    },
  ]);

  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([2, 4, 6, 8, 10]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>
      <View style={styles.dataTableContainer}>
        <View>
          <IconButton
            icon="plus"
            style={{ borderWidth: 1, alignSelf: "center" }}
            size={20}
            onPress={() => console.log("Pressed")}
          />
          <Text
            variant="titleLarge"
            style={{ textAlign: "center", marginTop: 7 }}
          >
            LIST OF SERVICE
          </Text>
        </View>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Id</DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Service name
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Service description
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Estimated duration
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Actions
            </DataTable.Title>
          </DataTable.Header>
          <FlatList
            data={items.slice(from, to)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DataTable.Row
                onPress={() => console.log("Row pressed.")}
                key={item.id}
              >
                <DataTable.Cell>{item.id}</DataTable.Cell>
                <DataTable.Cell style={{ justifyContent: "center" }}>
                  {item.serviceName}
                </DataTable.Cell>
                <DataTable.Cell style={{ justifyContent: "center" }}>
                  {item.serviceDescription}
                </DataTable.Cell>
                <DataTable.Cell style={{ justifyContent: "center" }}>
                  {item.estimatedDuration}
                </DataTable.Cell>
                <DataTable.Cell style={{ justifyContent: "center" }}>
                  <IconButton
                    icon="pencil"
                    iconColor="#1E90FF"
                    size={20}
                    onPress={() => console.log("Pressed")}
                  />
                  <IconButton
                    icon="eye"
                    iconColor="#32CD32"
                    size={20}
                    onPress={() => console.log("Pressed")}
                  />
                  <IconButton
                    icon="delete"
                    iconColor={MD3Colors.error50}
                    size={20}
                    onPress={() => console.log("Pressed")}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            )}
          />

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${items.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={"Rows per page"}
          />
        </DataTable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  dataTableContainer: {
    marginHorizontal: 8,
    marginTop: 1,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Service;
