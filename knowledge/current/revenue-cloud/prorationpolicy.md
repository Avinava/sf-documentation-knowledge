---
title: "ProrationPolicy"
domain: revenue-cloud
topic: prorationpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.292Z
estimatedTokens: 343
keywords: [ProrationPolicy, proration, policy, associated, Product, Selling, Model, Option, determines, how, product's, price, calculated, subscription, duration]
---

# ProrationPolicy

> Represents the proration policy associated with a Product Selling Model
         Option that determines how a product's price is calculated based on subscription duration
         or billing periods. This object is available in API version 67.0 and later.

# ProrationPolicy

Represents the proration policy associated with a Product Selling Model Option that determines how a product's price is calculated based on subscription duration or billing periods. This object is available in API version 67.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| ArePartialPeriodsAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether partial periods should be allowed for standard time periods.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the proration policy was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the proration policy was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the proration policy. |
| ProrationPolicyType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of proration policy to be used.Possible values are:StandardTimePeriods—Standard Time Periods |
| RemainderStrategy | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of remainder strategy to be used. |
