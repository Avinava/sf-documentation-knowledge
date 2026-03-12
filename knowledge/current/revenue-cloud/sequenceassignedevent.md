---
title: "SequenceAssignedEvent"
domain: revenue-cloud
topic: sequenceassignedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.484Z
estimatedTokens: 504
keywords: [SequenceAssignedEvent, notification, customers, assignment, sequence, target, record, process, initiated, sequences, actions, assign, API, version, 65.0]
---

# SequenceAssignedEvent

> Represents the notification to customers about the assignment of a sequence
         to a target record. This process is initiated by the /sequences/actions/assign request. This object is available in API
      version 65.0 and later.

# SequenceAssignedEvent

Represents the notification to customers about the assignment of a sequence to a target record. This process is initiated by the /sequences/actions/assign request. This object is available in API version 65.0 and later.

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

## Subscription Channel

/event/SequenceAssignedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Billing and Sequential Numbering is enabled.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that’s populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SequenceAssignmentDateTime | TypedateTimePropertiesNillableDescriptionThe date and time when the sequence pattern value was assigned to the target record. |
| SequencePatternValue | TypestringPropertiesNillableDescriptionThe complete sequence value that’s assigned to the target record. |
| SequencePolicyIdentifier | TypestringPropertiesNillableDescriptionThe ID of the sequence policy that’s related to the event. |
| SequenceValue | TypestringPropertiesNillableDescriptionThe sequence value that’s assigned to the target record. |
| TargetObjectName | TypestringPropertiesNillableDescriptionThe name of the object to which the sequence policy is applicable. |
| TargetRecordIdentifier | TypestringPropertiesNillableDescriptionThe ID of the target record to which the sequence policy is applied. |
