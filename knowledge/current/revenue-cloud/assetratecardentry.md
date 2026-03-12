---
title: "AssetRateCardEntry"
domain: revenue-cloud
topic: assetratecardentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.523Z
estimatedTokens: 1010
keywords: [AssetRateCardEntry, Stores, negotiated, rate, card, entries, associated, asset, Revenue, Cloud., API, version, 62.0, later., Important, Supported, Calls, Special, Access, Rules]
---

# AssetRateCardEntry

> Stores the negotiated rate card entries that are associated with an
         asset in Revenue Cloud. This object is available in API version 62.0 and
      later.

# AssetRateCardEntry

Stores the negotiated rate card entries that are associated with an asset in Revenue Cloud. This object is available in API version 62.0 and later.

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
| AssetId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the asset rate card entry record.This field is a relationship field.Relationship NameAssetRelationship TypeMaster-detailRefers ToAsset (the master object) |
| BindingObjectFormula | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe formula that returns the ID of the associated binding object, if specified. If binding object isn't added, the formula returns the asset ID of the asset related to this asset rate card entry. This field is read-only. Available in API version 65.0 and later. |
| BindingObjectId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the binding object associated with the asset rate card entry. Available in API version 65.0 and later.This field is a relationship field.Relationship NameBindingObjectRefers ToAsset |
| BindingObjectRateOrder | TypedoublePropertiesFilter, Nillable, SortDescriptionThe order that determines the applicable binding object rate when multiple rates are defined for an Anchor binding object within a effective period. Available in API version 65.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe ID of the binding object associated with the asset rate card entry.Possible values are:AED - UAE DirhamAUD - Australian DollarBRL - Brazilian RealCAD - Canadian DollarEUR - EuroGBP - British PoundINR - Indian RupeeJPY - Japanese YenSEK - Swedish KronaUSD - U.S. DollarThe default value is USD. Available in API version 65.0 and later. |
| EndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the rate card's time period becomes inactive. The rate card becomes inactive at 11:59:00 PM on the end date. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number assigned to the asset rate card entry. Read-only. |
| NegotiatedRate | TypedoublePropertiesFilter, SortDescriptionThe base negotiated rate used to charge overage consumption. |
| RateCardEntryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the rate card entry record containing the catalog rates that's associated with the asset rate card entry.This field is a relationship field.Relationship NameRateCardEntryRefers ToRateCardEntry |
| RateCardId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the rate card record that's associated with the asset rate card entry.This field is a relationship field.Relationship NameRateCardRefers ToRateCard |
| RateUnitOfMeasureId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the unit of measure record that's associated with the asset rate card entry.This field is a relationship field.Relationship NameRateUnitOfMeasureRefers ToUnitOfMeasure |
| StartDate | TypedateTimePropertiesFilter, SortDescriptionThe date when the rate card's time period becomes active. The rate card becomes active at 12:00:00 AM on the start date. |
| UsageResourceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the usage resource record that's associated with the asset rate card entry.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
