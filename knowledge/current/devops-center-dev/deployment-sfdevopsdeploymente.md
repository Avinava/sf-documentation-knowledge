---
title: "Deployment (sf_devops__Deployment__e)"
domain: devops-center-dev
topic: deployment-sfdevopsdeploymente
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.460Z
estimatedTokens: 490
keywords: [Deployment, sf_devops__Deployment__e, Notifies, subscribers, work, item’s, metadata, deployed, pipeline, stage, API, version, 62.0, later, _devops]
---

# Deployment (sf_devops__Deployment__e)

> Notifies subscribers when a work item’s metadata is deployed to a pipeline
         stage. This object is available in API version 62.0 and later.

# Deployment (sf\_devops\_\_Deployment\_\_e)

Notifies subscribers when a work item’s metadata is deployed to a pipeline stage. This object is available in API version 62.0 and later.

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

/event/sf\_devops\_\_Deployment\_\_e

## Event Delivery Allocation Enforced

Yes

## Special Access Rules

DevOps Center package version 8.2 or later must be installed in the org.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| sf_devops__Change_Bundle_Id__c | TypestringPropertiesCreate, NillableDescriptionThe ID of the work item change bundle that was deployed. This field is empty if an individual work item was deployed. |
| sf_devops__Deployment_Id__c | TypestringPropertiesCreate, NillableDescriptionThe ID for the deployment in the target org. |
| sf_devops__Target_Stage_Id__c | TypestringPropertiesCreate, NillableDescriptionThe ID of the target stage to which the changes were deployed. |
| sf_devops__Work_Item_Id__c | TypestringPropertiesCreate, NillableDescriptionThe ID of the work item that was deployed. This field is empty if a work item change bundle was deployed. |
