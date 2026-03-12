---
title: "Work Item State Change (sf_devops__Work_Item_State_Change__e)"
domain: devops-center-dev
topic: work-item-state-change-sfdevopsworkitemstatechangee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.612Z
estimatedTokens: 457
keywords: [Work, Item, State, Change, sf_devops__Work_Item_State_Change__e, Notifies, subscribers, State__c, changes, API, version, 62.0, later, _devops, _Work]
---

# Work Item State Change (sf_devops__Work_Item_State_Change__e)

> Notifies subscribers when the State__c field of a work item
         changes. This object is available in API version 62.0 and later.

# Work Item State Change (sf\_devops\_\_Work\_Item\_State\_Change\_\_e)

Notifies subscribers when the State\_\_c field of a work item changes. This object is available in API version 62.0 and later.

This event is empty if the current state is New. In some cases, a work item can revert to a previous state, for example, if it’s not approved for promotion.

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

/event/sf\_devops\_\_Work\_Item\_State\_Change\_\_e

## Event Delivery Allocation Enforced

Yes

## Special Access Rules

DevOps Center package version 8.2 or later must be installed in the org.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| sf_devops__New_State__c | TypestringPropertiesCreateDescriptionThe current state of the work item. |
| sf_devops__Previous_State__c | TypestringPropertiesCreate, NillableDescriptionThe previous state of the work item. |
| sf_devops__Work_Item_Id__c | TypestringPropertiesCreateDescriptionThe ID of the work item that changed state. |
