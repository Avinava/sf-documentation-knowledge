---
title: "BuyerGroupPricebook"
domain: object-reference
topic: buyergrouppricebook
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.824Z
estimatedTokens: 533
keywords: [BuyerGroupPricebook, buyer, group, price, book, Lightning, B2B, Commerce, API, version, 48.0, later, Calls, Special, Access]
---

# BuyerGroupPricebook

> Represents a buyer group price book used in Lightning B2B Commerce. This
    object is available in API version 48.0 and later.

# BuyerGroupPricebook

Represents a buyer group price book used in Lightning B2B Commerce. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The BuyerGroupPricebook object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| BuyerGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the buyer group that the price book record is assigned to. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the BuyerGroupPricebook is active (true) or not (false). Default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Buyer Group Price Book record. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the price book assigned to the buyer group. |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequential priority used to determine the price of a product. This field is only available for web stores that use the Priority pricing strategy. |

## Usage

Use the BuyerGroupPricebook object to assign a price book to a set of buyer users. Assigning a price book to a buyer group allows buyers within that buyer group to retrieve product prices from the price book. When a buyer has multiple price book assignments, including multiple prices for the same product, the store Pricing Strategy determines the price.
