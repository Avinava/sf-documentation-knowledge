---
title: "ProrationPolicy"
domain: object-reference
topic: prorationpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.716Z
estimatedTokens: 699
keywords: [ProrationPolicy, how, price, subscription, divided, time, periods, calculated, period, API, version, 55.0, later, Calls, Special]
---

# ProrationPolicy

> Defines how the price of a subscription is divided into time periods and how the price is calculated for each time period. This object is available in API version
		55.0 and later.

# ProrationPolicy

Defines how the price of a subscription is divided into time periods and how the price is calculated for each time period. This object is available in API version 55.0 and later.

The proration policy defines whether partial periods are allowed and how remainder amounts are handled.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| ArePartialPeriodsAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether a subscription can be canceled partway through a period.Set the value to True if a subscription can be canceled partway through a period. Otherwise, set the value to false.For example, if the proration period is monthly and this field is true, then customers can cancel a subscription partway through the month. If the proration period is monthly and this field is false, then the subscription is canceled at the end of the current month.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list viewLastReferencedDate but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionThe name of the proration policy. |
| ProrationPolicyType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of proration policy.Possible values are:StandardTimePeriods—Indicates that the proration policy divides the subscription into similar time periods, and prorates the subscription using the time periods. For example, a monthly subscription that's subscribed to for 12 months for a total amount of $120 is prorated as $10 per month. |
| RemainderStrategy | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionIndicates how the leftover amount from the price calculation is allocated.For example, if the total amount is $100 and the subscription has 12 periods, the price per period is $8.33, with $0.04 remaining. To indicate that the $0.04 is included in the first period, use the value AddToFirst. To indicate that the $0.04 is included in the final period, use the value AddToLast.Possible values are:AddToFirst—Add the remaining amount to the first period.AddToLast—Add the remaining amount to the last period. |
