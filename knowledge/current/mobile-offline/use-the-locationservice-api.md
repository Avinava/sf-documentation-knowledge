---
title: "Use the LocationService API"
domain: mobile-offline
topic: use-the-locationservice-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.118Z
estimatedTokens: 863
keywords: [LocationService, API, develop, Lightning, web, component, location-based, features, determine, current, location, Add, Test, Availability, Change]
---

# Use the LocationService API

> To develop a Lightning web component with location-based features, use the
        LocationService API to determine the current location.

# Use the LocationService API

To develop a Lightning web component with location-based features, use the LocationService API to determine the current location.

1.  Import LocationService into your component definition to make the LocationService API functions available to your code.
2.  Test to make sure LocationService is available before you call location functions.
3.  Use the location functions to get the current location, or to request location change updates.

## Add LocationService to a Lightning Web Component

In your component’s JavaScript file, import LocationService using the standard JavaScript import statement. Specifically, import the [getLocationService()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-locationservice-factory.html "HTML (New Window)") factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of LocationService. With your LocationService instance, use the [isAvailable()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-locationservice-isavailable.html "HTML (New Window)") utility function to verify availability. Use the location calculation functions to get the current location, or to configure and receive location change updates.

## Test LocationService Availability

LocationService depends on physical device hardware and platform features. A component that uses LocationService renders without errors on a desktop computer or in a mobile browser, but location functions fail. To avoid these errors, check if LocationService functionality is available before you use it.

```

```

## Determine Current Location

Determining the current location is a simple function call. While the call is asynchronous, and must be handled as a JavaScript Promise, it’s a “one and done” call that allocates and releases resources automatically.

```

```

See [getCurrentPosition(options)](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-locationservice-getcurrentposition.html "HTML (New Window)") for more details for configuration, results format, and error handling.

## Request Location Change Updates

To receive updates when a device’s location changes significantly, subscribe to location updates with the startWatchingPosition() function. Provide a callback function to handle position updates when they happen.

```

```

See [startWatchingPosition(options, callback)](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-locationservice-startwatchingposition.html "HTML (New Window)") for additional usage details, including important resource allocation notes. See [stopWatchingPosition(watchId)](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-locationservice-stopwatchingposition.html "HTML (New Window)") for an example stopTracking() function.

#### See Also

-   [*Lightning Web Components Developer Guide:* LocationService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-locationservice.html "Lightning Web Components Developer Guide: LocationService
    API - HTML (New Window)")

-   [LocationService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_example.htm "Here’s a basic example of a Lightning web component that gets the user’s current location and displays it on a map.")

## Code Examples

```
import { getLocationService } from 'lightning/mobileCapabilities';
```

```
handleGetCurrentLocationClick(event) {
    const myLocationService = getLocationService();
    if(myLocationService.isAvailable()) {
        // Perform geolocation operations
    }
    else {
        // LocationService not available
        // Not running in an app with GPS, location APIs, etc.
        // Handle with message, error, beep, and so on
    }
}
```

```
myLocationService.getCurrentPosition({ enableHighAccuracy: true }).
    then((result) => {
        this.myLocation = result.coords;
        // Do something with the location here
        // Display a map, look up an address, save to a record
        // 🎵 It's your thing, do what you wanna do 🎵
    }).
    catch((error) => {
        // Handle any errors here
        console.error(error);
    });
}
```

```
myLocationWatchId = 0;
async startTracking() {
    let locationService = getLocationService();
    this.myLocationWatchId = await locationService.
        startWatchingPosition({ enableHighAccuracy:true }, (result, error) => {

        // Check for error first
        if(error) {
            console.error(error);
            this.stopTracking();
        }
        else {
            this.myLocation = result.coords;

            // Now do your thing with the updated location
            // Refresh a map, upsert a record, or whatever
        }
    });
}
```

## Related Topics

- LocationService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_example.htm)
