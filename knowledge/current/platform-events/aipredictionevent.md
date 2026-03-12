---
title: "AIPredictionEvent"
domain: platform-events
topic: aipredictionevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.197Z
estimatedTokens: 823
keywords: [AIPredictionEvent, Notifies, subscribers, Einstein, feature, Prediction, Builder, Case, Classification, written, results, back, target, API, version]
---

# AIPredictionEvent

> Notifies subscribers when an Einstein feature, such as Prediction
      Builder or Case Classification, has written prediction results back to a target object and AI
      prediction field. This object is available in API version 46.0 and later.

# AIPredictionEvent

Notifies subscribers when an Einstein feature, such as Prediction Builder or Case Classification, has written prediction results back to a target object and AI prediction field. This object is available in API version 46.0 and later.

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

/event/AIPredictionEvent

## Special Access Rules

Users with Customize Application permission have read access.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| Confidence | TypedoublePropertiesNillableDescriptionRelative confidence strength of the generated prediction result. Higher values (near 1.0) indicate stronger confidence. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| FieldName | TypestringPropertiesNillableDescriptionAPI name of the AI prediction field that prediction results were written back to. An AI prediction field is a custom field created for storing and displaying the prediction scores on records. The name is specified in ObjectName.FieldName format, for example, Lead.predicted_score__c. For Case Classification prediction results, this field can be null. |
| HasError | TypebooleanPropertiesDefaulted on createDescriptiontrue if there was an error while gathering information to create an event message, false otherwise. |
| InsightId | TypestringPropertiesNillableDescriptionThe unique ID of the created AIRecordInsight record that generated the event message. |
| PredictionEntityId | TypestringPropertiesNillableDescriptionThe unique ID of the created AIInsightValue record associated with the AIRecordInsight that generated the event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| TargetId | TypestringPropertiesNillableDescriptionThe unique ID of the record Einstein is writing prediction results to. |

## Usage

When Einstein writes prediction results back to AI prediction fields, record save custom logic, such as Apex triggers, workflow rules, and assignment rules, aren’t run for efficiency reasons. To add custom logic based on Einstein prediction results, subscribe to AIPredictionEvent for notifications of prediction result updates. Every time prediction results are written back to a Salesforce record, an AIPredictionEvent event is created and AIPredictionEvent subscribers are notified.

#### See Also

-   [*Object Reference for Salesforce and Lightning Platform* : AIRecordInsight](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_airecordinsight.htm " Object Reference for Salesforce and Lightning Platform :
    AIRecordInsight - HTML (New Window)")
