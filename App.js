import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./src/constants";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileSreen from "./src/screens/ProfileSreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import ProductsProvider from "./src/providers/productsProvider";
import CategoryProductsScreen from "./src/screens/CategoryProducts";
import AppProvider from "./src/providers/AppProvider";
import { COLORS } from "./src/theme/theme";
import RNLogo from "./src/components/RNLogo";
import Button from "./src/components/button/button";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <ProductsProvider>
        <NavigationContainer>
          <Navigator
            initialRouteName={screens.home}
            // options shared accross all screens here
            screenOptions={{
              headerStyle: {
                backgroundColor: COLORS.brand,
              },
              headerTitleStyle: {
                color: COLORS.white,
              },

              // custom component as title
              headerTitle: (props) => <RNLogo {...props} />,
              headerRight: () => (
                <Button title="Alert" onPress={() => alert("Clicked")} />
              ),
            }}
          >
            <Screen
              name={screens.home}
              component={HomeScreen}
              options={{
                title: "Accueil",
                // headerStyle: {},
                // headerTitleStyle: {},
              }}
            />
            <Screen
              name={screens.profile}
              component={ProfileSreen}
              // when navigation to this screen, we pass title as params
              // navigation.navigate(screens.profile, { title: "Mon Profile" })
              // below is how we access it
              options={({ route }) => ({ title: route.params.title })}
            />
            <Screen
              name={screens.productDetail}
              component={ProductDetailScreen}
              options={{
                title: "Produit",
              }}
            />
            <Screen
              name={screens.categoryProducts}
              component={CategoryProductsScreen}
              options={{
                title: "Categorie",
              }}
            />
          </Navigator>
        </NavigationContainer>
      </ProductsProvider>
    </AppProvider>
  );
}

// NAVIGATION DETAILS:
// EXAMPLE MOVE FROM DETAIL SCREEN TO DETAIL SCREEN WITH NEW DATA(params) navigation.push()
