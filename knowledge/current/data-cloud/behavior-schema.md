---
title: "Behavior Schema"
domain: data-cloud
topic: behavior-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.119Z
estimatedTokens: 538
keywords: [Behavior, Schema, events, sent, Data, Cloud, customer, navigates, application, where, Module, Engagement, Mobile, SDK, running., include, screen, view, launch.]
---

# Behavior Schema

> Behavior events are sent to Data Cloud as a customer navigates the application where
  the Data Cloud Module for the Engagement Mobile SDK is running. Behavior events can include
  screen view, and application launch.

# Behavior Schema

Behavior events are sent to Data Cloud as a customer navigates the application where the Data Cloud Module for the Engagement Mobile SDK is running. Behavior events can include screen view, and application launch.

| Source Event Property | Target Schema Developer Name | Field Type | Description | CIM Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | - |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | - |
| <Automatically Assigned> | eventType = "appEvents" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | - |
| <Automatically Assigned> | category = "Engagement" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. | - |
| appName | appName | text | The name of the software application. | - |
| appVersion | appVersion | text | The version of the software application. | - |
| behaviorType | behaviorType | text | The type of behavior event captured. Possible values are:ScreenViewAppBackgroundedAppUpdateAppFirstLaunchAppLaunch | - |
| previousAppVersion | previousAppVersion | text | The previous version of the software application. | - |
| screenName | screenName | text | The screen name. | - |
| <Automatically Assigned if Location Tracking is allowed> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Longitude |
| <Automatically Assigned if Location Tracking is allowed> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Latitude |
