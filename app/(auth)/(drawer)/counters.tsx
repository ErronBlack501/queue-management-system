import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, IconButton, MD3Colors, Text } from "react-native-paper";

const Counters = () => {
  const [items] = useState([
    {
      id: "1",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "2",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "3",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "4",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "5",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "6",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "7",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "8",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "9",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "10",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "11",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "12",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "13",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "14",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
    {
      id: "15",
      counterNumber: "001",
      counterStatus: "open",
      serviceName: "TYTFUY",
      serviceId: 2,
    },
  ]);

  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([2, 4, 6, 8, 10, 12]);
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
      <IconButton
        icon="plus"
        style={{ borderWidth: 1, alignSelf: "center" }}
        size={20}
        onPress={() => console.log("Pressed")}
      />
      <Text variant="titleLarge" style={{ textAlign: "center" }}>
        LIST OF COUNTERS
      </Text>
      <View style={styles.dataTableContainer}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Id</DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Counter number
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Counter status
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Service name
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Actions
            </DataTable.Title>
          </DataTable.Header>
          {items.slice(from, to).map((item) => (
            <DataTable.Row
              onPress={() => console.log("Row pressed.")}
              key={item.id}
            >
              <DataTable.Cell>{item.id}</DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.counterNumber}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.counterStatus}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.serviceName}
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
          ))}

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
    paddingTop: 1,
  },
  dataTableContainer: {
    marginHorizontal: 8,
    marginTop: 1,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Counters;
