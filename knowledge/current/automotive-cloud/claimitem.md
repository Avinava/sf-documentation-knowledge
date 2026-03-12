---
title: "ClaimItem"
domain: automotive-cloud
topic: claimitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.132Z
estimatedTokens: 733
keywords: [ClaimItem, defective, asset, requires, repair, replacement, API, version, 58.0, later, Calls, Special, Access, Rules, Associated]
---

# ClaimItem

> Represents a defective asset that requires repair or
         replacement. This object is available in API version 58.0 and later.

# ClaimItem

Represents a defective asset that requires repair or replacement. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Warranty Lifecycle Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset associated with the claim.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AssetUsageUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the usage value of the asset.Possible values are:HoursMiles |
| AssetUsageValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage value for the asset at the time of occurrence of the fault. |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe parent claim that includes this claim item.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| FaultDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date of occurrence of the fault in the asset. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the claim item. |
| RepairDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date of repair of the asset. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimItemChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ClaimItemFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ClaimItemHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
