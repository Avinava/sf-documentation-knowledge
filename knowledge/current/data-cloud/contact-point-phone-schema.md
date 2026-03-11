---
title: "Contact Point Phone Schema"
domain: data-cloud
topic: contact-point-phone-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.231Z
keywords: [Contact, Point, Phone, Schema]
---

# Contact Point Phone Schema

# Contact Point Phone Schema

Use the contact point phone schema to capture profile data to map to individual data streams.

| Source Event Property | Target Schema Developer Name | Field Type | Description | CIM Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | - |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | - |
| <Automatically Assigned> | eventType = "contactPointPhone" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | - |
| <Automatically Assigned> | category = "Profile" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. | - |
| phoneNumber | phoneNumber | text | Required. The phone number for the customer. | Contact Point Phone |
| <Automatically Assigned when Location Tracking is allowed> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Longitude |
| <Automatically Assigned when Location Tracking is allowed> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Latitude |