---
title: "Access a Mobile Device’s Biometrics Capabilities"
domain: mobile-offline
topic: access-a-mobile-devices-biometrics-capabilities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.863Z
estimatedTokens: 680
keywords: [Access, Mobile, Device’s, Biometrics, Capabilities, Lightning, web, component, functionality, prompt, user, confirm, their, identity, biometrics-related]
---

# Access a Mobile Device’s Biometrics Capabilities

> A Lightning web component can use a device’s biometrics functionality to prompt a user
    to confirm their identity. When these biometrics-related actions occur, the result is returned
    to the Lightning web component that invoked it.

# Access a Mobile Device’s Biometrics Capabilities

A Lightning web component can use a device’s biometrics functionality to prompt a user to confirm their identity. When these biometrics-related actions occur, the result is returned to the Lightning web component that invoked it.

Biometrics checks are managed locally on the mobile device, and don't need a network connection. However, BiometricsService requires access to platform-specific APIs that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

BiometricsService does not and cannot function when running in a web browser, whether on a desktop or mobile device.

-   **[BiometricsService User Experience](atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_intro.htm)**
    Your component can deliver any user experience you desire, but there’s a common flow for any component that calls for a biometrics check.
-   **[Use the BiometricsService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_in_a_lightning_component.htm)**
    To develop a Lightning web component with biometrics-checking features, use the BiometricsService API as your method for accessing a device’s native biometrics functionality.
-   **[BiometricsService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_example.htm)**
    Here’s a basic example of a Lightning web component that uses a device’s biometrics capabilities to verify device ownership.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_compatibility.htm)**
    BiometricsService is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It **requires** access to device hardware and device platform APIs. This access is only available when BiometricsService runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a standard web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_considerations.htm)**
    Consider these guidelines and limitations when developing features that use the BiometricsService API.

#### See Also

-   [*Lightning Web Components Developer Guide:* BiometricsService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-biometricsservice.html "Lightning Web Components Developer Guide: BiometricsService
    API - HTML (New Window)")

## Related Topics

- BiometricsService User Experience (atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_intro.htm)
- Use the BiometricsService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_in_a_lightning_component.htm)
- BiometricsService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_example.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_compatibility.htm)
- Considerations and Limitations (atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_considerations.htm)
