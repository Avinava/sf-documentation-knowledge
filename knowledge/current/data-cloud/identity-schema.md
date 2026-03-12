---
title: "Identity Schema"
domain: data-cloud
topic: identity-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.144Z
estimatedTokens: 1045
keywords: [Identity, Schema, Capturing, profile, data, achieved, mobile, SDK’s, component, tracks, various, attributes, emit, events, Cloud]
---

# Identity Schema

> Capturing profile data is achieved through the mobile SDK’s identity component. The
  component sets and tracks various profile attributes and emit identity events, which the
  Data Cloud Module listens for. These identity events can contain an aggregate for several
  contact point profile data streams.

# Identity Schema

Capturing profile data is achieved through the mobile SDK’s identity component. The component sets and tracks various profile attributes and emit identity events, which the Data Cloud Module listens for. These identity events can contain an aggregate for several contact point profile data streams.

| Source Event Property | Target Schema Developer Name | Field Type | Description | CIM Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | - |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | Individual / Last Modified Date |
| <Automatically Assigned> | eventType = "identity" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | Individual / Individual Id |
| <Automatically Assigned> | category = "Profile" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. | - |
| <Automatically Assigned> | isAnonymous | text | Required. Indicates if this profile event identifies as an anonymous user or a known user. Possible values are:0 (false)1 (true) | Individual |
| firstName | firstName | text | The first name of the user. | Individual / First Name |
| lastName | lastName | text | The last name of the user. | Individual / Last Name |
| email | email | text | The email address for the user. | Contact Point Email / Email Address |
| phoneNumber | phoneNumber | text | The phone number for the customer. | Contact Point Phone / Formatted E164 Phone Number |
| addressLine1 | addressLine1 | text | The first line detail for the address. | Contact Point Address / Address Line 1 |
| addressLine2 | addressLine2 | text | The second line detail for the address. | Contact Point Address / Address Line 2 |
| addressLine3 | addressLine3 | text | The third line detail for the address. | Contact Point Address / Address Line 3 |
| addressLine4 | addressLine4 | text | The fourth line detail for the address. | Contact Point Address / Address Line 4 |
| city | city | text | The city detail for the address. | Contact Point Address / City Name |
| postalCode | postalCode | text | The postal code or ZIP code for the address. | Contact Point Address |
| stateProvince | stateProvince | text | The state or province detail for the address. | Contact Point Address / State Province |
| country | country | text | The country detail for the address. | Contact Point Address / Country |
| advertiserId | advertiserId | text | The unique identifier provided by Android and iOS platforms that advertisers can use to uniquely identify customers. | Contact Point App / Advertiser Id |
| deviceType | deviceType | text | Type of device the SDK is running on. | - |
| osName | osName | text | The name of the device's operating system. | Contact Point App / operating system Name |
| osVersion | osVersion | text | The version of the device's operating system. | Contact Point App / operating system Version |
| registrationId | registrationId | text | The application ID of the software. | Contact Point App |
| softwareApplicationName | softwareApplicationName | text | The name of the software application. | Contact Point App / Software Application Name |
| softwareApplicationVersion | softwareApplicationVersion | text | The version of the software application. | Contact Point App / Version Number |
| <Automatically Assigned when Location Tracking is allowed> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | - |
| <Automatically Assigned when Location Tracking is allowed> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | - |

## Related Topics

- Location Tracking (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_location_tracking.htm)
