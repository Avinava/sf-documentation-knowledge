---
title: "Capturing Behavior Data"
domain: data-cloud
topic: capturing-behavior-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:13.035Z
estimatedTokens: 695
keywords: [Capturing, Behavior, Data, Cloud, Module, Engagement, Mobile, SDK, collection, granular, customer’s, app, interactions, event, tracking]
---

# Capturing Behavior Data

> The Data Cloud Module for the Engagement Mobile SDK enables the
    collection of granular data about a customer’s mobile app interactions through event
    tracking.

# Capturing Behavior Data

The Data Cloud Module for the Engagement Mobile SDK enables the collection of granular data about a customer’s mobile app interactions through event tracking.

Before behavior data can be sent to Data Cloud:

-   The Data Cloud Module for the Engagement Mobile SDK must be configured and [initialized](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_initialization.htm "Before the Data Cloud Module for the Engagement Mobile SDK can be used to invoke web services using the API, the SDK must be configured. Use the CdpConfigBuilder for iOS or CdpConfig.Builder for Android helper class to build your SDK configuration by providing required settings appId and endpoint that can be obtained from your Mobile Connector. Optionally, configuration can be provided for the settings trackScreens, trackLifecycle, and sessionTimeoutInSeconds.").
    -   To enable Lifecycle Events, set trackLifecycle to true.
    -   To enable Screen Events, set trackScreens to true.
-   [Consent](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_consent_management.htm "Engagement Mobile SDK offers a managed solution for allowing and restricting collection of event data. Your mobile application is responsible for presenting the device owner with the choice to opt in or opt out of data collection and for setting the Data Cloud Module consent property accordingly.") to track must be granted.

Behavioral lifecycle and screen events are disabled by default in the Data Cloud Module.

Each of the behaviors generates an engagement event with eventType="appEvents" and fields relevant to the behavior populated.

## Lifecycle Events

Lifecycle behaviors are triggered when a mobile application transitions to the foreground or background on a mobile device, or when the mobile application is updated.

**On Application Foregrounded**

For example, when the mobile application is foregrounded, an event is generated.

```

```

The first time the application launches, behaviorType="AppFirstLaunch" is set.

**On Application Backgrounded**

For example, when the mobile application is backgrounded an event is generated.

```

```

**On Application Version Changed**

For example, when the mobile application is updated, an event is generated.

```

```

## Screen Events

**On-Screen View**

For example, when a customer is navigating through Activity views in an Android application, or as UIViewControllers are added to a view hierarchy in iOS, an event is generated.

```

```

## Send Behavior Data

After you’ve configured the Data Cloud Module and enabled the desired behavioral events, the SDK automatically sends those events to Data Cloud as they occur in your app. You don't need to manually send these events.

## Code Examples

```
{
  "behaviorType": "AppLaunch",
  "appName": "MyAppName",
  "appVersion": "1.0.0",
  "eventType": "appEvents",
  "category": "Engagement",
  // + all automatically assigned fields like deviceId, sessionId, dateTime, etc.
}
```

```
{
  "behaviorType": "AppBackgrounded",
  "appName": "MyAppName",
  "appVersion": "1.0.0",
  "eventType": "appEvents",
  "category": "Engagement",
  // + all automatically assigned fields like deviceId, sessionId, dateTime, etc.
}
```

```
{
  "behaviorType": "AppUpdate",
  "previousAppVersion": "1.0.0",
  "appName": "MyAppName",
  "appVersion": "1.2.3",
  "eventType": "appEvents",
  "category": "Engagement",
  // + all automatically assigned fields like deviceId, sessionId, dateTime, etc.
}
```

```
{
  "behaviorType": "ScreenView",
  "screenName": "MyScreenName",
  "appName": "MyAppName",
  "appVersion": "1.0.0",
  "eventType": "appEvents",
  "category": "Engagement",
  // + all automatically assigned fields like deviceId, sessionId, dateTime, etc.
}
```

## Related Topics

- initialized (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_initialization.htm)
- Consent (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_consent_management.htm)
