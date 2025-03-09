import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Import Auth Screen
import LoginScreen from './src/screens/auth/LoginScreen';

// Import Student Screens
import StudentDashboardScreen from './src/screens/student/StudentDashboardScreen';
import StudentAttendanceScreen from './src/screens/student/StudentAttendanceScreen';
import StudentProfileScreen from './src/screens/student/StudentProfileScreen';

// Import Teacher Screens
import TeacherDashboardScreen from './src/screens/teacher/TeacherDashboardScreen';
import TeacherClassesScreen from './src/screens/teacher/TeacherClassesScreen';
import TeacherAttendanceScreen from './src/screens/teacher/TeacherAttendanceScreen';
import TeacherProfileScreen from './src/screens/teacher/TeacherProfileScreen';

const Stack = createStackNavigator();
const StudentTab = createBottomTabNavigator();
const TeacherTab = createBottomTabNavigator();

// Student Tab Navigator
function StudentTabNavigator() {
  return (
    <StudentTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Dashboard':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Attendance':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#4A90E2',
        },
        headerTintColor: '#fff',
      })}
    >
      <StudentTab.Screen 
        name="Dashboard" 
        component={StudentDashboardScreen}
        options={{ title: 'Student Dashboard' }}
      />
      <StudentTab.Screen 
        name="Attendance" 
        component={StudentAttendanceScreen}
        options={{ title: 'My Attendance' }}
      />
      <StudentTab.Screen 
        name="Profile" 
        component={StudentProfileScreen}
        options={{ title: 'My Profile' }}
      />
    </StudentTab.Navigator>
  );
}

// Teacher Tab Navigator
function TeacherTabNavigator() {
  return (
    <TeacherTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Dashboard':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Classes':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'Attendance':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#4A90E2',
        },
        headerTintColor: '#fff',
      })}
    >
      <TeacherTab.Screen 
        name="Dashboard" 
        component={TeacherDashboardScreen}
        options={{ title: 'Teacher Dashboard' }}
      />
      <TeacherTab.Screen 
        name="Classes" 
        component={TeacherClassesScreen}
        options={{ title: 'My Classes' }}
      />
      <TeacherTab.Screen 
        name="Attendance" 
        component={TeacherAttendanceScreen}
        options={{ title: 'Attendance Records' }}
      />
      <TeacherTab.Screen 
        name="Profile" 
        component={TeacherProfileScreen}
        options={{ title: 'My Profile' }}
      />
    </TeacherTab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#fff' },
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
          />
          <Stack.Screen 
            name="StudentMain" 
            component={StudentTabNavigator} 
          />
          <Stack.Screen 
            name="TeacherMain" 
            component={TeacherTabNavigator} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
