# gps-now

A lightweight geolocation utility to return latitude and longitude even when offline using the device’s GPS.

# ✨ Features

✅ Offline Support
Works without internet by using device GPS when available (e.g., mobile, hybrid apps).

📍 Get Accurate Coordinates
Quickly retrieves latitude and longitude using the browser’s or device’s built-in geolocation.

⚡ Promise-Based API
Clean and modern API using async/await or .then() chains.

🌐 Cross-Platform Compatible
Works in all modern browsers and hybrid mobile environments like Capacitor, Cordova, React Native WebView, etc.

🧩 Tiny & Dependency-Free
Lightweight utility with zero external dependencies.

🔒 Respects User Privacy
Only requests location access when invoked and doesn’t store any data.

🛠️ TypeScript Support
Fully typed for great developer experience and autocompletion.

⚙️ Customizable Accuracy Settings
Configure enableHighAccuracy, timeout, and maximumAge as needed.

## 🚀 Installation

```bash
npm install collageify

or

yarn add collageify
```

# 📌 Usage

```typescript
import { getCurrentLocation } from "gps-now";

getCurrentLocation()
  .then(({ latitude, longitude }) => {
    console.log(latitude, longitude);
  })
  .catch(console.error);
```

# 🌐 Compatibility

Works in browsers and hybrid mobile apps.

Requires permission from the user.

No internet needed — relies on GPS.

# ⚙️ How It Works
This package uses the HTML5 Geolocation API to fetch the user's current coordinates.

Behind the Scenes:
When you call getCurrentLocation(), it checks if geolocation is supported in the environment.

If supported, it prompts the user for location permission.

Once granted, it uses GPS or device-based location to fetch accurate latitude and longitude.

If GPS is available (e.g., on mobile), it can return location even when offline.

✅ Best used in mobile browsers or hybrid apps (Capacitor, Cordova, etc.) for offline GPS functionality.

# ❓ FAQ
📌 Does this work offline?
Yes, as long as the device supports GPS (e.g., smartphones), it can return coordinates without an internet connection. Desktop browsers may require a network connection for geolocation.

📌 Does this store or track any location data?
No. The package does not store, send, or track any data. It only retrieves your coordinates upon request.

📌 What if the user denies location permission?
The promise will reject with an error. You should handle this in your app like:

getCurrentLocation().catch(err => alert("Location permission denied."));
📌 Is it safe to use in production?
Yes. It uses native browser APIs, has no external dependencies, and works in secure HTTPS environments.

📌 What browsers and environments are supported?
✅ Chrome
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile Web Browsers
✅ Hybrid apps (Capacitor/Cordova)
🚫 Not supported in insecure (non-HTTPS) web pages

# 👨‍💻 Author

Made with ❤️ by rajasekar-arch <rajasekar_e_c@outlook.com>
