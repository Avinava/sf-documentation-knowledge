---
title: "RebatePayoutAdjustment"
domain: channel-revenue-management-dev-guide
topic: rebatepayoutadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.696Z
estimatedTokens: 309
keywords: [RebatePayoutAdjustment, Rebate, amount, adjustment, needs, manually, added, subtracted, calculated, API, version, 51.0, later, Calls]
---

# RebatePayoutAdjustment

> Rebate amount adjustment that needs to be given manually. An adjustment is an
      amount added or subtracted to the calculated rebate amount. This object is available in
    API version 51.0 and later.

# RebatePayoutAdjustment

Rebate amount adjustment that needs to be given manually. An adjustment is an amount added or subtracted to the calculated rebate amount. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionValue of the adjustment. |
| ApprovedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionApproved date of the adjustment. |
| Comments | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionNotes for adjustment. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the rebate program. |
| RebateProgramMemberPayoutId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRebate program member payout identifier. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of adjustment.Possible values are:ApprovedInReview—Under ReviewRejected |
