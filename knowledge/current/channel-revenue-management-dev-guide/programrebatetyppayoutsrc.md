---
title: "ProgramRebateTypPayoutSrc"
domain: channel-revenue-management-dev-guide
topic: programrebatetyppayoutsrc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.602Z
estimatedTokens: 506
keywords: [ProgramRebateTypPayoutSrc, rebate, amount, tier, applied, calculated, row, aggregate, There, relation, payout, source, API, version, 51.0]
---

# ProgramRebateTypPayoutSrc

> The rebate amount and the tier applied calculated for each row in the
      aggregate. There is a 1 to 1 relation between payout source and aggregate. This object is
    available in API version 51.0 and later.

# ProgramRebateTypPayoutSrc

The rebate amount and the tier applied calculated for each row in the aggregate. There is a 1 to 1 relation between payout source and aggregate. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccrualRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe accrual rate for the program rebate type payout source. This field is available in API version 52.0 and later. |
| AccruedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe accrued amount for the program rebate type payout source. This field is available in API version 52.0 and later. |
| AggregateIdentifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier for the aggregate row. |
| BenefitQualifierValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of the attribute from the aggregate object that is set up as Benefit Qualifier. |
| MeasureValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of the attribute from the aggregate object that is set up as Measure Field. |
| MemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUnique identifier for the member. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the rebate program member. |
| ProgramRebateTypeBenefitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProgram rebate type benefit identifier. |
| ProgramRebateTypePayoutId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUnique identifier of the program rebate type payout. |
| RebateAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRebate amount calculated by invocable actions. |
