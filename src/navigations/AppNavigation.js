import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { IconButton } from "react-native-paper";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import OrderStatusScreen from "../screens/OrderStatus/OrderStatusScreen";
import AccountScreen from "../screens/AccountScreen/AccountScreen";
import ScanScreen from "../screens/ScanScreen/ScanScreen";
import ExternalApps from "../screens/ExternalAppsScreen/ExternalApps";
import DetailsScreen from "../screens/Details/DetailsScreen";
import CategoryTabs from "../screens/CategoryDetails/CategoryTabs";
import DiscoverScreen from "../screens/DiscoverScreen/DiscoverScreen";
import CategoryShopScreen from "../screens/CategoryDetails/CategoryShopScreen";
import CheckoutScreen from "../screens/CheckoutScreen/CheckoutScreen";
import HelpScreen from "../screens/HelpScreen/HelpScreen";
import ShoppingListScreen from "../screens/ShoppingListScreen/ShoppingListScreen";
import LandingScreenTabs from "../screens/LandingScreen/LandingScreenTabs";
import OrdersScreen from "../screens/OrderCustomization/OrdersScreen";
import NotificationScreen from "../screens/NotificationsScreen/NotificationScreen";
import BasketScreen from "../screens/Basket/BasketScreen";
import GroupDiscover from "../screens/Utils/GroupDisCover";
import Inventory from "../screens/Inventory";
import ProductForm from "../screens/Inventory/ProductForm";
import InventoryItem from "../screens/Inventory/InventoryItem";
import AllProductsScreen from "../screens/LandingScreen/AllProductsScreen";
import AllShopsScreen from "../screens/LandingScreen/AllShopsScreen";

const MainNavigator = createStackNavigator(
  {
    LandingScreen: LandingScreenTabs,
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Details: DetailsScreen,
    Categories: CategoryTabs,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    Basket: BasketScreen,
    Chat: ChatScreen,
    Order: OrderStatusScreen,
    Account: AccountScreen,
    Scan: ScanScreen,
    External: ExternalApps,
    Discover: DiscoverScreen,
    CategoryShop: CategoryShopScreen,
    Checkout: CheckoutScreen,
    Help: HelpScreen,
    ShoppingList: ShoppingListScreen,
    Orders: OrdersScreen,
    Notifications: NotificationScreen,
    Shared: GroupDiscover,
    Inventory: Inventory,
    ProductForm: ProductForm,
    InventoryItem: InventoryItem,
    AllProducts: AllProductsScreen,
    AllShops: AllShopsScreen,
  },
  {
    initialRouteName: "LandingScreen",
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerRight: () => (
        <IconButton
          icon="shopping"
          size={25}
          onPress={() => navigation.navigate("Basket")}
          style={{ marginRight: 9 }}
        />
      ),
    }),
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerPosition: "left",
    initialRouteName: "Main",
    drawerWidth: 250,
    contentComponent: DrawerContainer,
  }
);

export default AppContainer = createAppContainer(DrawerStack);
