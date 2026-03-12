---
title: "Use the BiometricsService API"
domain: mobile-offline
topic: use-the-biometricsservice-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.879Z
estimatedTokens: 658
keywords: [BiometricsService, API, develop, Lightning, web, component, biometrics-checking, features, accessing, device’s, native, biometrics, functionality, Add, Test]
---

# Use the BiometricsService API

> To develop a Lightning web component with biometrics-checking features, use the
        BiometricsService API as your method for accessing a device’s native biometrics
        functionality.

# Use the BiometricsService API

To develop a Lightning web component with biometrics-checking features, use the BiometricsService API as your method for accessing a device’s native biometrics functionality.

1.  Import BiometricsService into your component definition to make the BiometricsService API functions available to your code.
2.  Test to make sure BiometricsService is available before you call for a biometrics check.
3.  Use the feature functions to prompt app users for biometrics checks.

## Add BiometricsService to a Lightning Web Component

In your component’s JavaScript file, import BiometricsService using the standard JavaScript import statement. Specifically, import the getBiometricsService() factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of BiometricsService. With your BiometricsService instance, use the utility functions and constants to verify availability. Then use the feature functions to perform the associated functionality.

## Test BiometricsService Availability

BiometricsService depends on physical device hardware and platform features. A component that uses BiometricsService renders without errors on a desktop computer or in a mobile browser, but biometrics-checking functions fail. To avoid these errors, test if BiometricsService functionality is available before you use it.

```

```

## Check Biometrics Availability and Configuration

It’s simple to confirm a device’s biometrics functionality in your Lightning web component using BiometricsService. First, use isBiometricsReady() to confirm that a device has biometrics functionality and that it’s set up for use. Then, process the result in whatever manner you wish.

For example:

```

```

## Prompt a Biometric Check

Prompt a device biometrics check with the checkUserIsDeviceOwner() function. First, call the checkUserIsDeviceOwner() function, optionally including a BiometricsServiceOptions parameter. Then, handle the outcome in whatever manner you wish.

For example:

```

```

#### See Also

-   [*Lightning Web Components Developer Guide:* BiometricsService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-biometricsservice.html "Lightning Web Components Developer Guide: BiometricsService
    API - HTML (New Window)")

-   [BiometricsService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_example.htm "Here’s a basic example of a Lightning web component that uses a device’s biometrics capabilities to verify device ownership.")

## Code Examples

```
import { getBiometricsService } from 'lightning/mobileCapabilities';
```

```
handleCheckBiometricsClick(event) {
    const myBiometricsService = getBiometricsService();
    if(myBiometricsService.isAvailable()) {
        // Perform biometrics-checking operations
    }
    else {
        // BiometricsService not available, or consuming app hasn’t implemented it         
        // Not running on hardware with biometrics functionality, etc.
        // Handle with message, error, beep, and so on
    }
}
```

```
// Check for device biometrics functionality, console log the results
myBiometricsService.isBiometricsReady(options)
.then((results) => {
    console.log(results);
})
.catch((error) => {
    // Handle cancellation or other errors here
    console.error('Error code: ' + error.code); + 
    console.error('Error message: ' + error.message);
});
```

```
// Get events from a specified date range from the specified calendar(s), and then   process them
myBiometricsService.checkUserIsDeviceOwner(options)
.then((results) => {
    // Do something with the event(s) data
    this.events = results;
    console.log(results);
})
.catch((error) => {
    // Handle cancellation or other errors here
    this.events = [];
    console.error('Error code: ' + error.code); + 
    console.error('Error message: ' + error.message);
});
```

## Related Topics

- BiometricsService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_example.htm)
