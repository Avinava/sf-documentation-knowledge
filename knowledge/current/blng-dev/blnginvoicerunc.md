---
title: "blng__InvoiceRun__c"
domain: blng-dev
topic: blnginvoicerunc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.391Z
estimatedTokens: 1013
keywords: [blng__InvoiceRun__c, invoice, batch, run, billing, schedules, meet, criteria, processed, resulting, generation, invoices, blng, _InvoiceRun, Calls]
---

# blng__InvoiceRun__c

> During
         an invoice batch run, all billing schedules that meet the specified criteria are processed,
         resulting in the generation of
         invoices.

# blng\_\_InvoiceRun\_\_c

During an invoice batch run, all billing schedules that meet the specified criteria are processed, resulting in the generation of invoices.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the invoice run when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the invoice run. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the invoice run was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when a user last viewed this record, a record related to this record, or a list view. If this value is null, it's possible the user accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the invoice run. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionA system-generated field that specifies the ID of the user who created the BillingBatchScheduler record. This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| blng__ApexJobId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique job ID number that specifies the Apex job queue line status of the invoice run. |
| blng__CleanUpStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionClean-up invoice runs to correct any system errors, and reset order products and usage summaries. Valid values are:CompletedCompleted with errorsStarted |
| blng__CompletedTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp when the invoice run finished processing. |
| blng__InvoiceDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice date stamp on the invoice run. |
| blng__InvoiceScheduler__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA scheduled processing job triggered by the billing batch scheduler. This is a relationship field.Relationship Nameblng__InvoiceScheduler__rRelationship TypeLookupRefers Toblng__InvoiceScheduler__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionOptional user-defined information about the scheduler. |
| blng__PercentageComplete__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of completion of the invoice run. |
| blng__ProgressBar__c | TypestringPropertiesFilter, Nillable, SortDescriptionA horizontal progress bar displaying the completion status of the invoice run. This field is a calculated field. |
| blng__StartTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp of when the invoice run started processing. |
| blng__StatusIndicator__c | TypestringPropertiesFilter, Nillable, SortDescriptionThe color-coded visual status of the invoice run. This is a calculated field. |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state of the invoice run. Valid values are:CompletedCompleted with errorsStartedCanceledFailedStoppedThe default value is Started. |
| blng__TargetDate__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionBilling schedules having the next billing date before this date is picked up for invoicing. |
