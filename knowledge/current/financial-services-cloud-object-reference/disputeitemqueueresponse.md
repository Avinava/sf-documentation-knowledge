---
title: "DisputeItemQueueResponse"
domain: financial-services-cloud-object-reference
topic: disputeitemqueueresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.019Z
estimatedTokens: 1031
keywords: [DisputeItemQueueResponse, received, job, that’s, run, fetch, claim, API, version, 61.0, later, Calls, Associated, Objects]
---

# DisputeItemQueueResponse

> Represents the response received from the job that’s run to fetch the claim
         details. This object is available in API version 61.0 and later.

# DisputeItemQueueResponse

Represents the response received from the job that’s run to fetch the claim details. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisputeItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Dispute Item that's associated with the queue response.This field is a relationship field.Relationship NameDisputeItemRelationship TypeMaster-detailRefers ToDisputeItem (the master object) |
| DisputeQueueJobRunId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Dispute Queue Job Run that's associated with the dispute item queue response.This field is a relationship field.Relationship NameDisputeQueueJobRunRelationship TypeLookupRefers ToDisputeQueueJobRun |
| QueueName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the queue that's the source of the response. |
| QueueResponse | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe dispute item claim details received from a queue. |
| ResponseProcessingStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the update received for a claim from the queue is processed (true) or not (false).Possible values are:CompletedIn Progress |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DisputeItemQueueResponseChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[DisputeItemQueueResponseFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DisputeItemQueueResponseHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DisputeItemQueueResponseOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DisputeItemQueueResponseShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DisputeItemQueueResponseChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DisputeItemQueueResponseFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- DisputeItemQueueResponseHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DisputeItemQueueResponseOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DisputeItemQueueResponseShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
