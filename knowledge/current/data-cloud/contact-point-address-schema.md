---
title: "Contact Point Address Schema"
domain: data-cloud
topic: contact-point-address-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.116Z
estimatedTokens: 633
keywords: [Contact, Point, Address, Schema, capture, profile, data, map, individual, streams, mix, order, provided]
---

# Contact Point Address Schema

> Use the contact point address schema to capture profile data to map to individual data
    streams. An address contains a mix of required and optional fields. In order to create the
    contact point and map it to the individual, all required fields must be provided.

# Contact Point Address Schema

Use the contact point address schema to capture profile data to map to individual data streams. An address contains a mix of required and optional fields. In order to create the contact point and map it to the individual, all required fields must be provided.

| Source Event Property | Target Schema Developer Name | Field Type | Description | CIM Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | - |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | - |
| <Automatically Assigned> | eventType = "contactPointAddress" | text | Required. The developerName of an event defined in the Web Connector schema. | - |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | - |
| <Automatically Assigned> | category = "Profile" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. | - |
| addressLine1 | addressLine1 | text | Required. The first line detail for the address. | - |
| addressLine2 | addressLine2 | text | The second line detail for the address. | - |
| addressLine3 | addressLine3 | text | The third line detail for the address. | - |
| addressLine4 | addressLine4 | text | The fourth line detail for the address. | - |
| city | city | text | Required. The city detail for the address. | Contact Point Address / City |
| postalCode | postalCode | text | Required. The postal code or ZIP code for the address. | Contact Point Address /PostalCode |
| stateProvince | stateProvince | text | Required. The state or province detail for the address. | Contact Point Address /StateProvince |
| country | country | text | Required. The country detail for the address. | - |
| <Automatically Assigned if Location Tracking is allowed> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Longitude |
| <Automatically Assigned if Location Tracking is allowed> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Engagement / Device Latitude |
