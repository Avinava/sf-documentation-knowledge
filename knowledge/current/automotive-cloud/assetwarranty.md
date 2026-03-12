---
title: "AssetWarranty"
domain: automotive-cloud
topic: assetwarranty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.079Z
estimatedTokens: 1024
keywords: [AssetWarranty, warranty, terms, applicable, asset, along, any, exclusions, extensions, API, version, 56.0, later, Calls, Special]
---

# AssetWarranty

> Defines the warranty terms applicable to an asset along with any
         exclusions and extensions. This object is available in API version 56.0 and
      later.

# AssetWarranty

Defines the warranty terms applicable to an asset along with any exclusions and extensions. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Warranty Lifecycle Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the asset this asset warranty applies to.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AssetWarrantyNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe identifier of the asset warranty record. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this asset warranty expires. |
| ExchangeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of exchange offered by this asset warranty.Possible values are:Advance ExchangeLoanerReturn Exchange |
| Exclusions | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of any exclusions. |
| ExpensesCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of expenses covered. |
| ExpensesCoveredEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which cover for expenses ends. |
| IsTransferable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the asset warranty can be transferred to a new owner (true) or not (false).The default value is false. |
| LaborCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of labor covered. |
| LaborCoveredEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which cover for labor ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the asset warranty was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the asset warranty was last viewed. |
| PartsCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of parts covered. |
| PartsCoveredEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which cover for parts ends. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe price book item associated with this asset warranty term.This field is a relationship field.Relationship NamePricebook2Relationship TypeLookupRefers ToPricebook2 |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which cover under this asset warranty starts. |
| WarrantyTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the warranty term this asset warranty term extends.This field is a relationship field.Relationship NameWarrantyTermRelationship TypeLookupRefers ToWarrantyTerm |
| WarrantyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the asset warranty.Possible values are:RepairStandardSupplier |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssetWarrantyFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AssetWarrantyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
