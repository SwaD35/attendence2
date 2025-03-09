# Attendance App (React Native)

## Overview
The **Attendance App** is a React Native-based mobile application designed to streamline attendance tracking using QR code scanning and GPS-based location verification. It ensures secure and accurate check-ins for employees, students, or team members.

## Features
- **QR Code Attendance**: Users scan a QR code to mark attendance.
- **Location-Based Attendance**: Attendance can only be marked within a predefined geofenced area.
- **User Authentication**: Secure login and registration.
- **Admin Dashboard**: View attendance records, manage users, and generate reports.
- **Offline Mode**: Allows attendance marking even when the device is offline, syncing data when reconnected.
- **Push Notifications**: Reminds users to check in/out at scheduled times.
- **Export Reports**: Download attendance data in CSV or PDF format.

## Tech Stack
- **Frontend**: React Native (Expo/CLI), React Navigation
- **Backend**: Node.js with Express.js
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth / JWT Authentication
- **QR Code**: react-native-qrcode-scanner, react-native-camera
- **Location Services**: react-native-geolocation-service

## Installation
### Prerequisites
- Node.js (Latest LTS version)
- React Native CLI or Expo CLI
- Android Studio / Xcode (for emulation)

### Steps to Set Up
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/attendance-app.git
   cd attendance-app
   ```
2. Install dependencies:
   ```bash
   npm install   # or yarn install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add Supabase API URL and Anon Key

4. Start the app:
   ```bash
   npm start   # For Expo
   react-native run-android   # For Android
   react-native run-ios   # For iOS
   ```

## Usage
1. **Login/Register**: Users authenticate via Supabase Auth.
2. **Scan QR Code**: Open the app, navigate to the QR Scanner, and scan the provided QR code.
3. **Location Validation**: The app checks if the user is within the permitted geofenced area.
4. **Attendance Confirmation**: If the QR code is valid and the location is verified, the app marks attendance and updates the Supabase database.

## API Endpoints
### User Authentication
- `POST /register` - Register a new user via Supabase
- `POST /login` - Authenticate user and return JWT token

### Attendance Management
- `POST /attendance/check-in` - Mark attendance with QR and GPS
- `GET /attendance/history` - Fetch attendance records
- `POST /attendance/check-out` - Mark check-out time

## Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes and push to the branch.
4. Submit a pull request for review.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For support or inquiries, contact [your-email@example.com](mailto:your-email@example.com).

