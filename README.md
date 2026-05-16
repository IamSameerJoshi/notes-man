# Notes Man 📝

**Notes Man** is a privacy-first, high-fidelity note-taking application designed for total data sovereignty. It ensures that personal thoughts, passwords, and sensitive information **remain exclusively on your device**, shielded from cloud-based surveillance and third-party access.

---

## 🛡️ Privacy First Architecture

- **100% Offline**: The application operates without external servers. All data is stored in the device's secure internal storage.
- **No Cloud Synchronization**: Your data is never transmitted over the internet. There is zero tracking, syncing, or data collection.
- **Data Ownership**: You maintain complete control over your database. A built-in Export feature allows for manual backups to your preferred secure location.

---

## 🌟 Key Features

### 🔐 Dual-Layer Security
Manage information across two distinct security environments:
- **Regular Mode**: For quick, non-sensitive notes and task management.
- **Vault Mode**: A hardened environment protected by **AES-256 encryption**. Data is encrypted locally and remains inaccessible without the user-defined password.

### 📌 Pinned Notes
Maintain focus by anchoring essential information. Notes in either section can be pinned to remain at the top of the list for immediate access.

### 🗑️ Gesture-Based Deletion
Utilizes a custom gesture-interceptor system for efficient data management. Notes can be deleted by dragging them into a dedicated secure deletion zone.

### 📥 Local Data Management
Provides a robust **Export & Share** utility. Users can export their entire encrypted database as a JSON file for manual archiving and backup.

---

## 🛠️ Technical Specifications

- **Framework**: [Expo](https://expo.dev/) (SDK 55)
- **Encryption**: AES-256 (via `crypto-js`) with secure cryptographic primitives.
- **Persistence**: File-based local JSON storage using `expo-file-system/legacy`.
- **Interface**: High-performance UI utilizing custom React Native animations and Ionicons.

---

## 🔐 Security Protocols
**Notes Man** employs professional-grade encryption standards:
1. **Zero-Knowledge**: Your password is the sole decryption key and is never stored on the device.
2. **Data Persistence**: If the vault password is lost, the encrypted data cannot be recovered. 
3. **Vault Reset**: A secure reset function is available to clear the database and start fresh, ensuring no unauthorized access is possible.

---

## 🚀 Installation & Usage

1. Install dependencies: `npm install`
2. Run on Android: `npm run android`
3. Run on iOS: `npm run ios`

---

## 📄 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details. You are free to fork, modify, and use this project in your own applications.

Designed for absolute privacy. Your data. Your device. Your control.
