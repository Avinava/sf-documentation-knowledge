---
title: "Integrate Your Mobile Applications"
domain: data-cloud
topic: integrate-your-mobile-applications
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.022Z
estimatedTokens: 672
keywords: [Integrate, Mobile, Applications, Data, Cloud, Module, Engagement, SDK, possible, integration, capture, rich, behavioral, demographic, customers]
---

# Integrate Your Mobile Applications

> Data Cloud Module for the Engagement Mobile SDK makes it possible for you to
    integrate your mobile applications with Data Cloud. This integration allows you to
    capture rich behavioral and demographic data from customers, and app lifecycle and screen
    navigation events. Events collected by Data Cloud create a unified profile of a
    customer to enable hyper-personalized engagement across multiple clouds, including Marketing,
    Commerce, and Service.

# Integrate Your Mobile Applications

Data Cloud Module for the Engagement Mobile SDK makes it possible for you to integrate your mobile applications with Data Cloud. This integration allows you to capture rich behavioral and demographic data from customers, and app lifecycle and screen navigation events. Events collected by Data Cloud create a unified profile of a customer to enable hyper-personalized engagement across multiple clouds, including Marketing, Commerce, and Service.

## Prerequisites

To use the Data Cloud Module, create a Salesforce data source connector and copy your tenant-specific endpoint. Log in to Data Cloud and navigate to Websites and Mobile Apps. Set up your data sources by creating an [app connector](https://help.salesforce.com/apex/HTViewHelpDoc?id=c360_a_web_mobile_app_connector.htm&language=en_US).

The appSourceId and tenant-specific endpoint from your web data connector is required for the initialization of the Data Cloud Module.

## Install the SDK

**iOS**

Use Swift Package Manager to install and manage the Data Cloud Module for the Engagement Mobile SDK.

-   In Xcode, with your app project open, navigate to **File > Add Packages**.
-   Enter the package URL for the Engagement Mobile SDK repository.

    ```

    ```

-   Select the SDK version that you want to use. The latest version is recommended.
-   Enter the package URL for the Data Cloud Module for the Engagement Mobile SDK repository:

    ```

    ```

-   Select the SDK version that you want to use. The latest version is recommended.

XCode resolves and downloads the dependencies in the background.

**Android**

-   Update the module-level build.gradle file.

    ```

    ```

-   Add the SDK dependency.

    ```

    ```


## Download the SDK

Download the binaries for the Data Cloud Module:

-   [Android](https://github.com/salesforce-marketingcloud/mobile-sdk-cdp-android)
-   [iOS](https://github.com/salesforce-marketingcloud/mobile-sdk-cdp-ios)

## Additional Resources

-   **[API Reference](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_api_reference.htm)**
    This section provides guidance around references provided with the Engagement Mobile SDK.
-   **[Event Specifications](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_event_specifications.htm)**
    Event specifications for the Engagement Mobile SDK.
-   **[Schema Mappings](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_schema_mappings.htm)**
    A schema is a collection of event definitions. Use these standard schema mappings for ecommerce use cases and review the descriptions of each event definition.

## Code Examples

```
https://github.com/salesforce-marketingcloud/sfmc-sdk-ios
```

```
repositories {
  maven { 
    url "https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/repository"
  }
  maven {
    url "https://salesforce-marketingcloud.github.io/mobile-sdk-cdp-android/repository" 
  }
}
```

```
dependencies {
  implementation 'com.salesforce.marketingcloud:cdp:2.0.2'
  implementation 'com.salesforce.marketingcloud:sfmcsdk:1.0.2'
}
```

## Related Topics

- API Reference (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_api_reference.htm)
- Event Specifications (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_event_specifications.htm)
- Schema Mappings (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_schema_mappings.htm)
