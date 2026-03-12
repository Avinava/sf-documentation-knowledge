---
title: "LiveAgentSession"
domain: sfFieldRef
topic: liveagentsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.450Z
estimatedTokens: 574
keywords: [LiveAgentSession, automatically, created, Chat, session, stores, API, versions, 28.0, later]
---

# LiveAgentSession

> This object is automatically created for each Chat session and stores
   information about the session. This object is available in API versions 28.0 and
  later.

# LiveAgentSession

This object is automatically created for each Chat session and stores information about the session. This object is available in API versions 28.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LiveAgentSession](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_liveagentsession.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AgentId | User ID | reference |  | 18 |  |  |
| ChatReqAssigned | Chat Requests Assigned | int | 9 |  |  |  |
| ChatReqDeclined | Chat Requests Declined (Manually) | int | 9 |  |  |  |
| ChatReqEngaged | Chat Requests Engaged | int | 9 |  |  |  |
| ChatReqTimedOut | Chat Requests Declined (Push Timeout) | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Chat Session ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoginTime | Login Time | datetime |  |  |  |  |
| LogoutTime | Logout Time | datetime |  |  |  |  |
| Name | Chat Session Name | string |  | 255 |  |  |
| NumFlagLoweredAgent | Assistance Flags Lowered (Agent) | int | 9 |  |  |  |
| NumFlagLoweredSupervisor | Assistance Flags Lowered (Supervisor) | int | 9 |  |  |  |
| NumFlagRaised | Assistance Flags Raised | int | 9 |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeAtCapacity | Time Spent at Capacity | int | 9 |  |  |  |
| TimeIdle | Time Idle | int | 9 |  |  |  |
| TimeInAwayStatus | Time Spent Away | int | 9 |  |  |  |
| TimeInChats | Time Spent in Chats | int | 9 |  |  |  |
| TimeInOnlineStatus | Time Spent Online | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
