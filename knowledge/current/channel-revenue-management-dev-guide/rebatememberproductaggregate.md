---
title: "RebateMemberProductAggregate"
domain: channel-revenue-management-dev-guide
topic: rebatememberproductaggregate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.676Z
estimatedTokens: 1238
keywords: [RebateMemberProductAggregate, Stores, post, calculation, summary, journal, transactions, member, period, rebate, ABC, enterprises, May, against, Vol]
---

# RebateMemberProductAggregate

> Stores the post calculation summary of journal transactions by member, period,
      and rebate type. For example, ABC enterprises for May 2021 against Vol Rebate on Radius
      category, did a total quantity of 150 units and transaction amount of $80,000. This
    object is available in API version 65.0 and later.

# RebateMemberProductAggregate

Stores the post calculation summary of journal transactions by member, period, and rebate type. For example, ABC enterprises for May 2021 against Vol Rebate on Radius category, did a total quantity of 150 units and transaction amount of $80,000. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AggregateReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique reference number of the aggregate record that’s assigned by the Data Processing Engine when generating Rebate Program Member Aggregate records. This reference number can be used to relate Rebate Member Aggregate Item records to the aggregate record.Available in API version 54.0 and later. |
| GrowthAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe difference between the total amount and the prior amount in the rebate aggregate. |
| GrowthAmountPercent | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe difference between the total amount and the prior amount in percentage in the rebate aggregate. |
| GrowthQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe difference between the total quantity and the previous quantity in the transaction journal associated with the rebate aggregate. |
| GrowthQuantityPercent | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity growth in percentage. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the rebate member product aggregate. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PriorTotalQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity in the corresponding payout period of the previous rebate cycle. |
| PriorTotalTransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total transaction amount corresponding to the prior period. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the rebate aggregation. |
| ProgramRebateTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe program rebate type associated with the rebate aggregation. |
| RebatePayoutStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the aggregate rebate payout to the member.Possible values are:ErrorInProgressSuccessThe default value is InProgress. |
| RebatePayoutStatusMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status message of the aggregate rebate payout to the member. |
| RebateProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe rebate program member associated with the rebate aggregation. |
| RebateProgramPayoutPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe rebate program payout period associated with the rebate aggregation. |
| RollupProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe immediate parent account in the hierarchy of the account (rebate program member) associated with the product aggregate. This field is available in API version 52.0 and later.This is a relationship field.Relationship NameRollupProgramMemberRelationship TypeLookupRefers ToRebateProgramMember |
| TotalQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of values in transaction journal quantity fields associated with the rebate aggregation. |
| TotalTransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of values in transaction journal transaction amount fields associated with the rebate aggregation. |
| TransactionJournalId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction journal associated with the program rebate type. |
