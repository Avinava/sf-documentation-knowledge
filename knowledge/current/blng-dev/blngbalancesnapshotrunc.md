---
title: "blng__BalanceSnapShotRun__c"
domain: blng-dev
topic: blngbalancesnapshotrunc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.234Z
estimatedTokens: 537
keywords: [blng__BalanceSnapShotRun__c, analysis, account's, invoices, scheduled, basis, past-due, balances, blng, _BalanceSnapShotRun, Calls]
---

# blng__BalanceSnapShotRun__c

> Represents the analysis of an account's invoices on a scheduled basis for
         past-due balances.

# blng\_\_BalanceSnapShotRun\_\_c

Represents the analysis of an account's invoices on a scheduled basis for past-due balances.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the balance snapshot run when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the balance snapshot run. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the balance snapshot run. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__ApexJobId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier of an Apex job associated with the balance snapshot run. |
| blng__BalanceSnapshotScheduler__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the way to schedule and manage balance snapshots.This field is a relationship field.Relationship Nameblng__BalanceSnapshotScheduler__rRefers Toblng__BalanceSnapShotScheduler__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the balance snapshot run. |
| blng__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the balance snapshot run.Valid values are:CompletedCredit Note CompletedCredit Note ProcessingDebit Note CompletedDebit Note ProcessingErrorInvoice CompletedInvoice ProcessingPayment CompletedPayment ProcessingStarted |
