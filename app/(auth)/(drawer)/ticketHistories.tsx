import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, IconButton, Text } from "react-native-paper";

const Tickets = () => {
  const [items] = useState([
    {
      id: "1",
      thStatus: "waiting",
      processedAt: "null",
      completedAt: "null",
      canceledAt: "null",
      processingDuration: "null",
      handledBy: "null",
      ticketNumber: "001",
      ticketId: "2",
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
        TICKET HISTORIES
      </Text>
      <View style={styles.dataTableContainer}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Id</DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Ticket status
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Processed at
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Completed at
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Canceled at
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Processing duration
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Handled by
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Ticket number
            </DataTable.Title>
            <DataTable.Title style={{ justifyContent: "center" }}>
              Action
            </DataTable.Title>
          </DataTable.Header>
          {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{item.id}</DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.thStatus}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.processedAt}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.completedAt}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.canceledAt}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.processingDuration}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.handledBy}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.ticketNumber}
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
