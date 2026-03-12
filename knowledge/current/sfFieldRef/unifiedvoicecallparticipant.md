---
title: "UnifiedVoiceCallParticipant"
domain: sfFieldRef
topic: unifiedvoicecallparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.614Z
estimatedTokens: 273
keywords: [UnifiedVoiceCallParticipant, participant, voice, call, reports, dashboards, Winter, ’24, release, later]
---

# UnifiedVoiceCallParticipant

> Represents a participant in a voice call. This object is available for
      reports and dashboards in the Winter ’24 release and later.

# UnifiedVoiceCallParticipant

Represents a participant in a voice call. This object is available for reports and dashboards in the Winter ’24 release and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UnifiedVoiceCallParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_unifiedvoicecallparticipant.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityId | Unified Voice Call ID | reference |  | 18 |  |  |
| ChannelAddress | Email Address or Phone Number | string |  | 255 |  |  |
| Id | Unified Voice Call Participant ID | id |  | 18 |  |  |
| ListenRatio | Listen Ratio | double |  |  | 18 | 0 |
| ParticipantType | Participant Type | picklist |  | 255 |  |  |
| PersonId | Person ID | reference |  | 18 |  |  |
| TalkRatio | Talk Ratio | double |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
