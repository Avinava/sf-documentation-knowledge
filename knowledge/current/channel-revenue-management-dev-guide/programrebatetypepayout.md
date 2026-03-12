---
title: "ProgramRebateTypePayout"
domain: channel-revenue-management-dev-guide
topic: programrebatetypepayout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.586Z
estimatedTokens: 391
keywords: [ProgramRebateTypePayout, payout, member, particular, rebate, volume, Jan'19, ABC, enterprises, $560, petrol, engine, $440, API, version]
---

# ProgramRebateTypePayout

> The payout given to a member for a particular rebate type. For example, volume
      rebate payout in Jan'19 for ABC enterprises is $560, petrol engine payout for ABC in Jan'19 is
      $440. This object is available in API version 51.0 and later.

# ProgramRebateTypePayout

The payout given to a member for a particular rebate type. For example, volume rebate payout in Jan'19 for ABC enterprises is $560, petrol engine payout for ABC in Jan'19 is $440. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccruedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe accrued amount for the program rebate type payout.This is a calculated field. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the program rebate type. |
| ProgramRebateTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUnique identifier for the program rebate type. |
| RebateAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRebate amount.This is a calculated field. |
| RebateProgramMemberPayoutId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUnique identifier of the rebate program member payout. |
| TotalBenefitQualifierValue | TypedoublePropertiesFilter, Nillable, SortDescriptionRoll-up summary of the Benefit Qualifier Value from the Program Rebate Type Payout Source entity.This is a calculated field. |
| TotalMeasureValue | TypedoublePropertiesFilter, Nillable, SortDescriptionRoll-up summary for the Measure Value field from the Program Rebate Type Payout Source entity.This is a calculated field. |
