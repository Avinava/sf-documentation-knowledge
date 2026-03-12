---
title: "ChangeRequestRelatedItem"
domain: object-reference
topic: changerequestrelateditem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.433Z
estimatedTokens: 816
keywords: [ChangeRequestRelatedItem, junction, relates, ChangeRequest, Asset, API, version, 53.0, later, Calls, Associated, Objects]
---

# ChangeRequestRelatedItem

> Represents a junction object that relates a ChangeRequest to an Asset.
      This object is available in API version 53.0 and later.

# ChangeRequestRelatedItem

Represents a junction object that relates a ChangeRequest to an Asset. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Asset ID that’s linked to the ChangeRequest.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| ChangeRequestId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ChangeRequest ID that’s linked to the Asset.This field is a relationship field.Relationship NameChangeRequestRelationship TypeLookupRefers ToChangeRequest |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the change request as it relates to the item. |
| ImpactLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe related item's impact on the change request.Possible values are:HighLowMediumThe default value is High. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated ID of the item that's related to the change request. |
| RelationshipType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionShows how the ChangeRequest and Asset records relate to each other.Possible values are:Broke ItemFixed ItemThe default value is Broke Item. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ChangeRequestRelatedItemChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ChangeRequestRelatedItemFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ChangeRequestRelatedItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ChangeRequestRelatedItemChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ChangeRequestRelatedItemFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ChangeRequestRelatedItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
