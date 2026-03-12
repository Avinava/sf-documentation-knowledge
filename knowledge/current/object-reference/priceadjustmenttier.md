---
title: "PriceAdjustmentTier"
domain: object-reference
topic: priceadjustmenttier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.010Z
estimatedTokens: 582
keywords: [PriceAdjustmentTier, discount, tier, price, adjustment, schedule, API, version, 47.0, later, Calls, Special, Access, Rules, Usage]
---

# PriceAdjustmentTier

> Represents a discount tier in a price adjustment schedule. This object is
    available in API version 47.0 and later.

# PriceAdjustmentTier

Represents a discount tier in a price adjustment schedule. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| LowerBound | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe minimum quantity the discount can be applied to. It must be a positive integer and less than or equal to the upper bound of the tier. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only. |
| PriceAdjustmentScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the price adjustment schedule that the discount is applied to. |
| TierType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of the discount. Possible values are:AdjustmentAmount—An amount discounted from an item’s list price. Label is Amount.AdjustmentPercentage—A percentage discounted from an item’s list price. Label is Percentage.AdjustmentOverride—An override of an item’s list price. Label is Override. |
| TierValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe value of the discount. |
| UpperBound | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum quantity the discount can be applied to. The quantity must be a positive integer. Not inclusive. Set this value one digit higher than the quantity you want the tier to include. For example, if a tier’s upper bound is 99, set the value of UpperBound to 100. For the last tier, the value is optional. |

## Usage

To use PriceAdjustmentTiers, associate them with a PriceAdjustmentSchedule.

Tiers can’t overlap, and no gaps are allowed between tiers.

#### See Also

-   [PriceAdjustmentSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmentschedule.htm "Represents a series of discounts offered depending on your product's configuration, quantity, and when they’re purchased in combination with other products. This object is available in API version 47.0 and later.")

## Related Topics

- PriceAdjustmentSchedule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmentschedule.htm)
