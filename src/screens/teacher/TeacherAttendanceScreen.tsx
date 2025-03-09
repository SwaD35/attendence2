import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TeacherAttendanceScreen = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  const attendanceData = [
    {
      id: '1',
      class: 'CS101',
      date: '2024-03-09',
      total: 30,
      present: 27,
      absent: 3,
      students: [
        { id: '1', name: 'John Doe', status: 'present' },
        { id: '2', name: 'Jane Smith', status: 'absent' },
        { id: '3', name: 'Bob Johnson', status: 'present' },
      ]
    },
    {
      id: '2',
      class: 'CS202',
      date: '2024-03-09',
      total: 25,
      present: 22,
      absent: 3,
      students: [
        { id: '1', name: 'Alice Brown', status: 'present' },
        { id: '2', name: 'Charlie Davis', status: 'present' },
        { id: '3', name: 'Eva Wilson', status: 'absent' },
      ]
    },
  ];

  const renderAttendanceItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.attendanceCard}
      onPress={() => {
        setSelectedClass(item);
        setDetailsVisible(true);
      }}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.className}>{item.class}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{item.total}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statNumber, { color: '#4CAF50' }]}>{item.present}</Text>
          <Text style={styles.statLabel}>Present</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statNumber, { color: '#F44336' }]}>{item.absent}</Text>
          <Text style={styles.statLabel}>Absent</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderStudentItem = ({ item }) => (
    <View style={styles.studentRow}>
      <Text style={styles.studentName}>{item.name}</Text>
      <View style={[
        styles.statusBadge,
        { backgroundColor: item.status === 'present' ? '#4CAF50' : '#F44336' }
      ]}>
        <Text style={styles.statusText}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={attendanceData}
        renderItem={renderAttendanceItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        visible={detailsVisible}
        animationType="slide"
        onRequestClose={() => setDetailsVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setDetailsVisible(false)}
            >
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>
              {selectedClass?.class} - Attendance Details
            </Text>
            <Text style={styles.modalDate}>{selectedClass?.date}</Text>
          </View>

          <FlatList
            data={selectedClass?.students}
            renderItem={renderStudentItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.studentList}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 15,
  },
  attendanceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  className: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  statLabel: {
    color: '#666',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  modalHeader: {
    backgroundColor: '#4A90E2',
    padding: 20,
    paddingTop: 40,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalDate: {
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
  },
  studentList: {
    padding: 15,
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '500',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TeacherAttendanceScreen; 