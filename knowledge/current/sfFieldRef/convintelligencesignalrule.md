---
title: "ConvIntelligenceSignalRule"
domain: sfFieldRef
topic: convintelligencesignalrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.532Z
estimatedTokens: 462
keywords: [ConvIntelligenceSignalRule, conversation, intelligence, signal, rule, triggers, actions, real-time, signals, telephony, system, keywords, mentioned, support, reps]
---

# ConvIntelligenceSignalRule

> Represents a conversation intelligence signal rule. The rule triggers
      actions based on real-time intelligence signals from your telephony system or keywords
      mentioned by support reps or customers. The rule contains a set of conditions (subrules) and
      the filter logic used to evaluate those conditions to determine whether to trigger actions.
      This object is available in API
      version 62.0 and later.

# ConvIntelligenceSignalRule

Represents a conversation intelligence signal rule. The rule triggers actions based on real-time intelligence signals from your telephony system or keywords mentioned by support reps or customers. The rule contains a set of conditions (subrules) and the filter logic used to evaluate those conditions to determine whether to trigger actions. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ConvIntelligenceSignalRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_convintelligencesignalrule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionType | Action Type | picklist |  | 255 |  |  |
| ActionValue | Action Value | string |  | 255 |  |  |
| ConversationChannelId | Conversation Channel ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Criteria | Criteria | string |  | 255 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| Id | Conversation Intelligence Signal Rule ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Label | Label | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ParticipantRole | Participant Role | picklist |  | 255 |  |  |
| Service | Service | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
