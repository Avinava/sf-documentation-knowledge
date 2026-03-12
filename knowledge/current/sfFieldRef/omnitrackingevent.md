---
title: "OmniTrackingEvent"
domain: sfFieldRef
topic: omnitrackingevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.405Z
estimatedTokens: 282
keywords: [OmniTrackingEvent, Notifies, subscribers, user, interaction, FlexCard, OmniScript, that's, tracked, OmniAnalytics, API, version, 60.0, later]
---

# OmniTrackingEvent

> Notifies subscribers about a user interaction with a FlexCard or OmniScript
         that's tracked for OmniAnalytics. This object is available in API version 60.0 and
      later.

# OmniTrackingEvent

Notifies subscribers about a user interaction with a FlexCard or OmniScript that's tracked for OmniAnalytics. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OmniTrackingEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionContainerName | Action Container Name | string |  | 255 |  |  |
| ComponentType | Component Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventName | Event Name | string |  | 255 |  |  |
| EventPayload | Event Payload | textarea |  | 131072 |  |  |
| EventUuid | Event Uu Id | string |  | 36 |  |  |
| ReplayId | Replay Id | string |  | 1000 |  |  |
| Timestamp | Timestamp | datetime |  |  |  |  |
| TrackingCategory | Tracking Category | string |  | 40 |  |  |
| TrackingGroup | Tracking Group | string |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
