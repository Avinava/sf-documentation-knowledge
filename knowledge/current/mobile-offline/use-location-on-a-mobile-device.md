---
title: "Use Location on a Mobile Device"
domain: mobile-offline
topic: use-location-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.099Z
estimatedTokens: 884
keywords: [Location, Mobile, Device, Lightning, web, component, device’s, features, determine, current, association, person, holding, access, moment]
---

# Use Location on a Mobile Device

> A Lightning web component can use a mobile device’s location features to determine the
  current location of the device and, by association, the person who is holding it. You can access
  the device’s current location at a moment in time, or you can subscribe to location changes, and
  receive updates to the device’s location when it changes significantly.

# Use Location on a Mobile Device

A Lightning web component can use a mobile device’s location features to determine the current location of the device and, by association, the person who is holding it. You can access the device’s current location at a moment in time, or you can subscribe to location changes, and receive updates to the device’s location when it changes significantly.

Location is determined locally on the mobile device, and doesn’t need a network connection. LocationService does require access to platform-specific APIs that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

LocationService does not and cannot function when running in a web browser, whether running on a desktop or mobile device.

LocationService provides coordinate data only: latitude, longitude, altitude, and some motion details. It doesn’t include derived data, such as a physical address or map detail. If you’re using the location information to, for example, show a position on a map, you might need a network connection to receive map data, such as map tiles, and so on.

-   **[LocationService User Experience](atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_intro.htm)**
    Your component can deliver any user experience you desire. There are a number of common location-based features where LocationService might be suitable.
-   **[Location Basics](atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_location_basics.htm)**
    On the surface, the concept of location is a simple one. Where am I? Where is Salesforce Tower? How do I get to Salesforce Tower from where I am right now? These are all location-based features, and we’ve been using them on mobile devices for many years. As a developer, the concept of location can be more complex.
-   **[Use the LocationService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_in_a_lightning_component.htm)**
    To develop a Lightning web component with location-based features, use the LocationService API to determine the current location.
-   **[LocationService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_example.htm)**
    Here’s a basic example of a Lightning web component that gets the user’s current location and displays it on a map.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_compatibility.htm)**
    LocationService is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. LocationService **requires** access to device hardware and device platform APIs. This access is only available when LocationService runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a standard web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_considerations.htm)**
    Keep the following in mind when developing features that use the LocationService API.

#### See Also

-   [*Lightning Web Components Developer Guide:* LocationService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-locationservice.html "Lightning Web Components Developer Guide: LocationService
    API - HTML (New Window)")

## Related Topics

- LocationService User Experience (atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_intro.htm)
- Location Basics (atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_location_basics.htm)
- Use the LocationService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_in_a_lightning_component.htm)
- LocationService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_example.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_compatibility.htm)
- Considerations and Limitations (atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_considerations.htm)
