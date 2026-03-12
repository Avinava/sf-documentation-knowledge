---
title: "RateAdjustmentByTier"
domain: revenue-cloud
topic: rateadjustmentbytier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.401Z
estimatedTokens: 1257
keywords: [RateAdjustmentByTier, adjustments, rate, resource, that’s, determined, tiers, stores, adjustment, any, applicable, boundaries, API, version, 62.0]
---

# RateAdjustmentByTier

> Represents the adjustments for the rate of a resource that’s
         determined based on the specified tiers. This object stores information about the type of
         adjustment used, the value of the adjustment type, and any applicable boundaries. This
      object is available in API version 62.0 and later.

# RateAdjustmentByTier

Represents the adjustments for the rate of a resource that’s determined based on the specified tiers. This object stores information about the type of adjustment used, the value of the adjustment type, and any applicable boundaries. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of rate adjustment.Valid values are:AmountOverridePercentage |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionValue of the rate adjustment based on the selected adjustment type. |
| EffectiveFrom | TypedateTimePropertiesFilter, SortDescriptionDate and time when the associated rate card entry comes into effect. |
| EffectiveTo | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time until when the associated rate card entry remains effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LowerBound | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionMinimum quantity of the rate adjustment value that can be applied to the record. This value must be a positive integer and must be less than the upper bound of the tier. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated identifier for the rate adjustment by tier record. |
| ProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the product whose resource is being used as the associated rate card entry.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the product selling model for the associated rate card entry record.This field is a relationship field.Relationship NameProductSellingModelRefers ToProductSellingModel |
| RateCardEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the rate card entry associated with this rate adjustment by tier record.This field is a relationship field.Relationship NameRateCardEntryRelationship TypeMaster-detailRefers ToRateCardEntry (the master object) |
| RateCardEntryStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the rate card entry associated with this rate adjustment by tier.Valid values are:ActiveDraftInactiveThe default value is Draft. Available in API version 63.0 and later. |
| RateCardId | TypereferencePropertiesFilter, Group, SortDescriptionID of the rate card of the associated rate card entry.This field is a relationship field.Relationship NameRateCardRefers ToRateCard |
| RateUnitOfMeasureId | TypereferencePropertiesFilter, Group, SortDescriptionID of the standard unit of measure record of the associated rate card entry.This field is a relationship field.Relationship NameRateUnitOfMeasureRefers ToUnitOfMeasure |
| RateUnitOfMeasureName | TypestringPropertiesFilter, Group, SortDescriptionName of the standard unit of measure record of the associated rate card entry. |
| UpperBound | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum quantity of the rate adjustment value that can be applied to the record. This value must be a positive double and must be greater than the lower bound of the tier. |
| UsageResourceId | TypereferencePropertiesFilter, Group, SortDescriptionID of the resource selected for the associated rate card entry.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RateAdjustmentByTierFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[RateAdjustmentByTierHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
