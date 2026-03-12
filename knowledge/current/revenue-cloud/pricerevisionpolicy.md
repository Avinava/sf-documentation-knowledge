---
title: "PriceRevisionPolicy"
domain: revenue-cloud
topic: pricerevisionpolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:10.916Z
estimatedTokens: 959
keywords: [PriceRevisionPolicy, Represents, guidelines, used, modify, product, service, prices, often, incorporating, formulas, based, price, revision, entries, various, adjustments., example, policy, might]
---

# PriceRevisionPolicy

> Represents the guidelines and methods used to modify product or service
         prices, often incorporating formulas based on price revision entries and various
         adjustments. For example, a policy might dictate that prices are revised based on a formula
         that considers the regional Consumer Price Index (CPI) with a specific adjustment
         percentage, effective from a defined date, and categorized as either a flat adjustment or
         one directly based on the price revision entry data. This object is available in API
      version 65.0 and later.

# PriceRevisionPolicy

Represents the guidelines and methods used to modify product or service prices, often incorporating formulas based on price revision entries and various adjustments. For example, a policy might dictate that prices are revised based on a formula that considers the regional Consumer Price Index (CPI) with a specific adjustment percentage, effective from a defined date, and categorized as either a flat adjustment or one directly based on the price revision entry data. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date and time when the price revision policy comes into effect. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date and time when the price revision policy is no longer in effect. |
| Formula | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe coded format of the formula used to calculate the revised price of a product from a quote and order, or contract. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the price revision policy. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PolicyType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of price revision policy.Valid values are:Flat—You can’t define a price index-based formula for revision.PriceIndex—Price Index |
| Region | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe region where the price revision policy is valid. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PriceRevisionPolicyFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PriceRevisionPolicyHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PriceRevisionPolicyShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PriceRevisionPolicyFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- PriceRevisionPolicyHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- PriceRevisionPolicyShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
