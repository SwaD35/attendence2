import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [userType, setUserType] = useState('student'); // 'student' or 'teacher'
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    if (id && password) {
      if (userType === 'student') {
        navigation.replace('StudentMain');
      } else {
        navigation.replace('TeacherMain');
      }
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.title}>AttendX</Text>
        <Text style={styles.subtitle}>Attendance Management System</Text>
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity 
          style={[
            styles.toggleButton,
            userType === 'student' && styles.toggleButtonActive
          ]}
          onPress={() => setUserType('student')}
        >
          <Text style={[
            styles.toggleText,
            userType === 'student' && styles.toggleTextActive
          ]}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.toggleButton,
            userType === 'teacher' && styles.toggleButtonActive
          ]}
          onPress={() => setUserType('teacher')}
        >
          <Text style={[
            styles.toggleText,
            userType === 'teacher' && styles.toggleTextActive
          ]}>Teacher</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder={userType === 'student' ? "Student ID" : "Teacher ID"}
          value={id}
          onChangeText={setId}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 50,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  toggleButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#4A90E2',
  },
  toggleText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  toggleTextActive: {
    color: '#fff',
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen; 