import { useEffect, useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import {
  DataTable,
  IconButton,
  MD3Colors,
  Menu,
  Portal,
  Text,
} from "react-native-paper";

type Service = {
  id: string;
  serviceName: string;
  serviceDescription: string;
  estimatedDuration: string;
  isActive: boolean;
};

const Service = () => {
  const [items] = useState([
    {
      id: "1",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "2",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "3",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "4",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "5",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "6",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "7",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "8",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "9",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "10",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "11",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
    {
      id: "12",
      serviceName: "TYTFUY",
      serviceDescription: "uiyfizaygfvyuvcezf",
      estimatedDuration: "10s",
      isActive: true,
    },
  ]);
  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);
  const openMenu = (id: string) => setVisibleMenu(id);
  const closeMenu = () => setVisibleMenu(null);
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
        LIST OF SERVICES
      </Text>
      <View style={styles.dataTableContainer}>
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
              Is active ?
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
                {item.serviceName}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.serviceDescription}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.estimatedDuration}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                {item.isActive ? "true" : "false"}
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: "center" }}>
                <Menu
                  visible={visibleMenu === item.id}
                  onDismiss={closeMenu}
                  anchor={
                    <IconButton
                      icon="dots-horizontal"
                      onPress={() => openMenu(item.id)}
                    />
                  }
                >
                  <View style={{ flex: 1 }}>
                    <Menu.Item
                      leadingIcon="pencil"
                      title="Edit"
                      onPress={() => console.log("Vokitika")}
                    />
                    <Menu.Item leadingIcon="eye" title="Details" />
                    <Menu.Item leadingIcon="delete" title="Delete" />
                  </View>
                </Menu>
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
  modalContainer: {
    backgroundColor: "red",
    padding: 20,
  },
  dataTableContainer: {
    marginHorizontal: 8,
    marginTop: 1,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Service;
