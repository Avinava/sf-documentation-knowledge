---
title: "InsPlcyEndrStatusEvent"
domain: platform-events
topic: insplcyendrstatusevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.704Z
estimatedTokens: 445
keywords: [InsPlcyEndrStatusEvent, Notifies, subscribers, status, insurance, policy, endorsement, API, version, 65.0, later, Calls, Subscription, Channel, Event]
---

# InsPlcyEndrStatusEvent

> Notifies subscribers of the status of the insurance policy
			endorsement. This object is available in API version 65.0 and later.

# InsPlcyEndrStatusEvent

Notifies subscribers of the status of the insurance policy endorsement. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Flows |  |
| Processes |  |

## Subscription Channel

/event/InsPlcyEndrStatusEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, NillableDescriptionAdditional details from the policy endorsement service, such as error messages. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| JobIdentifier | TypestringPropertiesCreate, NillableDescriptionID of the job that triggered this event. |
| LatestEndorsedPolicy | TypestringPropertiesCreate, NillableDescriptionThe latest policy version created by the endorsement service. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| SourcePolicy | TypestringPropertiesCreate, NillableDescriptionThe policy record being endorsed. |
| Status | TypepicklistPropertiesCreate, Restricted picklistDescriptionThe status of the policy endorsement event.Possible values are:FailureSuccess |
| Type | TypepicklistPropertiesCreate, Restricted picklistDescriptionSpecifies the type of endorsement.Possible values are:Mid-Term EndorsementOut-of-Sequence Endorsement |
