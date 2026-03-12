---
title: "Work Item Commit (sf_devops__Work_Item_Commit__e)"
domain: devops-center-dev
topic: work-item-commit-sfdevopsworkitemcommite
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.588Z
estimatedTokens: 428
keywords: [Work, Item, Commit, sf_devops__Work_Item_Commit__e, Notifies, subscribers, whenever, occurs, item’s, feature, branch, API, version, 62.0, later]
---

# Work Item Commit (sf_devops__Work_Item_Commit__e)

> Notifies subscribers whenever a commit occurs on a work item’s feature
         branch. This object is available in API version 62.0 and later.

# Work Item Commit (sf\_devops\_\_Work\_Item\_Commit\_\_e)

Notifies subscribers whenever a commit occurs on a work item’s feature branch. This object is available in API version 62.0 and later.

The event isn’t generated if a commit occurs on a feature branch after a work item has been promoted.

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

/event/sf\_devops\_\_Work\_Item\_Commit\_\_e

## Event Delivery Allocation Enforced

Yes

## Special Access Rules

DevOps Center package version 8.2 or later must be installed in the org.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| sf_devops__Remote_Reference__c | TypestringPropertiesCreateDescriptionThe unique ID of the commit in the source control system. |
| sf_devops__Work_Item_Id__c | TypestringPropertiesCreateDescriptionThe ID of the work item associated with the commit on the work item’s feature branch. |
