---
title: "AgentWork"
domain: sfFieldRef
topic: agentwork
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.866Z
estimatedTokens: 956
keywords: [AgentWork, work, assignment, that’s, routed, agent, transferred, another, new, record, created, API, version, 32.0, later]
---

# AgentWork

> Represents a work assignment that’s been routed to an agent. If the
			work is transferred to another agent, a new AgentWork record is created. This object is
			available in API version 32.0 and later.

# AgentWork

Represents a work assignment that’s been routed to an agent. If the work is transferred to another agent, a new AgentWork record is created. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AgentWork](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_agentwork.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AbandonedDateTime | Abandoned Date Time | datetime |  |  |  |  |
| AcceptDateTime | Accept Date | datetime |  |  |  |  |
| ActiveTime | Active Time | int | 9 |  |  |  |
| AcwExtensionCount | After Conversation Work Extension Count | int | 9 |  |  |  |
| AcwExtensionDuration | After Conversation Work Extension Duration | int | 9 |  |  |  |
| AfterConversationActualTime | After Conversation Work Actual Time | int | 9 |  |  |  |
| AgentCapacityWhenDeclined | Agent Capacity when Declined | double |  |  | 10 | 2 |
| AgentIntCapacityWhenDeclined | Agent Interruptible Capacity when Declined | double |  |  | 10 | 2 |
| AssignedDateTime | Assign Date | datetime |  |  |  |  |
| BotId | Bot ID | reference |  | 18 |  |  |
| BotType | Bot Type | picklist |  | 255 |  |  |
| CancelDateTime | Cancel Date | datetime |  |  |  |  |
| CapacityPercentage | Percentage of Capacity | percent |  |  | 5 | 2 |
| CapacityWeight | Units of Capacity | double |  |  | 10 | 2 |
| CloseDateTime | Close Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DeclineDateTime | Decline Date | datetime |  |  |  |  |
| DeclineReason | Decline Reason | string |  | 200 |  |  |
| HandleTime | Handle Time | int | 9 |  |  |  |
| Id | Agent Work ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInterruptible | Is Interruptible | boolean |  |  |  |  |
| IsPreferredUserRequired | Is Preferred User Required | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OriginalGroupId | Group ID | reference |  | 18 |  |  |
| OriginalQueueId | Queue ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PausedCapacityPercentage | Percentage of Capacity for Paused Work Items | percent |  |  | 5 | 2 |
| PausedCapacityWeight | Units of Capacity for Paused Work Items | double |  |  | 10 | 2 |
| PendingServiceRoutingId | Pending Service Routing ID | reference |  | 18 |  |  |
| PreferredUserId | User ID | reference |  | 18 |  |  |
| PushTimeout | Push Time-Out | int | 9 |  |  |  |
| PushTimeoutDateTime | Push Time-Out Date | datetime |  |  |  |  |
| RequestDateTime | Request Date | datetime |  |  |  |  |
| RoutingModel | Routing Model | picklist |  | 255 |  |  |
| RoutingPriority | Routing Priority | int | 9 |  |  |  |
| RoutingType | Routing Type | picklist |  | 255 |  |  |
| ServiceChannelId | Service Channel ID | reference |  | 18 |  |  |
| ShouldSkipCapacityCheck | Should Skip Capacity Check | boolean |  |  |  |  |
| SpeedToAnswer | Speed To Answer | int | 9 |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetAcceptDateTime | Target Accept Date Time | datetime |  |  |  |  |
| TransferRequesterId | User ID | reference |  | 18 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| WorkItemId | WorkItem ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
