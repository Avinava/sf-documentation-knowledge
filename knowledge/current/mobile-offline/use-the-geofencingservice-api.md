---
title: "Use the GeofencingService API"
domain: mobile-offline
topic: use-the-geofencingservice-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.982Z
estimatedTokens: 733
keywords: [GeofencingService, API, develop, Lightning, web, component, location-based, features, creating, monitoring, geofences, Add, Test, Availability, Start]
---

# Use the GeofencingService API

> To develop a Lightning web component with location-based features for creating and
        monitoring geofences, use the GeofencingService API.

# Use the GeofencingService API

To develop a Lightning web component with location-based features for creating and monitoring geofences, use the GeofencingService API.

1.  Import GeofencingService to make the GeofencingService API functions available to your code.
2.  Test to make sure GeofencingService is available before you call geofencing functions.
3.  Use the geofencing functions to get the current location and to define regions of interest.

## Add GeofencingService to a Lightning Web Component

In your component’s JavaScript file, import GeofencingService using the standard JavaScript import statement. Specifically, import the getGeofencingService() factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of GeofencingService. With your GeofencingService instance, use the utility functions and constants to verify availability. Then use the geofencing function to create location arrival or departure notifications for geographic regions.

## Test GeofencingService Availability

GeofencingService depends on physical device hardware and platform features. A component that uses GeofencingService renders without errors on a desktop computer or in a mobile browser, but geofencing functions fail. To avoid these errors, test whether GeofencingService functionality is available before you use it.

```

```

## Start Monitoring a Geofence Region

Use the StartMonitoringGeofence() function to start monitoring a geofence region. Then, handle the outcome in whatever manner you wish.

```

```

## Stop and Remove All Monitored Geofence Regions

Use the StopMonitoringAllGeofences() function to stop monitoring all geofence regions. Callback is called when the monitoring stops for all geofence regions, or with an error if the monitoring fails to stop.

```

```

## Stop and Remove A Specific Monitored Geofence Region

Use the StopMonitoringAllGeofences() function to stop monitoring all geofence regions. Callback is called when the monitoring stops for a geofence region, or with an error if the monitoring fails to stop.

```

```

## Get the IDs of Active Geofences

Use the getMonitoredGeofences() function to get the IDs of active geofence regions. Provide a callback function to handle all IDs of geofences being monitored, or with an error if the query fails.

```

```

#### See Also

-   [*Lightning Web Components Developer Guide:* GeofencingService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-geofencingservice.html "Lightning Web Components Developer Guide: GeofencingService
    API - HTML (New Window)")

-   [GeofencingService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_example.htm "Here’s a basic example of a Lightning web component that uses a device’s biometrics capabilities to verify device ownership.")

## Code Examples

```
import { getGeofencingService } from 'lightning/mobileCapabilities';
```

```
handleClickAddGeofencingRegion(event) {
    const myGeofencingService = getGeofencingService();
    if(myGeofencingService.isAvailable()) {
        // Perform geofencing operations
    }
    else {
        // GeofencingService not available         
        // Not running on hardware with location APIs, etc.
        // Handle with message, error, beep, and so on
    }
}
```

```
sftowerEntry = {
    latitude: 37.7899,
    longitude: -122.3969,
    radius: 50,
    notifyOnEntry: true,
    message: “Welcome to Salesforce Tower”,
    triggerOnce: false
}

addGeofence() {
    // …
    if(myGeofencingService.isAvailable()) {
        // Perform geofencing operations
        myGeofencingService.startMonitoringGeofence(this.sftowerEntry)
             .then((id) => {
                 console.log(`ID for geofence SF Tower Entry created: ${id}`);
             })
             .catch((error) => {
                 console.log(error);
             });
    }
}
```

```
handleClickRemoveGeofencingRegion(geofenceRegionId) {
    // …
    if(myGeofencingService.isAvailable()) {
        // Perform geofencing operations
        myGeofencingService.stopMonitoringGeofence(geofenceRegionId)
             .then(() => {
                 console.log(`Success`);
             })
             .catch((error) => {
                 console.log(error);
             });
    }
}
```

```
handleClickRemoveGeofencingRegion(geofenceRegionId) {
    // …
    if(myGeofencingService.isAvailable()) {
        // Perform geofencing operations
        myGeofencingService.stopMonitoringGeofence(geofenceRegionId)
             .then(() => {
                 console.log(`Success`);
             })
             .catch((error) => {
                 console.log(error);
             });
    }
}
```

## Related Topics

- GeofencingService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_example.htm)
