---
title: "RecordAggregationResult"
domain: omnistudio
topic: recordaggregationresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:12.110Z
keywords: [RecordAggregationResult, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# RecordAggregationResult

# RecordAggregationResult

Represents a data aggregation from one record to another record based on the record aggregation definition for the corresponding objects. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if your org has the Record Aggregation permission set license, and you have the Record Aggregation Access permission.

## Fields

| Field | Details |
| --- | --- |
| AggregateFromRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record from which data is aggregated.This field is a polymorphic relationship field.Relationship NameAggregateFromRecordRelationship TypeLookup |
| AggregateToRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record to which data is aggregated.This field is a polymorphic relationship field.Relationship NameAggregateToRecordRelationship TypeLookup |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record aggregation result. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordAggregationDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record aggregation definition for the data aggregation from the aggregate-from record to the aggregate-to record.This field is a relationship field.Relationship NameRecordAggregationDefinitionRelationship TypeLookupRefers ToRecordAggregationDefinition |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RecordAggregationResultChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API Version 63.0)

Change events are available for the object.

[RecordAggregationResultOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[RecordAggregationResultShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.