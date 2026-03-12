---
title: "API Reference"
domain: data-cloud
topic: api-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.025Z
estimatedTokens: 731
keywords: [API, guidance, around, references, provided, Engagement, Mobile, SDK, Salesforce, Interactions, Web]
---

# API Reference

> This section provides guidance around references provided with the Engagement Mobile
  SDK.

# API Reference

This section provides guidance around references provided with the Engagement Mobile SDK.

-   **[Initialization](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_initialization.htm)**
    Before the Data Cloud Module for the Engagement Mobile SDK can be used to invoke web services using the API, the SDK must be configured. Use the CdpConfigBuilder for iOS or CdpConfig.Builder for Android helper class to build your SDK configuration by providing required settings appId and endpoint that can be obtained from your Mobile Connector. Optionally, configuration can be provided for the settings trackScreens, trackLifecycle, and sessionTimeoutInSeconds.
-   **[Capturing Engagement Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_capturing_engagement_data.htm)**
    The Data Cloud Module for the Engagement Mobile SDK enables collection of granular data about the customer’s mobile app interactions through event tracking.
-   **[Capturing Profile Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_capturing_profile_data.htm)**
    The Data Cloud Module for the Engagement Mobile SDK enables collection of profile data through the SDK’s Identity APIs.
-   **[Capturing Behavior Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_capturing_behavior_data.htm)**
    The Data Cloud Module for the Engagement Mobile SDK enables the collection of granular data about a customer’s mobile app interactions through event tracking.
-   **[Consent Management](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_consent_management.htm)**
    Engagement Mobile SDK offers a managed solution for allowing and restricting collection of event data. Your mobile application is responsible for presenting the device owner with the choice to opt in or opt out of data collection and for setting the Data Cloud Module consent property accordingly.
-   **[Location Tracking](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_location_tracking.htm)**
    The Data Cloud Module for the Engagement Mobile SDK supports location tracking for all events. Enable this functionality using the setLocation method on the Data Cloud Module to set coordinates and expiresIn.
-   **[Logging and Debugging](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_logging_and_debugging.htm)**
    Logging is optional, yet critical, SDK feature that allows the mobile application developer to select the verbosity of the Data Cloud Module for the Engagement Mobile SDK’s output. By default, logging is disabled and must be enabled using the setLogger for iOS or setLogging for Android method on the SFMCSdk instance. Define the desired logging level and output destination. Enabling logging results in log capture using the native unified logging system.

## Related Topics

- Initialization (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_initialization.htm)
- Capturing Engagement Data (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_capturing_engagement_data.htm)
- Capturing Profile Data (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_capturing_profile_data.htm)
- Capturing Behavior Data (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_capturing_behavior_data.htm)
- Consent Management (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_consent_management.htm)
- Location Tracking (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_location_tracking.htm)
- Logging and Debugging (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_logging_and_debugging.htm)
- Initialization (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_initialization.htm)
- Data Collection (atlas.en-us.252.0.c360a_api.meta/c360a_api/c36a_api_data_collection.htm)
- Identity (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_identity.htm)
