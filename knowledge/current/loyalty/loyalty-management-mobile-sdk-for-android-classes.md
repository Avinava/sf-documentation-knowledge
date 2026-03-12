---
title: "Loyalty Management Mobile SDK for Android Classes"
domain: loyalty
topic: loyalty-management-mobile-sdk-for-android-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.520Z
estimatedTokens: 436
keywords: [Loyalty, Management, Mobile, SDK, Android, Classes, organize, SDK’s, functionalities, data, structures, developing, apps, provide, components]
---

# Loyalty Management Mobile SDK for Android Classes

> The Android classes organize the Loyalty Management Mobile SDK’s functionalities and
  data structures. When developing mobile apps using the SDK, these classes provide components,
  services, or features with which you can interact.

# Loyalty Management Mobile SDK for Android Classes

The Android classes organize the Loyalty Management Mobile SDK’s functionalities and data structures. When developing mobile apps using the SDK, these classes provide components, services, or features with which you can interact.

| Available in: all editions that have Loyalty Management enabled |
| --- |


-   **[Logger](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_logger.htm)**
    The Logger class provides a standardized way to save debug, verbose, info, or error log messages.
-   **[LoyaltyClient](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_forceclient.htm)**
    Create authentication network requests by using the LoyaltyClient class. LoyaltyClient uses ForceAuthenticator, which is an interface that defines the methods to handle access tokens in the Salesforce API. LoyaltyClient creates a retrofit instance to invoke Force APIs.
-   **[LoyaltyAPIManager for Android](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_loyaltyapimanager_class.htm)**
    Manage requests related to loyalty program and interactions between the application and the APIs. The LoyaltyAPIManager class manages requests related to loyalty programs using the Force API and manages authentication by using the instance of ForceAuthenticator that was injected at the time of initialization. Use this class to manage asynchronous requests by using Retrofit and Kotlin coroutines.
-   **[LoyaltyAPIInterface](atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_loyaltyapiinterface.htm)**
    The LoyaltyApiInterface class defines the interface for creating, formatting, and sending REST requests to the Salesforce service. This class stores REST API call definitions for all Loyalty API.

## Related Topics

- Logger (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_logger.htm)
- LoyaltyClient (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_forceclient.htm)
- LoyaltyAPIManager for Android (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_loyaltyapimanager_class.htm)
- LoyaltyAPIInterface (atlas.en-us.loyalty.meta/loyalty/mobile_sdk_android_loyaltyapiinterface.htm)
