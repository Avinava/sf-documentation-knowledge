---
title: "InsPolicyRnwlStatusEvent"
domain: platform-events
topic: inspolicyrnwlstatusevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.714Z
estimatedTokens: 345
keywords: [InsPolicyRnwlStatusEvent, Notifies, subscribers, status, policy, renewal, API, version, 64.0, later, Calls, Subscription, Channel, Event, Delivery]
---

# InsPolicyRnwlStatusEvent

> Notifies subscribers of the status of the policy renewal. This
		object is available in API version 64.0 and later.

# InsPolicyRnwlStatusEvent

Notifies subscribers of the status of the policy renewal. This object is available in API version 64.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Flows |  |
| Pub/Sub API |  |

## Subscription Channel

/event/InsPolicyRnwlStatusEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| JobIdentifier | TypestringPropertiesCreate, NillableDescription |
| RenewedPolicyIdentifier | TypestringPropertiesCreate, NillableDescriptionThe ID of the renewed policy. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SourcePolicyIdentifier | TypestringPropertiesCreate, NillableDescriptionThe ID of the policy being renewed. |
| Status | TypepicklistPropertiesCreate, Restricted picklistDescriptionThe status of the policy renewal event.Possible values are:FailureSuccess |
