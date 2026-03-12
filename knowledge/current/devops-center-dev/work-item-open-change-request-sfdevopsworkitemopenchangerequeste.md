---
title: "Work Item Open Change Request (sf_devops__Work_Item_Open_Change_Request__e)"
domain: devops-center-dev
topic: work-item-open-change-request-sfdevopsworkitemopenchangerequeste
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.598Z
estimatedTokens: 564
keywords: [Work, Item, Open, Change, Notifies, subscribers, whenever, pull, opened, API, version, 62.0, later, _devops, _Work]
---

# Work Item Open Change Request (sf_devops__Work_Item_Open_Change_Request__e)

> Notifies subscribers whenever a change request (pull request) is
         opened for a work item. This object is available in API version 62.0 and
      later.

# Work Item Open Change Request (sf\_devops\_\_Work\_Item\_Open\_Change\_Request\_\_e)

Notifies subscribers whenever a change request (pull request) is opened for a work item. This object is available in API version 62.0 and later.

This event occurs whether the change request was initiated in DevOps Center or directly in the source control system. For changes made in feature branches, the change request is associated with the first pipeline stage. After a promotion to a pipeline stage, the event is generated for the next pipeline stage. This event is generated after a promotion as well as when a change request is opened for the next pipeline stage.

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

/event/sf\_devops\_\_Work\_Item\_Open\_Change\_Request\_\_e

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
| sf_devops__Target_Stage_Id__c | TypestringPropertiesCreate, NillableDescriptionThe ID of the pipeline stage where the change request will be merged. |
| sf_devops__Work_Item_Id__c | TypestringPropertiesCreate, NillableDescriptionThe ID of the work item associated with the newly created change request. |
