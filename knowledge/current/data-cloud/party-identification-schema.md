---
title: "Party Identification Schema"
domain: data-cloud
topic: party-identification-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.288Z
keywords: [Party, Identification, Schema]
---

# Party Identification Schema

# Party Identification Schema

Use the party identification schema to capture profile data to map to individual data streams.

| Source Event Property | Target Schema Developer Name | Field Type | Description | CIM Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | - |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | - |
| <Automatically Assigned> | eventType = "partyIdentification" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | Party Identification /Party Identification Id |
| <Automatically Assigned> | category = "Profile" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. | - |
| IDName | iDName | text | Required. The party identification name. | Party Identification /Identification Name |
| IDType | iDType | text | Required. The party identification type. | Party Identification /Party Identification Type |
| userId | userId | text | Required. The user identifier in the party. | Party Identification /Identification Number |
| <Automatically Assigned if Location Tracking is allowed> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Longitude |
| <Automatically Assigned if Location Tracking is allowed> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Latitude |