---
title: "UnifiedVoiceCall"
domain: sfFieldRef
topic: unifiedvoicecall
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.610Z
estimatedTokens: 314
keywords: [UnifiedVoiceCall, voice, call, captured, synced, VoiceCall, Task, record, reports, dashboards, Winter, ’24, release, later]
---

# UnifiedVoiceCall

> Represents a voice call that is captured or synced from a VoiceCall
         or Task record. This object is available for reports and dashboards in the Winter ’24
      release and later.

# UnifiedVoiceCall

Represents a voice call that is captured or synced from a VoiceCall or Task record. This object is available for reports and dashboards in the Winter ’24 release and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UnifiedVoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_unifiedvoicecall.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityDateTime | Activity Date and Time | datetime |  |  |  |  |
| ActivitySubType | Activity Subtype | picklist |  | 255 |  |  |
| ActivityType | Activity Type | picklist |  | 255 |  |  |
| CallDurationInSeconds | Call Duration | int | 8 |  |  |  |
| DetailId | Voice Call ID | reference |  | 18 |  |  |
| Id | Unified Voice Call ID | id |  | 18 |  |  |
| InternalEventKey | Internal Event Key | string |  | 255 |  |  |
| IsInsightAvailable | Insight Available | boolean |  |  |  |  |
| Snippet | Snippet | string |  | 255 |  |  |
| Subject | Subject | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
