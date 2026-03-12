---
title: "PriceBookRateCard"
domain: revenue-cloud
topic: pricebookratecard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.908Z
estimatedTokens: 645
keywords: [PriceBookRateCard, Represents, junction, between, price, book, rate, card, objects., API, version, 62.0, later., Important, Supported, Calls, Fields, Associated, Objects]
---

# PriceBookRateCard

> Represents a junction between price book and rate card objects.
      This object is available in API version 62.0 and later.

# PriceBookRateCard

Represents a junction between price book and rate card objects. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated identifier for the price book rate card record. |
| PriceBookId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionPrice book ID that's associated with the rate cards IDs. For Quote, Order, and Contracts, the price book IDs identify the associated rate cards.This field is a relationship field.Relationship NamePriceBookRelationship TypeMaster-detailRefers ToPricebook2 (the master object) |
| RateCardId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRate card ID that's associated with the price book.This field is a relationship field.Relationship NameRateCardRelationship TypeMaster-detailRefers ToRateCard (the detail object) |
| RateCardType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionType of rate card associated with the price book.Valid values are:AttributeBaseTier |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PriceBookRateCardFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PriceBookRateCardHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
