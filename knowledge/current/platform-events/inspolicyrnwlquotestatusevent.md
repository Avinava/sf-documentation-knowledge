---
title: "InsPolicyRnwlQuoteStatusEvent"
domain: platform-events
topic: inspolicyrnwlquotestatusevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.709Z
estimatedTokens: 365
keywords: [InsPolicyRnwlQuoteStatusEvent, Notifies, subscribers, status, renewal, quote, policy, process, API, version, 64.0, later, Calls, Subscription, Channel]
---

# InsPolicyRnwlQuoteStatusEvent

> Notifies
			subscribers of the status of a renewal quote during the policy renewal
			process. This object is available in API version
		64.0
		and later.

# InsPolicyRnwlQuoteStatusEvent

Notifies subscribers of the status of a renewal quote during the policy renewal process. This object is available in API version 64.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Flows |  |
| Pub/Sub API |  |

## Subscription Channel

/event/InsPolicyRnwlQuoteStatusEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InsurancePolicyIdentifier | TypestringPropertiesCreate, NillableDescriptionThe ID of the policy being renewed. |
| JobIdentifier | TypestringPropertiesCreate, NillableDescriptionThe ID of the job that triggered this event. |
| QuoteIdentifier | TypestringPropertiesCreate, NillableDescriptionThe ID of the renewal quote. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| Status | TypepicklistPropertiesCreate, Restricted picklistDescriptionThe status of the renewal quote event.Possible values are:FailureSuccess |
