---
title: "PendingServiceRouting"
domain: sfFieldRef
topic: pendingservicerouting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.553Z
estimatedTokens: 746
keywords: [PendingServiceRouting, routing, work, item, that’s, waiting, routed, assigned, API, version, 40.0, later]
---

# PendingServiceRouting

> Represents the routing details of a work item that’s waiting to be
			routed or assigned. This object is available in API version 40.0 and
		later.

# PendingServiceRouting

Represents the routing details of a work item that’s waiting to be routed or assigned. This object is available in API version 40.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PendingServiceRouting](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pendingservicerouting.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BotId | Bot ID | reference |  | 18 |  |  |
| BotType | Bot Type | picklist |  | 255 |  |  |
| CapacityPercentage | Capacity Percentage | percent |  |  | 5 | 2 |
| CapacityWeight | Capacity Weight | double |  |  | 10 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CustomRequestedDateTime | Custom Requested Date | datetime |  |  |  |  |
| DropAdditionalSkillsTimeout | Drop Additional Skills Time-Out | int | 9 |  |  |  |
| GroupId | Group ID | reference |  | 18 |  |  |
| Id | Pending Service Routing ID | id |  | 18 |  |  |
| IsConference | Is Conference | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInterruptible | Is Interruptible | boolean |  |  |  |  |
| IsPreferredUserRequired | Is Preferred User Required | boolean |  |  |  |  |
| IsPushAttempted | Is Push Attempted | boolean |  |  |  |  |
| IsPushed | Is Pushed | boolean |  |  |  |  |
| IsReadyForRouting | Is Ready For Routing | boolean |  |  |  |  |
| IsTransfer | Is Transfer | boolean |  |  |  |  |
| LastDeclinedAgentSession | Last Declined Agent Session | string |  | 200 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PausedCapacityPercentage | Percentage of Capacity for Paused Work Items | percent |  |  | 5 | 2 |
| PausedCapacityWeight | Units of Capacity for Paused Work Items | double |  |  | 10 | 2 |
| PreferredUserId | User ID | reference |  | 18 |  |  |
| PushTimeout | Push Time-Out | int | 9 |  |  |  |
| QueueId | Queue ID | reference |  | 18 |  |  |
| RoutingModel | Queue's Routing Model | picklist |  | 255 |  |  |
| RoutingPriority | Routing Priority | int | 9 |  |  |  |
| RoutingType | Routing Type | picklist |  | 255 |  |  |
| Serial | Serial | int | 9 |  |  |  |
| ServiceChannelId | Service Channel ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetAcceptDateTime | Target Accept Date Time | datetime |  |  |  |  |
| TransferRequesterId | User ID | reference |  | 18 |  |  |
| WorkItemId | WorkItem ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
