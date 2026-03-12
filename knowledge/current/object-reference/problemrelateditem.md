---
title: "ProblemRelatedItem"
domain: object-reference
topic: problemrelateditem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.150Z
estimatedTokens: 803
keywords: [ProblemRelatedItem, junction, relates, Problem, Asset, API, version, 53.0, later, Calls, Associated, Objects]
---

# ProblemRelatedItem

> Represents a junction object that relates a Problem to an Asset.
      This object is available in API version 53.0 and later.

# ProblemRelatedItem

Represents a junction object that relates a Problem to an Asset. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Asset ID that’s linked to the Problem.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the problem as it relates to the item. |
| ImpactLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe related item’s impact on the problem.Possible values are:HighLowMediumThe default value is High. |
| ImpactType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe effect of the problem-related item on business operations.Possible values are:Business-BlockingNot Business-BlockingPartially Business-BlockingThe default value is Business-Blocking. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated ID of the problem-related item. |
| ProblemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Problem ID that’s related to the Asset.This field is a relationship field.Relationship NameProblemRelationship TypeLookupRefers ToProblem |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProblemRelatedItemChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProblemRelatedItemFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProblemRelatedItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProblemRelatedItemChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProblemRelatedItemFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProblemRelatedItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
