---
title: "RebateProgramMemberPayout"
domain: channel-revenue-management-dev-guide
topic: rebateprogrammemberpayout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.715Z
estimatedTokens: 398
keywords: [RebateProgramMemberPayout, payout, calculated, member, period, $1000, Jan'21, ABC, enterprises, API, version, 51.0, later, Calls]
---

# RebateProgramMemberPayout

> The payout calculated for a member for the period. For example, $1000 Jan'21
      payout for ABC enterprises. This object is available in API version 51.0 and
    later.

# RebateProgramMemberPayout

The payout calculated for a member for the period. For example, $1000 Jan'21 payout for ABC enterprises. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccruedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe payout amount accrued by the rebate program member.This is a calculated field. |
| CalculatedRebateAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount calculated.This is a calculated field. |
| CalculationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the calculation happened. |
| MemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionProgram member ID. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the rebate program. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of payout.Possible values are:ApprovedInterim—Calculation In progress.Pending—Under review.RejectedSystemCalculated—Calculated. |
| TotalApprovedAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSummarized payout adjustment amount.This is a calculated field. |
| TotalRebateAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSummarized payout amount.This is a calculated field. |
