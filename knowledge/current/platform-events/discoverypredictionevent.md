---
title: "DiscoveryPredictionEvent"
domain: platform-events
topic: discoverypredictionevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.550Z
estimatedTokens: 699
keywords: [DiscoveryPredictionEvent, Notifies, subscribers, Einstein, Discovery, written, prediction, history, results, API, version, 57.0, later, Calls, Subscription]
---

# DiscoveryPredictionEvent

> Notifies subscribers when Einstein Discovery has written prediction
   history results. This object is available in API version 57.0 and later.

# DiscoveryPredictionEvent

Notifies subscribers when Einstein Discovery has written prediction history results. This object is available in API version 57.0 and later.

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

/event/DiscoveryPredictionEvent

## Special Access Rules

Users with CRM Analytics licenses have read access.

## Fields

| Field | Details |
| --- | --- |
| ActualValue | TypestringPropertiesNillableDescriptionThe actual value of the outcome field on the Einstein Discovery predicted object. |
| CreatedBy | TypeuserPropertiesNillableDescriptionThe user that started the Einstein Discovery prediction run. |
| CreatedById | TypeIDPropertiesNillableDescriptionThe unique ID of the user that started the Einstein Discovery prediction run. |
| CreatedDate | TypedateTimePropertiesNillableDescriptionThe creation date of the event. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| GoalId | TypestringPropertiesNillableDescriptionThe unique ID of the Einstein Discovery prediction goal. |
| HasError | TypebooleanPropertiesDefaulted on createDescriptiontrue if there was an error while making the prediction, false otherwise. |
| ModelId | TypestringPropertiesNillableDescriptionThe unique ID of the Einstein Discovery model used for the prediction. |
| PredictedValue | TypestringPropertiesNillableDescriptionThe predicted value from the Einstein Discovery prediction run. |
| PredictionTime | TypedateTimePropertiesNillableDescriptionThe date and time of the Einstein Discovery prediction run. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RunId | TypestringPropertiesNillableDescriptionThe unique ID of the Einstein Discovery prediction run. |
| TargetEntity | TypestringPropertiesNillableDescriptionThe target entity that Einstein Discovery is writing prediction results to. |
| TargetField | TypestringPropertiesNillableDescriptionThe target field that Einstein Discovery is writing the prediction value to. |
| TargetId | TypestringPropertiesNillableDescriptionThe unique ID of the target entity Einstein Discovery is writing prediction results to. |
| ValueType | TypestringPropertiesNillableDescriptionThe type of the Einstein Discovery prediction value. |
