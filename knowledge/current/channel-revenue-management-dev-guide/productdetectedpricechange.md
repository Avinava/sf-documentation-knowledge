---
title: "ProductDetectedPriceChange"
domain: channel-revenue-management-dev-guide
topic: productdetectedpricechange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.551Z
estimatedTokens: 545
keywords: [ProductDetectedPriceChange, detected, change, price, product, associated, partner, account, API, version, 63.0, later, Calls]
---

# ProductDetectedPriceChange

> Represents a detected change in price for a product associated with a partner
         account. This object is available in API version 63.0 and later.

# ProductDetectedPriceChange

Represents a detected change in price for a product associated with a partner account. This object is available in API version 63.0 and later.

A ProductDetectedPriceChange record is automatically created when the system identifies a change in product pricing that can require price protection evaluation or further processing.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the partner account for which the price change was detected.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate when the new price becomes effective for the product. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the record was last referenced by the current user. Useful for activity tracking. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and the timestamp the record was last referenced by a user or system process. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique name or identifier for the price change record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUser or group that owns this record. This is a polymorphic relationship field.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProcessingStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the current processing stage of the price change.Possible values are:CompletedInactiveNewProcessing—In Progress |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReferences the product for which the price change was detected.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
