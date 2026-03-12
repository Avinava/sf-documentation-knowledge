---
title: "ContractItemPriceAdjTier"
domain: revenue-cloud
topic: contractitempriceadjtier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.930Z
estimatedTokens: 741
keywords: [ContractItemPriceAdjTier, Represents, tiers, price, adjustment, product, contract., API, version, 63.0, later., Important, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ContractItemPriceAdjTier

> Represents the tiers of a price adjustment to a product on a contract.
      This object is available in API version 63.0 and later.

# ContractItemPriceAdjTier

Represents the tiers of a price adjustment to a product on a contract. This object is available in API version 63.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| ContractItemPriceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract item price ID associated with the contract item price adjustment tier.This field is a relationship field.Relationship NameContractItemPriceRelationship TypeMaster-detailRefers ToContractItemPrice (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed this record or list view. If this value is null, the user accessed this record or list view (LastReferencedDate) but didn’t view it. |
| LowerBound | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe minimum quantity for the adjustment to be applicable. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| TierType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of adjustment tier.Valid values are:AdjustmentAmountAdjustmentPercentageOverrideAmount |
| TierValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe price adjustment value. |
| UpperBound | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum quantity for the adjustment to be applicable. |

## Associated Objects

This object has associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractItemPriceAdjTierFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ContractItemPriceAdjTierHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
