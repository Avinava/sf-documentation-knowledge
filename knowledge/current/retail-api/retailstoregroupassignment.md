---
title: "RetailStoreGroupAssignment"
domain: retail-api
topic: retailstoregroupassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.714Z
estimatedTokens: 651
keywords: [RetailStoreGroupAssignment, junction, retail, store, group, API, version, 52.0, later, Calls, Associated, Objects]
---

# RetailStoreGroupAssignment

> Represents a junction between a retail store and a retail store group.
      This object is available in API version 52.0 and later.

# RetailStoreGroupAssignment

Represents a junction between a retail store and a retail store group. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrency used for a retail store. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the store. |
| PriorityOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which a store and store group assignment takes precedence over another assignment of the same store to another store group. |
| RetailLocationGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe retail store group associated with the record.This is a relationship field.Relationship NameRetailLocationGroupRelationship TypeLookupRefers ToRetailLocationGroup |
| RetailStoreId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe retail store associated with the record.This is a relationship field.Relationship NameRetailStoreRelationship TypeLookupRefers ToRetailStore |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RetailStoreGroupAssignmentFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RetailStoreGroupAssignmentHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- RetailStoreGroupAssignmentFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- RetailStoreGroupAssignmentHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
