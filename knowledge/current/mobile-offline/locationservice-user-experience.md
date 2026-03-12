---
title: "LocationService User Experience"
domain: mobile-offline
topic: locationservice-user-experience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.121Z
estimatedTokens: 305
keywords: [LocationService, User, Experience, component, deliver, any, desire, There, number, common, location-based, features, suitable]
---

# LocationService User Experience

> Your component can deliver any user experience you desire. There are a number of common
    location-based features where LocationService might be suitable.

# LocationService User Experience

Your component can deliver any user experience you desire. There are a number of common location-based features where LocationService might be suitable.

Here are a few examples of common location-based features:

-   Display a user’s current location on a map
-   Get the user’s current location when they perform an action in your app
-   Provide directional guidance for travel between the current location and another location
-   Calculate travel time from the current location to another
-   Perform an action when a user approaches a destination
-   Perform an action when a user moves a significant distance

In these examples, LocationService is usually only a part of the complete solution. Map display, route and travel time calculations, and so on are other parts that you need to implement yourself.

If your feature is a straightforward, map-based page, you can use LocationService position information along with the [lightning-map base component](https://developer.salesforce.com/docs/component-library/bundle/lightning-map/documentation). For more complex solutions, such as those requiring routing directions, you might need to integrate with other tools or services.
