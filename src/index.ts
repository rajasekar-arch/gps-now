export interface GeoLocationData {
  latitude: number;
  longitude: number;
}

export function getCurrentLocation(): Promise<GeoLocationData> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(new Error("Geolocation is not supported by your browser."));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(new Error("Unable to retrieve location. Reason: " + error.message));
      },
      {
        enableHighAccuracy: true, // important for offline use with GPS
        timeout: 10000,
        maximumAge: 0
      }
    );
  });
}
