---
title: "PgmRebateTypBnftMapping"
domain: channel-revenue-management-dev-guide
topic: pgmrebatetypbnftmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.477Z
estimatedTokens: 505
keywords: [PgmRebateTypBnftMapping, benefit, extended, mapping, aggregate, API, version, 51.0, later, Calls]
---

# PgmRebateTypBnftMapping

> If benefit table is extended, defines mapping of benefit field to the aggregate
      object fields. This object is available in API version 51.0 and later.

# PgmRebateTypBnftMapping

If benefit table is extended, defines mapping of benefit field to the aggregate object fields. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AggregateField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionUsed to describe the join conditions between the aggregate object and the Program Rebate Type Benefit entity.Possible values are:RebateMemberProductAggregate.GrowthAmount—Growth AmountRebateMemberProductAggregate.GrowthAmountPercent—Growth Amount PercentRebateMemberProductAggregate.GrowthQuantity—Growth QuantityRebateMemberProductAggregate.GrowthQuantityPercent—Growth Quantity PercentRebateMemberProductAggregate.LastReferencedDate—Last Referenced DateRebateMemberProductAggregate.LastViewedDate—Last Viewed DateRebateMemberProductAggregate.PriorTotalQuantity—Prior Total QuantityRebateMemberProductAggregate.PriorTotalTransactionAmount—Prior Total Transaction AmountRebateMemberProductAggregate.ProductId—Product IDRebateMemberProductAggregate.ProgramRebateTypeId—Program Rebate IDRebateMemberProductAggregate.RebateProgramMemberId—Rebate Program Member IDRebateMemberProductAggregate.RebateProgramPayoutPeriodId—Rebate Program Payout Period IDRebateMemberProductAggregate.TotalQuantity—Total QuantityRebateMemberProductAggregate.TotalTransactionAmount—Total Transaction AmountRebateMemberProductAggregate.TransactionJournalId— ID |
| ProgramRebateTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionParent identifier |
| RebateTypeBenefitField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionUsed to describe the join conditions between the aggregate object and the Program Rebate Type Benefit entity.Possible values are:ProductId—ID of the Product |
