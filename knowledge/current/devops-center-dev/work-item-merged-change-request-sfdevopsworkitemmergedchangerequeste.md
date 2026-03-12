---
title: "Work Item Merged Change Request (sf_devops__Work_Item_Merged_Change_Request__e)"
domain: devops-center-dev
topic: work-item-merged-change-request-sfdevopsworkitemmergedchangerequeste
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.593Z
estimatedTokens: 519
keywords: [Work, Item, Merged, Change, Notifies, subscribers, item’s, metadata, pipeline, stage’s, branch, API, version, 62.0, later]
---

# Work Item Merged Change Request (sf_devops__Work_Item_Merged_Change_Request__e)

> Notifies subscribers when a work item’s metadata is merged into a
         pipeline stage’s branch. This object is available in API version 62.0 and later.

# Work Item Merged Change Request (sf\_devops\_\_Work\_Item\_Merged\_Change\_Request\_\_e)

Notifies subscribers when a work item’s metadata is merged into a pipeline stage’s branch. This object is available in API version 62.0 and later.

## Supported Calls

create(), describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Streaming API Subscription Channel

/event/sf\_devops\_\_Work\_Item\_Merged\_Change\_Request\_\_e

## Event Delivery Allocation Enforced

Yes

## Special Access Rules

DevOps Center package version 8.2 or later must be installed in the org.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| sf_devops__Remote_Reference__c | TypestringPropertiesCreate, NillableDescriptionThe unique ID of the change request in the source control system. |
| sf_devops__Source_Stage_Id__c | TypestringPropertiesCreate, NillableDescriptionThe ID of the source pipeline stage if the changes were merged from a pipeline stage to the next pipeline stage. Not applicable if the changes were merged from a work item’s feature branch. |
| sf_devops__Target_Stage_Id__c | TypestringPropertiesCreate, NillableDescriptionThe ID for the target pipeline stage. |
| sf_devops__Work_Item_Id__c | TypestringPropertiesCreate, NillableDescriptionThe ID of the work item that contained the changes that were merged. |
