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
import QRCode from 'react-native-qrcode-svg';

const TeacherClassesScreen = () => {
  const [qrVisible, setQrVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    {
      id: '1',
      name: 'CS101',
      title: 'Introduction to Programming',
      students: 30,
      time: '09:00 AM - 10:30 AM',
      room: 'Room 101',
    },
    {
      id: '2',
      name: 'CS202',
      title: 'Data Structures',
      students: 25,
      time: '11:00 AM - 12:30 PM',
      room: 'Lab 2',
    },
    {
      id: '3',
      name: 'CS303',
      title: 'Database Systems',
      students: 35,
      time: '02:00 PM - 03:30 PM',
      room: 'Room 205',
    },
  ];

  const renderClassItem = ({ item }) => (
    <View style={styles.classCard}>
      <View style={styles.classInfo}>
        <Text style={styles.className}>{item.name}</Text>
        <Text style={styles.classTitle}>{item.title}</Text>
        <Text style={styles.classDetails}>
          {item.time} • {item.room}
        </Text>
        <Text style={styles.studentCount}>
          {item.students} students enrolled
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.qrButton}
        onPress={() => {
          setSelectedClass(item);
          setQrVisible(true);
        }}
      >
        <Ionicons name="qr-code-outline" size={24} color="#fff" />
        <Text style={styles.qrButtonText}>Generate QR</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={classes}
        renderItem={renderClassItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        visible={qrVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setQrVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedClass?.name} - Attendance QR Code
            </Text>
            <View style={styles.qrContainer}>
              {selectedClass && (
                <QRCode
                  value={JSON.stringify({
                    classId: selectedClass.id,
                    className: selectedClass.name,
                    timestamp: new Date().toISOString(),
                  })}
                  size={200}
                />
              )}
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setQrVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
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
  classCard: {
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
  classInfo: {
    marginBottom: 15,
  },
  className: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  classTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  classDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  studentCount: {
    fontSize: 14,
    color: '#4A90E2',
    marginTop: 5,
  },
  qrButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  qrButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TeacherClassesScreen; 