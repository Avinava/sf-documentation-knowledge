---
title: "UnifiedActivityParticipant"
domain: sfFieldRef
topic: unifiedactivityparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.589Z
estimatedTokens: 272
keywords: [UnifiedActivityParticipant, participant, activity, voice, call, someone, initiated, received, call.This, reports, dashboards, Winter, ’24, release, later]
---

# UnifiedActivityParticipant

> Represents a participant in an activity. For example, a participant
         in a voice call is someone who initiated the call or someone who received the
      call.This object is available for reports and dashboards in the Winter ’24 release and
      later.

# UnifiedActivityParticipant

Represents a participant in an activity. For example, a participant in a voice call is someone who initiated the call or someone who received the call.This object is available for reports and dashboards in the Winter ’24 release and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UnifiedActivityParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_unifiedactivityparticipant.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityId | Unified Activity ID | reference |  | 18 |  |  |
| ChannelAddress | Email Address or Phone Number | string |  | 255 |  |  |
| Id | Unified Activity Participant ID | id |  | 18 |  |  |
| ParticipantType | Participant Type | picklist |  | 255 |  |  |
| PersonId | Person ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
