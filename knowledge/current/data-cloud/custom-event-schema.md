---
title: "Custom Event Schema"
domain: data-cloud
topic: custom-event-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.238Z
keywords: [Custom, Event, Schema]
---

# Custom Event Schema

# Custom Event Schema

Use the event data models provided by the Engagement Mobile SDK for cart event, catalog event, and order event to use the unified data model across Salesforce. You can create and capture a custom event.

Define the custom event in the Mobile Connector schema:

| Source Event Property | Target Schema Developer Name | Field Type | Description | CIM Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | - |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | - |
| name | eventType = <what the user defined in name property> | text | Required. The name defined in property suffixed with eventType. Example: The name Custom Event is transformed to: "eventType": "Custom Event". | - |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | - |
| <Automatically Assigned> | category = "Engagement" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. | - |
| <user defined attributes array>NoteAttributes array can contain nested arrays. | <attributes as defined by user> | <user defined> | Custom Event | - |
| <Automatically Assigned when Location Tracking is allowed> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Device Longitude |
| <Automatically Assigned when Location Tracking is allowed> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Device Latitude |

If eventType isn’t provided but name is then eventType defaults to the value of name. For example, the schema could look like:

```

```