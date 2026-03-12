---
title: "blng__InvoiceScheduler__c"
domain: blng-dev
topic: blnginvoiceschedulerc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.403Z
estimatedTokens: 1373
keywords: [blng__InvoiceScheduler__c, whether, order, product, invoiced, blng, _InvoiceScheduler, Calls]
---

# blng__InvoiceScheduler__c

> Represents whether and when an
         order
         product gets
      invoiced.

# blng\_\_InvoiceScheduler\_\_c

Represents whether and when an order product gets invoiced.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the invoice scheduler when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the invoice scheduler. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp of when the current user had last accessed the invoice scheduler, or a record or list view related to the invoice scheduler. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortThe timestamp when a user last viewed this record, a record related to this record, or a list view. If this value is null, it's possible the user accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the invoice scheduler. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| blng__ApexJobId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique job ID number that specifies the Apex job queue line status of the invoice scheduler. |
| blng__AutomaticallyPostInvoices__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the invoices must be posted automatically (true) or not (false). By default, the invoices are generated in draft state. |
| blng__BillUsageCharges__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the charge type of the order product is usage (true) or not (false). The default value is true. |
| blng__EndOfMonth__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the monthly invoice processing must start on the last day of the month (true) or not (false). If this field is set to true, the scheduler start date also maps to the monthly invoice processing day. The default value is false. |
| blng__IncludeAllCurrencies__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether all the available invoice currencies are included for processing (true) or not (false). The default value is false. |
| blng__InvoiceBatches__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionThe billing batches included for invoice processing. |
| blng__InvoiceDate__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the invoice was created. |
| blng__InvoiceDayOfMonth__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe start day of the invoice runs each month for monthly invoice runs. |
| blng__InvoiceDayOfWeek__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe start day of the invoice runs each week for weekly invoice runs. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReference notes that users can add. Notes fields don’t have associated system logic. |
| blng__StartDateTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the invoice scheduler. |
| blng__TargetDate__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe next billing date. Active order products, usage summaries, or billing transactions with billing schedules having the next billing date before this date is picked up for invoicing. |
| blng__TargetDayOfMonth__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe day of the month associated with the next billing date. Active order products, usage summaries, or billing transactions with billing schedules having the next billing date before this date is picked up for invoicing. |
| blng__TargetDayOfWeek__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe day of the week associated with the next billing date. Active order products, usage summaries, or billing transactions with billing schedules having the next billing date before this date is picked up for invoicing. |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe frequency of the invoice scheduler run. Valid values are:DailyMonthlyOnceWeekly |
