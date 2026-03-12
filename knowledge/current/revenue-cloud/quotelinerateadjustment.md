---
title: "QuoteLineRateAdjustment"
domain: revenue-cloud
topic: quotelinerateadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.354Z
estimatedTokens: 395
keywords: [QuoteLineRateAdjustment, Represents, negotiated, rate, adjustment, quote, line, item., API, version, 62.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# QuoteLineRateAdjustment

> Represents the negotiated rate adjustment for a quote line item. This
      object is available in API version 62.0 and later.

# QuoteLineRateAdjustment

Represents the negotiated rate adjustment for a quote line item. This object is available in API version 62.0 and later.

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
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the quote line rate adjustment record. |
| QuoteLineRateCardEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent quote line rate card entry associated with the quote line rate adjustment.This field is a relationship field.Relationship NameQuoteLineRateCardEntryRelationship TypeMaster-detailRefers ToQuoteLineRateCardEntry (the master object) |
| UpperBound | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity below which the adjustment must be applicable. For example, if you want the adjustment to be applicable when the quantity is 99 or less, set this value to 100. |
