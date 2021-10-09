import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import DescribtionScreen from "../screens/Description/DescribtionScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
import SignInScreen from "../screens/SignIn/SignIn";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import SignUpScreen from "../screens/SignIn/SignUp";
import OrderScreen from "../screens/Order/OrderScreen";
import EndScreen from "../screens/End/EndScreen";
import PaymentScreen from "../screens/Payment/Payment";
import CardPaymentScreen from "../screens/Payment/CardPayment";



// const image = { uri: "http://gsmcloud.xyz/favicon.png" };
const MainNavigator = createStackNavigator(
  {
    CardPaymentScreen: CardPaymentScreen,
    PaymentScreen: PaymentScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    Welcome: WelcomeScreen,
    Home: HomeScreen,
    Order: OrderScreen,
    End: EndScreen,
    Categories: CategoriesScreen,
    Describtion: DescribtionScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
  },
  {
    initialRouteName: "Welcome",
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
    }),
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerPosition:"left",
    initialRouteName: "Main",
    drawerWidth: 200,
    contentComponent: DrawerContainer,
  }
);

export default AppContainer = createAppContainer(DrawerStack);