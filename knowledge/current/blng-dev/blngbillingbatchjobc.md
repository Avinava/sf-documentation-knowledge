---
title: "blng__BillingBatchJob__c"
domain: blng-dev
topic: blngbillingbatchjobc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.247Z
estimatedTokens: 554
keywords: [blng__BillingBatchJob__c, scheduled, processing, job, triggers, recurring, invoice, batch, runs, payment, blng, _BillingBatchJob, Calls]
---

# blng__BillingBatchJob__c

> Represents a scheduled processing job that triggers recurring invoice batch
         runs and payment batch runs.

# blng\_\_BillingBatchJob\_\_c

Represents a scheduled processing job that triggers recurring invoice batch runs and payment batch runs.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the billing batch job when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the billing batch job. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the billing batch job. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| blng__ApexJobId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier of an Apex job associated with the billing batch job. |
| blng__CompleteTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the batch job was completed. |
| blng__StartTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the scheduler triggers the batch processing job. |
| blng__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the scheduler. Only active schedulers are capable of triggering batch processing jobs.Valid values are:CompletedCompleted with errorsProcessingStartedStep 1/2 CompletedStep 1/2 ProcessingStep 2/2 CompletedStep 2/2 Processing |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of billing batch job.Valid values are:Auto RenewalsMRR CalculationUsage |
