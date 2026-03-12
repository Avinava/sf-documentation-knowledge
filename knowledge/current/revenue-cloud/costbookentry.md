---
title: "CostBookEntry"
domain: revenue-cloud
topic: costbookentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.164Z
estimatedTokens: 966
keywords: [CostBookEntry, total, cost, product, service, that’s, determined, various, factors, affect, product's, price, manufactured, weight, raw]
---

# CostBookEntry

> Represents the total cost of a product or service that’s determined
         based on various factors that affect a product's price. For example, when a product is
         manufactured, the weight of the raw material can be a cost factor based on the amount of
         material required and its shipping cost. This object is available in API version 61.0
      and later.

# CostBookEntry

Represents the total cost of a product or service that’s determined based on various factors that affect a product's price. For example, when a product is manufactured, the weight of the raw material can be a cost factor based on the amount of material required and its shipping cost. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Cost | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionTotal cost of the product. |
| CostBookId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Cost Book record with which this record is associated.This field is a relationship field.Relationship NameCostBookRelationship TypeMaster-detailRefers ToCostBook (the master object) |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionISO code for any currency allowed by the organization. Available only for organizations with the multicurrency feature enabled.Valid values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of this cost book entry record. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate and time when the cost book entry comes into effect. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time till when the cost book entry is no longer in effect. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the cost book entry. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Product2 record with which this record is associated. This field must be specified when creating Product2 records. This field can’t be changed in an update.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CostBookEntryFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CostBookEntryHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CostBookEntryFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- CostBookEntryHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
