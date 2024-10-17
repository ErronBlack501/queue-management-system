import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Drawer } from "expo-router/drawer";

export default function TabLayout() {
  return (
    <Drawer
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Dashboard",
          drawerIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="service"
        options={{
          title: "Services",
          drawerIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="counters"
        options={{
          title: "Counters",
          drawerIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="tickets"
        options={{
          title: "Tickets",
          drawerIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ticketHistories"
        options={{
          title: "Tickets histories",
          drawerIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
