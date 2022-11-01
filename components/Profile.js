import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Component} from "react";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";

class Profile extends Component {
  render() {
    const ProfileStack = createNativeStackNavigator();
    return (
      <ProfileStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Edit"
      >
        <ProfileStack.Screen name="Edit" component={EditProfile} />
        <ProfileStack.Screen name="ChangePassword" component={ChangePassword} />
      </ProfileStack.Navigator>
    );
  }
}

export default Profile;
