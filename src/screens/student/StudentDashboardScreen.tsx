import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StudentDashboardScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, John Doe</Text>
        <Text style={styles.subtitle}>Computer Science - Year 3</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>85%</Text>
          <Text style={styles.statLabel}>Attendance</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Absences</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Late</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Today's Classes</Text>
      <View style={styles.classesContainer}>
        {[
          { name: 'Mathematics', time: '09:00 AM', room: 'Room 101', status: 'upcoming' },
          { name: 'Physics', time: '11:00 AM', room: 'Room 203', status: 'ongoing' },
          { name: 'Computer Science', time: '02:00 PM', room: 'Lab 3', status: 'completed' },
        ].map((class_, index) => (
          <View key={index} style={styles.classCard}>
            <View style={styles.classInfo}>
              <Text style={styles.className}>{class_.name}</Text>
              <Text style={styles.classDetails}>
                {class_.time} • {class_.room}
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.attendButton,
                class_.status === 'completed' && styles.attendedButton,
                class_.status === 'upcoming' && styles.upcomingButton,
              ]}
            >
              <Text style={styles.attendButtonText}>
                {class_.status === 'completed' ? 'Attended' : 
                 class_.status === 'ongoing' ? 'Mark Present' : 'Upcoming'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4A90E2',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 10,
  },
  classesContainer: {
    padding: 15,
  },
  classCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  classInfo: {
    flex: 1,
  },
  className: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  classDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  attendButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  attendedButton: {
    backgroundColor: '#666',
  },
  upcomingButton: {
    backgroundColor: '#FFA726',
  },
  attendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default StudentDashboardScreen; 