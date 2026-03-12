---
title: "blng__BalanceSnapShotScheduler__c"
domain: blng-dev
topic: blngbalancesnapshotschedulerc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.241Z
estimatedTokens: 639
keywords: [blng__BalanceSnapShotScheduler__c, Balance, Snapshot, Scheduler, creates, Run, regularly, analyze, account's, invoices, past-due, balances, blng, _BalanceSnapShotScheduler, Calls]
---

# blng__BalanceSnapShotScheduler__c

> Represents the Balance Snapshot Scheduler, which creates a Balance
         Snapshot Run to regularly analyze your account's invoices for past-due
      balances.

# blng\_\_BalanceSnapShotScheduler\_\_c

Represents the Balance Snapshot Scheduler, which creates a Balance Snapshot Run to regularly analyze your account's invoices for past-due balances.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the balance snapshot scheduler record when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the balance snapshot scheduler. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a balance snapshot scheduler record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a balance snapshot scheduler record. If this value is null, it’s possible that the user only accessed the balance snapshot scheduler record or a related list view (LastReferencedDate), but not viewed the balance snapshot scheduler record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the balance snapshot scheduler. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__ApexJobId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier of an Apex job associated with the balance snapshot scheduler. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the balance snapshot scheduler. |
| blng__StartDateTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the scheduler starts the run. |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The frequency of the balance snapshot schedule.Valid values are:DailyMonthlyOnceWeekly |
