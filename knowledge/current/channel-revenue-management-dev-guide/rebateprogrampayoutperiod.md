---
title: "RebateProgramPayoutPeriod"
domain: channel-revenue-management-dev-guide
topic: rebateprogrampayoutperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.722Z
estimatedTokens: 501
keywords: [RebateProgramPayoutPeriod, period, payout, calculation, 1st, 31st, Jan, Dec, 14th, API, version, 51.0, later, Calls]
---

# RebateProgramPayoutPeriod

> The period of the payout calculation. For example, 1st to 31st Jan, or 1st Dec
      to 14th Dec. This object is available in API version 51.0 and later.

# RebateProgramPayoutPeriod

The period of the payout calculation. For example, 1st to 31st Jan, or 1st Dec to 14th Dec. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionEnd date of the period. The system picks transactions between start date and end date of the period for rebate calculations. |
| LastCalculationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLast date on which the rebate amount calculation for that period for all the relevant aggregate records was completed successfully. |
| MemberPayoutCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionUsed to track total number of payouts that happened in a period for a particular rebate program. |
| PayoutCalculationDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate on or after which the payout calculation for this period is set to Closed. |
| RebateProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRebate program identifier. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionStart date of the period. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionUsed to track if a payout period is active or inactive.Possible values are:ActiveClosedInactive |
| TotalApprovedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal approved member payout amount. |
| TotalRejectedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal rejected amount. |
| TransactionGracePeriodDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionCut-off date before which the transactions are accepted for the period. |
