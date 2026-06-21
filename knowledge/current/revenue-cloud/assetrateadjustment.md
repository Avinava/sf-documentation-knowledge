---
title: "AssetRateAdjustment"
domain: revenue-cloud
topic: assetrateadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:54.875Z
estimatedTokens: 475
keywords: [AssetRateAdjustment, Stores, tier, rate, adjustments, asset, card, entries.This, API, 62.0]
---

> Stores the tier rate adjustments for the asset rate card
         entries.This object is available in API version 62.0 and later.

# AssetRateAdjustment

Stores the tier rate adjustments for the asset rate card entries.This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update()

## Special Access Rules

This object is available in orgs where Revenue Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of rate adjustment.Valid values are:Amount—Adjusts rate by using a specific amount.Override—Adjusts rate by using the override rate.Percentage—Adjusts rate by using a percentage. |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe value of the adjustment. |
| AssetRateCardEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent asset rate card entry record associated with the asset rate adjustment.This field is a relationship field.Relationship NameAssetRateCardEntryRelationship TypeMaster-detailRefers ToAssetRateCardEntry (the master object) |
| LowerBound | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum quantity for the adjustment to be applicable. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the asset rate adjustment. |
| UpperBound | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum quantity for the adjustment to be applicable. |
