---
title: "AssetActionSrcPriceAdjustment"
domain: revenue-cloud
topic: assetactionsrcpriceadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.765Z
estimatedTokens: 508
keywords: [AssetActionSrcPriceAdjustment, row, junction, asset, calculated, price, adjustment, that's, applied, API, version, 66.0, later, Calls]
---

# AssetActionSrcPriceAdjustment

> Each row represents a junction between an asset and the calculated price
         adjustment that's applied to an asset. This object is available in API version 66.0
      and later.

# AssetActionSrcPriceAdjustment

Each row represents a junction between an asset and the calculated price adjustment that's applied to an asset. This object is available in API version 66.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe value of the price adjustment that was applied to the asset. |
| AppliedPriceAdjustmentDate | TypedateTimePropertiesCreate, Filter, SortDescriptionThe date and time on which the price adjustment was applied to the asset. |
| AssetActionSourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the asset action source related to the asset for which the price adjustment was applied.This field is a relationship field.Relationship NameAssetActionSourceRelationship TypeMaster-detailRefers ToAssetActionSource (the master object) |
| AssetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the asset that this price adjustment applies to.This field is a relationship field.Relationship NameAssetRefers ToAsset |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the asset price adjustment record. |
| PriceAdjustmentCauseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the record that caused the price adjustment.This field is a polymorphic relationship field.Relationship NamePriceAdjustmentCauseRefers ToPromotion |
| PriceAdjustmentSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the source of price adjustment.Possible values are:Discretionary—Reserved for future use.PromotionRule—Reserved for future use.System—Reserved for future use. |
| PrioritySequence | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe priority sequence of the applied price adjustment. |
