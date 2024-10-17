import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, IconButton, MD3Colors, Text } from "react-native-paper";

const Tickets = () => {
  const [items] = useState([
    {
      id: "1",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "2",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "3",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "4",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "5",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "6",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "7",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "8",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "9",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "10",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "11",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "12",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "13",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
    },
    {
      id: "14",
      ticketNumber: "001",
      ticketStatus: "open",
      counterNumber: "001",
      counterId: "2",
      serviceName: "izefzife",
      serviceId: "2",
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
        LIST OF TICKETS
      </Text>
      <View style={styles.dataTableContainer}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Id</DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Ticket number
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Ticket status
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Service name
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Counter number
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Action
            </DataTable.Title>
          </DataTable.Header>
          {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{item.id}</DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.ticketNumber}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.ticketStatus}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.serviceName}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.counterNumber}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                <IconButton
                  icon="eye"
                  iconColor="#32CD32"
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

export default Tickets;
