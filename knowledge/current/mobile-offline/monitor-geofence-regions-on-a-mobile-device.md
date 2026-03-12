---
title: "Monitor Geofence Regions on a Mobile Device"
domain: mobile-offline
topic: monitor-geofence-regions-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.967Z
estimatedTokens: 726
keywords: [Monitor, Geofence, Regions, Mobile, Device, Lightning, web, component, device’s, location, features, determine, user’s, current, proximity]
---

# Monitor Geofence Regions on a Mobile Device

> A Lightning web component can use a mobile device’s location features to determine a
    user’s current location to the user’s proximity to areas that may be of interest, or to perform
    location-related tasks. The longitude, latitude, and radius define a geofence around the regions
    of interest.

# Monitor Geofence Regions on a Mobile Device

A Lightning web component can use a mobile device’s location features to determine a user’s current location to the user’s proximity to areas that may be of interest, or to perform location-related tasks. The longitude, latitude, and radius define a geofence around the regions of interest.

Geofence location is determined locally on the mobile device, and doesn’t need a network connection. However, GeofencingService does require a GPS signal from the device. For Android devices, Google Location Accuracy must be enabled in the system settings. GeofencingService does require access to platform-specific APIs that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

GeofencingService does not and cannot function when running in a web browser, whether on a desktop or mobile device.

-   **[GeofencingService User Experience](atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_intro.htm)**
    Your component can deliver any user experience you desire. There are a number of geofencing-based features where GeofencingService might be suitable.
-   **[Use the GeofencingService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_in_a_lightning_component.htm)**
    To develop a Lightning web component with location-based features for creating and monitoring geofences, use the GeofencingService API.
-   **[GeofencingService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_example.htm)**
    Here’s a basic example of a Lightning web component that uses a device’s biometrics capabilities to verify device ownership.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_compatibility.htm)**
    GeofencingService is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It **requires** access to device hardware and device platform APIs. This access is only available when GeofencingService runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a standard web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_considerations.htm)**
    Consider these guidelines and limitations when developing features that use the GeofencingService API.

#### See Also

-   [*Lightning Web Components Developer Guide:* GeofencingService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-geofencingservice.html "Lightning Web Components Developer Guide: GeofencingService
    API - HTML (New Window)")

## Related Topics

- GeofencingService User Experience (atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_intro.htm)
- Use the GeofencingService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_in_a_lightning_component.htm)
- GeofencingService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_example.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_compatibility.htm)
- Considerations and Limitations (atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_considerations.htm)
