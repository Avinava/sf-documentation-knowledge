---
title: "Use the AR SpaceCapture API"
domain: field-service
topic: use-the-ar-spacecapture-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.532Z
estimatedTokens: 349
keywords: [SpaceCapture, API, develop, LWC, Space, Capture, features, accessing, device’s, native, functionality., Add, Test, Availability, Start, Scan]
---

# Use the AR SpaceCapture API

> To develop an LWC with AR Space Capture features, use the AR SpaceCapture API as your
    method for accessing a device’s native AR functionality.

# Use the AR SpaceCapture API

To develop an LWC with AR Space Capture features, use the AR SpaceCapture API as your method for accessing a device’s native AR functionality.

## 1\. Add AR SpaceCapture to an LWC

In your component’s JavaScript file, import ARSpaceCapture using the standard JavaScript import statement. Specifically, import the getARSpaceCapture() factory function from the lightning/mobileCapabilities module.

```

```

After it’s imported into your component, use the factory function to get an instance of ARSpaceCapture. With your ARSpaceCapture instance, use the utility functions and constants to verify availability. Then use the feature functions to perform the associated functionality.

## 2\. Test AR SpaceCapture Availability

AR SpaceCapture depends on physical device hardware and platform features. A component that uses SpaceCapture renders without errors on a desktop computer or in a mobile browser, but SpaceCapture functions fail. To avoid these errors, test if SpaceCapture functionality is available before you use it.

```

```

## 3\. Start an AR SpaceCapture Scan

Start a room scan with the scanRoom() function. You can then handle the JSON file that represents the USDZ file as required.

For example:

```

```

Considerations:

-   The floor must be leveled when starting the scan.
-   A scanned space includes only items that are on the same level.

## Code Examples

```
import {getARSpaceCapture} from 'lightning/mobileCapabilities';
```

```
handleCheckARSpaceCaptureClick(event) {
    const myARSpaceCapture = getARSpaceCapture();
    if(myARSpaceCapture.isAvailable()) {
	 // Perform next operations
  } else {
	// AR SpaceCapture isn't available, or consuming app hasn’t implemented it
	// Not running on hardware with AR functionality, etc.
	// Handle with message, error, beep, and so on
  }
}
```

```
handleScanRoomClicked(event) {
    if (this.myARSpaceCapture != null && this.myARSpaceCapture.isAvailable()) {
        this.myARSpaceCapture.scanRoom()
            .then((arSpaceCaptureResult) => {
                console.log(JSON.stringify(arSpaceCaptureResult, undefined, 2))
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
```
