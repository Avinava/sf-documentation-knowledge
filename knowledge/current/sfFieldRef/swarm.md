---
title: "Swarm"
domain: sfFieldRef
topic: swarm
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:14.989Z
estimatedTokens: 537
keywords: [Swarm, team, agents, Salesforce, users, Slack, channel, thread, dedicated, solving, problem, support, case, incident, sales]
---

# Swarm

> Represents a team of agents, Salesforce users, or Slack users in a Slack
         channel or thread dedicated to solving a problem. This problem can be related to a support
         case, incident, sales opportunity, or change request. This object is available in API
      version 55.0 and later.

# Swarm

Represents a team of agents, Salesforce users, or Slack users in a Slack channel or thread dedicated to solving a problem. This problem can be related to a support case, incident, sales opportunity, or change request. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Swarm](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_swarm.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChannelType | Channel Type | picklist |  | 255 |  |  |
| CollaborationRoomId | Collaboration Room ID | reference |  | 18 |  |  |
| CollaborationTool | Collaboration Tool | picklist |  | 255 |  |  |
| CollaborationUrl | Collaboration URL | url |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndedDateTime | Ended Date Time | datetime |  |  |  |  |
| HelpNeeded | Swarm Description | textarea |  | 32000 |  |  |
| Id | Swarm ID | id |  | 18 |  |  |
| IsDedicatedChannel | Dedicated Channel | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MessageKey | Message Timestamp | string |  | 254 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedRecordId | RelatedRecord ID | reference |  | 18 |  |  |
| StartedDateTime | Started Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
