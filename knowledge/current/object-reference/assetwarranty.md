---
title: "AssetWarranty"
domain: object-reference
topic: assetwarranty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.078Z
estimatedTokens: 854
keywords: [AssetWarranty, warranty, terms, applicable, asset, along, any, exclusions, extensions, API, version, 50.0, later, Calls, Associated]
---

# AssetWarranty

> Defines the warranty terms applicable to an asset along with any exclusions and
      extensions. This object is available in API version 50.0 and later.

# AssetWarranty

Defines the warranty terms applicable to an asset along with any exclusions and extensions. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the asset this warranty term applies to. |
| AssetWarrantyNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe identifier of the asset warranty record. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this warranty term expires. |
| ExchangeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of exchange offered by this warranty term. |
| Exclusions | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of any exclusions. |
| ExpensesCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of expenses covered. |
| ExpensesCoveredEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which cover for expenses ends. |
| IsTransferable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the warranty term can be transferred to a new owner. |
| LaborCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of labor covered. |
| LaborCoveredEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which cover for labor ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the asset warranty term was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the asset warranty term was last viewed. |
| PartsCovered | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of parts covered. |
| PartsCoveredEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which cover for parts ends. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the price book item associated with this asset warranty term. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which cover under this warranty term starts. |
| WarrantyTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the warranty term this asset warranty term extends. |
| WarrantyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the warranty. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssetWarrantyChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.
