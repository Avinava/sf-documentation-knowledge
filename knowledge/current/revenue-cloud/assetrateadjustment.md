---
title: "AssetRateAdjustment"
domain: revenue-cloud
topic: assetrateadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.796Z
estimatedTokens: 442
keywords: [AssetRateAdjustment, Stores, tier, rate, adjustments, asset, card, entries, API, version, 62.0, later, Calls, Special, Access]
---

# AssetRateAdjustment

> Stores the tier rate adjustments for the asset rate card
         entries. This object is available in API version 62.0 and later.

# AssetRateAdjustment

Stores the tier rate adjustments for the asset rate card entries. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available in orgs where Revenue Cloud is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of rate adjustment.Valid values are:Amount—Adjusts rate by using a specific amount.Override—Adjusts rate by using the override rate.Percentage—Adjusts rate by using a percentage. |
| AdjustmentValue | TypedoublePropertiesFilter, SortDescriptionThe value of the adjustment. |
| AssetRateCardEntryId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the parent asset rate card entry record associated with the asset rate adjustment.This field is a relationship field.Relationship NameAssetRateCardEntryRelationship TypeMaster-detailRefers ToAssetRateCardEntry (the master object) |
| LowerBound | TypedoublePropertiesFilter, Nillable, SortDescriptionThe minimum quantity for the adjustment to be applicable. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the asset rate adjustment. |
| UpperBound | TypedoublePropertiesFilter, Nillable, SortDescriptionThe maximum quantity for the adjustment to be applicable. |
