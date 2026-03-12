---
title: "AppvlWorkItemNtfcnEvent"
domain: platform-events
topic: appvlworkitemntfcnevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.293Z
estimatedTokens: 713
keywords: [AppvlWorkItemNtfcnEvent, Tracks, asynchronous, management, notification, systems, Advanced, Approvals, API, version, 66.0, later, Calls, Subscribers, Event]
---

# AppvlWorkItemNtfcnEvent

> Tracks the asynchronous management of notification systems in
			Advanced Approvals. This object is available in API version 66.0 and
		later.

# AppvlWorkItemNtfcnEvent

Tracks the asynchronous management of notification systems in Advanced Approvals. This object is available in API version 66.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available in Enterprise, Professional, Unlimited, and Developer Editions where Advanced Approvals is enabled.

## Fields

| Field | Details |
| --- | --- |
| ApprovalFlowApiName | TypestringPropertiesNone.DescriptionRequired.The API name of the approval workflow. |
| ApprovalStepApiName | TypestringPropertiesNillableDescriptionThe unique API name of the approval step. |
| ApprovalWorkItemId | TypereferencePropertiesNillableDescriptionThe ID of the approval work item.This field is a relationship field.Relationship NameApprovalWorkItemRefers ToApprovalWorkItem |
| ApprovalWorkItemName | TypestringPropertiesNillableDescriptionThe name of the approval work item. |
| CorrelationIdentifier | TypestringPropertiesNoneDescriptionRequired.The correlation ID associated with the notification. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| NotificationAssigneeId | TypereferencePropertiesNoneDescriptionRequired.The ID of the user, group, or queue that receives the approval notification.This field is a polymorphic relationship field.Relationship NameNotificationAssigneeRefers ToGroup, Group, User |
| NotificationBody | TypestringPropertiesNillableDescriptionThe content body of the notification. |
| NotificationChannel | TypestringPropertiesNoneDescriptionRequired.The channel used to send the notification. |
| NotificationReason | TypestringPropertiesNoneDescriptionRequired.The reason within an approval step's lifecycle that triggers the notification. For example, when an approval work item is moved from one user to another, a reassignment notification is sent to the user. |
| NotificationSubject | TypestringPropertiesNillableDescriptionThe subject of the notification. |
| RelatedRecordIdentifier | TypestringPropertiesNoneDescriptionRequired.The ID of the record that's submitted for approval. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNoneDescriptionRequired.The unique identifier for the notification. |
