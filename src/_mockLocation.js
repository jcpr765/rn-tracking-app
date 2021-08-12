import * as Location from "expo-location";
import getEnvVars from "../environment";

const { testLatitude, testLongitude } = getEnvVars();

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 0,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: testLongitude + increment * tenMetersWithDegrees,
      latitude: testLatitude + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
