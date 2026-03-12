---
title: "DeliveryTask"
domain: retail-api
topic: deliverytask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.536Z
estimatedTokens: 750
keywords: [DeliveryTask, shipments, orders, delivered, store, visit, API, version, 50.0, later, Calls, Associated, Objects]
---

# DeliveryTask

> Represents information about shipments and orders to be delivered to a store in
      a visit. This object is available in API version 50.0 and later.

# DeliveryTask

Represents information about shipments and orders to be delivered to a store in a visit. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentTaskId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated assessment task. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the delivery task. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the delievry task. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this record. |
| PlaceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLocation to which delivery is to be made. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUser defined status of the delivery task.Possible values are:CompletedIn ProgressNot Started |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of delivery task.Possible values are:CompletedInProgressNotStarted |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the visit associated with the delivery task |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[DeliveryTaskOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DeliveryTaskShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[DeliveryTaskFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

## Related Topics

- DeliveryTaskOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- DeliveryTaskShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
- DeliveryTaskFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
