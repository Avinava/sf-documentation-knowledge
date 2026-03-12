---
title: "AssetStatePeriod"
domain: revenue-cloud
topic: assetstateperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.834Z
estimatedTokens: 1365
keywords: [AssetStatePeriod, time, span, asset, quantity, amount, monthly, recurring, revenue, MRR, state, periods, there, changes, actions]
---

# AssetStatePeriod

> Represents a time span when an asset has the same quantity, amount, and
         monthly recurring revenue (MRR). An asset has as many asset state periods as there are
         changes to it (asset actions) during its lifecycle. The dashboard and related pages show
         the current asset state period. The fields can’t be edited. This object is available
      in API version 50.0 and later.

# AssetStatePeriod

Represents a time span when an asset has the same quantity, amount, and monthly recurring revenue (MRR). An asset has as many asset state periods as there are changes to it (asset actions) during its lifecycle. The dashboard and related pages show the current asset state period. The fields can’t be edited. This object is available in API version 50.0 and later.

## Supported Calls

createable(), deletable(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), updateable().

## Special Access Rules

To use Customer Asset Lifecycle Management APIs, you must have the Access Customer Asset Lifecycle Management APIs permission and Read access to the Asset, Asset Action, Asset Action Source, and Asset State Period objects.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreateable, Filter, Sort, UpdateableDescriptionAn asset’s total amount during an asset state period. Revenue Cloud doesn't set or use this field's value currently. |
| AssetId | TypereferencePropertiesCreateable, Filter, Group, SortDescriptionThe asset related to an asset state period. Label is Asset.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AssetStatePeriodNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the asset state period. Label is Name. |
| BillingFrequency | TypepicklistPropertiesCreateable, Filter, Group, Nillable, Restricted picklist, Sort, UpdateableDescriptionThe time period that indicates how often the line item is billed.Possible values are:AnnualMonthlyQuarterlySemi-AnnualAvailable in API version 65.0 and later. |
| BindingInstanceTargetId | TypereferencePropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionThe ID of a custom product target for a usage-based quote line item, order Item, or asset allocation.This field is a polymorphic relationship field.Relationship NameBindingInstanceTargetRefers ToAccount, Asset, BindingObjectCustomExt, Contract |
| Discount | TypepercentPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionEditable number from 0 to 100. Available in API version 65.0 and later. |
| DiscountAmount | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe fixed amount discount to apply to the line item. Available in API version 65.0 and later. |
| EndDate | TypedateTimePropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe end date and time of an asset state period. On an asset that is an evergreen subscription, the last asset state period has no end date. |
| LegalEntityId | TypereferencePropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionThe ID of the related legal entity.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Mrr | TypecurrencyPropertiesCreateable, Filter, Sort, UpdateableDescriptionAn asset’s monthly recurring revenue during an asset state period. |
| PriceRevisionPolicy | TypereferencePropertiesCreateable, Filter, Group, Sort, UpdateableDescriptionSpecifies the price uplift policy associated with this asset state period.This field is a relationship field.This field is available in API version 65.0 and later.Relationship NamePrice Revision PolicyRelationship TypeLookupRefers ToPriceRevisionPolicy |
| Quantity | TypedoublePropertiesCreateable, Filter, Sort, UpdateableDescriptionThe total quantity of an asset during an asset state period. |
| RampIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ramp record used to group order item segments for this asset state period.This field is available in orgs that have Revenue Cloud when the Ramp Deals setting is enabled.This field is available in API version 62.0 and later. |
| SegmentIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe order item segment for this asset state period.This field is available in orgs that have Revenue Cloud when the Ramp Deals setting is enabled.This field is available in API version 62.0 and later. |
| SegmentName | TypestringPropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionThe name of the order item segment for this asset state period.This field is available in orgs that have Revenue Cloud when the Ramp Deals setting is enabled.This field is available in API version 62.0 and later. |
| SegmentType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateableDescriptionThe period for the order item segment for this asset state period. Valid values are:CustomFree TrialYearlyThe default value is Yearly.This field is available in orgs that have Revenue Cloud when the Ramp Deals setting is enabled.This field is available in API version 62.0 and later. |
| StartDate | TypedateTimePropertiesCreateable, Filter, Sort, UpdateableDescriptionThe start date and time of an asset state period. |
| UnitPrice | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe price per unit for the line item. Available in API version 65.0 and later. Revenue Cloud won't populate this field in API version 66.0 and later. |
| UnitPriceUplift | TypepercentPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionIndicates the percentage increase of a line item's unit price. Available in API version 65.0 and later. |
