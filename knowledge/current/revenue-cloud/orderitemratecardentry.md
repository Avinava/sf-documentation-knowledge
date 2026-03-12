---
title: "OrderItemRateCardEntry"
domain: revenue-cloud
topic: orderitemratecardentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.700Z
estimatedTokens: 684
keywords: [OrderItemRateCardEntry, Represents, catalog, negotiated, rates, usage, metric, associated, order, item, that's, used, charge, overage, consumption., API, version, 62.0, later., Important]
---

# OrderItemRateCardEntry

> Represents the catalog and negotiated rates of a usage metric associated with
         an order item that's used to charge overage consumption. This object is available in
      API version 62.0 and later.

# OrderItemRateCardEntry

Represents the catalog and negotiated rates of a usage metric associated with an order item that's used to charge overage consumption. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available with Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| IsChosenRate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this rate is the chosen rate for the associated binding target and usage resource (true) or not (false). The default value is false. Available in API version 64.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number assigned to the order item rate card entry record. |
| NegotiatedRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe base negotiated rate used to charge overage consumption. |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent order item associated with the order item rate card entry.This field is a relationship field.Relationship NameOrderItemRelationship TypeMaster-detailRefers ToOrderItem (the master object) |
| RateCardEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe rate card entry containing catalog rates that's associated with the order item rate card entry.This field is a relationship field.Relationship NameRateCardEntryRefers ToRateCardEntry |
| RateCardId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe rate card associated with the order item rate card entry.This field is a relationship field.Relationship NameRateCardRefers ToRateCard |
| RateUnitOfMeasureId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe standard unit of measure containing the unit for the negotiated rate that's associated with the order item rate card entry.This field is a relationship field.Relationship NameRateUnitOfMeasureRefers ToUnitOfMeasure |
| UsageResourceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe usage resource associated with the order item rate card entry.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
