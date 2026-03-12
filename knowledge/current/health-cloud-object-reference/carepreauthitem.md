---
title: "CarePreauthItem"
domain: health-cloud-object-reference
topic: carepreauthitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.368Z
estimatedTokens: 1265
keywords: [CarePreauthItem, items, included, preauthorization, care, under, member’s, plan, Calls, Associated, Objects]
---

# CarePreauthItem

> Represents the details of items included in a preauthorization for
			care under a member’s plan.

# CarePreauthItem

Represents the details of items included in a preauthorization for care under a member’s plan.

## Supported Calls

create(),  delete(),  describeLayout(),  describeSObjects(),  getDeleted(),  getUpdated(),  query(),  retrieve(),  search(),  undelete(),  update(),  upsert()

## Fields

| Field Name | Details |
| --- | --- |
| CarePreauthId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the care preauthorization this item details. |
| EndingServiceCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ending service code for the category of care being provided. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Laterality | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe side of the body receiving care. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of this preauthorized care item. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes about this preauthorized care item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PreauthitemSequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSequence of this item among the preauthorized care items. |
| Quantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionQuantity being preauthorized. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this preauthorization record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this preauthorization record on its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this preauthorization was last changed on its source system. |
| StartingServiceCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe starting service code for the category of care being provided. |
| Unit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnits by which the preauthorized quantity is measured. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CarePreauthItemChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CarePreauthItemFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePreauthItemHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CarePreauthItemOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CarePreauthItemShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CarePreauthItemChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CarePreauthItemFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CarePreauthItemHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CarePreauthItemOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CarePreauthItemShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
