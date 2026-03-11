---
title: "Location Tracking"
domain: data-cloud
topic: location-tracking
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.257Z
keywords: [Location, Tracking, Note]
---

# Location Tracking

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