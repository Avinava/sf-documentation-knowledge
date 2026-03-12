---
title: "AsgnRsrcApptSchdEvent"
domain: sfFieldRef
topic: asgnrsrcapptschdevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.085Z
estimatedTokens: 354
keywords: [AsgnRsrcApptSchdEvent, assigned, resources, part, various, platform, events, included, streamed, notification, received, channels, parent, can’t, subscribe]
---

# AsgnRsrcApptSchdEvent

> Represents the assigned resources that are part of various platform events.
      This object is included in a streamed notification received on the channels for the parent
      platform events. You can’t subscribe to the AsgnRsrcApptSchdEvent channel directly. This
    object is available in API version 50.0 and later.

# AsgnRsrcApptSchdEvent

Represents the assigned resources that are part of various platform events. This object is included in a streamed notification received on the channels for the parent platform events. You can’t subscribe to the AsgnRsrcApptSchdEvent channel directly. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AsgnRsrcApptSchdEvent in the Platform Events Developer Guide and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssignedResourceId | Assigned Resource ID | string |  | 30 |  |  |
| ChangedFields | Changed Fields | complexvalue |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| IsPrimaryResource | Primary Resource | boolean |  |  |  |  |
| IsRequiredResource | Required Resource | boolean |  |  |  |  |
| ServiceResourceId | Service Resource ID | string |  | 30 |  |  |
| ServiceResourceUserEmail | Service Resource User Email | string |  | 80 |  |  |
| ServiceResourceUserId | Service Resource User ID | string |  | 30 |  |  |
| ServiceResourceUserName | Service Resource User Name | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
