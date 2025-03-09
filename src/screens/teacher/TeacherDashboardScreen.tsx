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

const TeacherDashboardScreen = ({ navigation }) => {
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
        <Text style={styles.greeting}>Welcome, Prof. Smith</Text>
        <Text style={styles.subtitle}>Computer Science Department</Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="qr-code-outline" size={24} color="#4A90E2" />
          <Text style={styles.actionText}>Generate QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="people-outline" size={24} color="#4A90E2" />
          <Text style={styles.actionText}>View Class</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="stats-chart-outline" size={24} color="#4A90E2" />
          <Text style={styles.actionText}>Reports</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statLabel}>Total Students</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>89%</Text>
          <Text style={styles.statLabel}>Avg. Attendance</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Today's Schedule</Text>
      <View style={styles.scheduleContainer}>
        {[
          { class: 'CS101', time: '09:00 AM', room: 'Room 101', students: 30, status: 'completed' },
          { class: 'CS202', time: '11:00 AM', room: 'Lab 2', students: 25, status: 'ongoing' },
          { class: 'CS303', time: '02:00 PM', room: 'Room 205', students: 35, status: 'upcoming' },
        ].map((session, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.scheduleCard}
            onPress={() => navigation.navigate('Classes')}
          >
            <View style={styles.scheduleInfo}>
              <Text style={styles.className}>{session.class}</Text>
              <Text style={styles.classDetails}>
                {session.time} • {session.room}
              </Text>
              <Text style={styles.studentCount}>
                {session.students} students enrolled
              </Text>
            </View>
            <View style={[
              styles.statusBadge,
              session.status === 'completed' ? styles.completedBadge :
              session.status === 'ongoing' ? styles.ongoingBadge :
              styles.upcomingBadge
            ]}>
              <Text style={styles.statusText}>
                {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
              </Text>
            </View>
          </TouchableOpacity>
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
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    color: '#4A90E2',
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
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
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
  scheduleContainer: {
    padding: 15,
  },
  scheduleCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleInfo: {
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
  studentCount: {
    fontSize: 12,
    color: '#4A90E2',
    marginTop: 5,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  completedBadge: {
    backgroundColor: '#4CAF50',
  },
  ongoingBadge: {
    backgroundColor: '#FFA726',
  },
  upcomingBadge: {
    backgroundColor: '#666',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default TeacherDashboardScreen; 