---
title: "OrderItemRateAdjustment"
domain: revenue-cloud
topic: orderitemrateadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.693Z
estimatedTokens: 393
keywords: [OrderItemRateAdjustment, Represents, negotiated, rate, adjustment, order, product., API, version, 62.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# OrderItemRateAdjustment

> Represents the negotiated rate adjustment for an order product. This
      object is available in API version 62.0 and later.

# OrderItemRateAdjustment

Represents the negotiated rate adjustment for an order product. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available with Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of rate adjustment.Possible values are:AmountOverridePercentage |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe value of the adjustment. |
| LowerBound | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe minimum quantity for the adjustment to be applicable. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the order item rate adjustment. |
| OrderItemRateCardEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent order item rate card entry associated with the order item rate adjustment.This field is a relationship field.Relationship NameOrderItemRateCardEntryRelationship TypeMaster-detailRefers ToOrderItemRateCardEntry (the master object) |
| UpperBound | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity below which the adjustment must be applicable. For example, if you want the adjustment to be applicable when the quantity is 99 or less, set this value to 100. |
