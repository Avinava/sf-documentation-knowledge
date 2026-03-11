---
title: "Capturing Engagement Data"
domain: data-cloud
topic: capturing-engagement-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:17:42.182Z
keywords: [Capturing, Engagement, Data, iOS, Example, Android]
---

# Capturing Engagement Data

# Capturing Engagement Data

The Data Cloud Module for the Engagement Mobile SDK enables collection of granular data about the customer’s mobile app interactions through event tracking.

Before engagement data can be sent to Data Cloud:

1.  The Data Cloud Module for the Engagement Mobile SDK must be configured and [initialized.](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_initialization.htm "Before the Data Cloud Module for the Engagement Mobile SDK can be used to invoke web services using the API, the SDK must be configured. Use the CdpConfigBuilder for iOS or CdpConfig.Builder for Android helper class to build your SDK configuration by providing required settings appId and endpoint that can be obtained from your Mobile Connector. Optionally, configuration can be provided for the settings trackScreens, trackLifecycle, and sessionTimeoutInSeconds.")
2.  [Consent](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_consent_management.htm "Engagement Mobile SDK offers a managed solution for allowing and restricting collection of event data. Your mobile application is responsible for presenting the device owner with the choice to opt in or opt out of data collection and for setting the Data Cloud Module consent property accordingly.") to track must be granted.

The Engagement Mobile SDK comes with support for creating both structured and unstructured events:

-   Structured
    -   Cart Event
    -   Catalog Event
    -   Order Event
-   Unstructured
    -   Custom Event

Structured events have strict requirements on the types of information that can be provided. They also come pre-defined with the suggested Mobile Connector schema for Data Cloud and can also be extended to capture extra data.

Unstructured events have no requirement on the information that can be provided. Custom event definitions must be created and added to the Mobile Connector schema to be ingested in Data Cloud.

Both event types are collected by calling the SFMCSdk.track(event) function.

## iOS Example

```

```

## Android Example

```

```