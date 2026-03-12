---
title: "blng__PaymentRun__c"
domain: blng-dev
topic: blngpaymentrunc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.541Z
estimatedTokens: 1045
keywords: [blng__PaymentRun__c, batch, processing, job, Salesforce, Billing, payment, run, schedules, meet, criteria, processed, resulting, collection, payments]
---

# blng__PaymentRun__c

> Represents a batch processing job in Salesforce Billing. During a payment
         run, all payment schedules that meet the specified criteria are processed, resulting in the
         collection of payments.

# blng\_\_PaymentRun\_\_c

Represents a batch processing job in Salesforce Billing. During a payment run, all payment schedules that meet the specified criteria are processed, resulting in the collection of payments.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment authorization when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the account. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the payment run. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| blng__ApexJobIdForCleanUp__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier of an Apex job that’s responsible for the cleanup tasks. |
| blng__ApexJobId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier of an Apex job associated with the payment run. |
| blng__CleanUpStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the cleanup operations associated with the payment run.Valid values are:CompletedStartedStep 1 : Invoice updateStep 2 : Payment Transaction update |
| blng__CompletedTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the payment run was completed. |
| blng__FailedTransactions__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe details of transactions that failed during the payment run process. |
| blng__InvoicesProcessed__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe invoices that were successfully processed during the payment run. |
| blng__PaymentGateway__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment gateway used to process the transactions during the payment run.This field is a relationship field.Relationship Nameblng__PaymentGateway__rRelationship TypeLookupRefers Toblng__PaymentGateway__c |
| blng__PaymentScheduler__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment scheduler responsible for the payment run.This field is a relationship field.Relationship Nameblng__PaymentScheduler__rRelationship TypeLookupRefers Toblng__PaymentScheduler__c |
| blng__StartTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start time of the payment run. |
| blng__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the payment run.Valid values are:CompletedFailedProcessingStarted |
| blng__SuccessfulTransactions__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe number of transactions that were successfully processed during the payment run. |
| blng__TargetDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the payment run is intended to be completed. |
| blng__TotalPaymentProcessed__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe total number of payments that were successfully processed during the payment run. |
| blng__TransactionsGenerated__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of transactions that were generated during the payment run.This field is a calculated field. |
