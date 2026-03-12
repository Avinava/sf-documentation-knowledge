---
title: "Location Tracking"
domain: data-cloud
topic: location-tracking
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.218Z
estimatedTokens: 249
keywords: [Location, Tracking, Data, Cloud, Module, Engagement, Mobile, SDK, supports, location, tracking, events., Enable, functionality, setLocation, set, coordinates, expiresIn., Note]
---

# Location Tracking

> The Data Cloud Module for the Engagement Mobile SDK supports location tracking for
        all events. Enable this functionality using the   setLocation method on
        the Data Cloud Module to set coordinates and
            expiresIn.

# Location Tracking

The Data Cloud Module for the Engagement Mobile SDK supports location tracking for all events. Enable this functionality using the setLocation method on the Data Cloud Module to set coordinates and expiresIn.

**iOS**

```

```

**Android**

```

```

Given that the SDK has non-expired location coordinates, the location attributes are automatically appended to the event attributes key value pairs with key names latitude and longitude.

When the expiration interval has been exceeded, the SDK location coordinates are cleared and longer attached to events. To prevent location from being attached to events before the coordinates expire, call setLocation and pass nil values as the coordinates.

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

You’re responsible for handling location tracking permission from the customer, requesting location permission, fetching the location, and ensuring the desired accuracy range.

## Code Examples

```
// prepare the coordinates, use the CdpCoordinates wrapper
let coordinates = CdpCoordinates(latitude: 54.187738, longitude: 15.554440)
          
// set the location coordinates and expiration time in seconds
CdpModule.shared.setLocation(coordinates: coordinates, expiresIn: 60)
```

```
CdpSdk.requestSdk { sdk >
    // prepare the coordinates, use the Coordinates wrapper
    val coordinates = Coordinates(latitude = 54.187738, longitude = 15.554440)
    
    // set the location coordinates and expiration time in seconds
    sdk.setLocation(coordinates = coordinates, expiresIn = 60) 
}
```
