---
title: "blng__InvoicePlan__c"
domain: blng-dev
topic: blnginvoiceplanc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.373Z
estimatedTokens: 675
keywords: [blng__InvoicePlan__c, billing, schedules, customizable, frequencies, invoice, plan, non-standard, intervals, skipping, traditional, monthly, quarterly, cycles, instance]
---

# blng__InvoicePlan__c

> Provides billing schedules with customizable billing frequencies. The invoice plan
      allows for non-standard billing intervals, skipping traditional monthly or quarterly cycles.
      For instance, the first payment occurs ten days after the sale, with the second payment two
      months later.

# blng\_\_InvoicePlan\_\_c

Provides billing schedules with customizable billing frequencies. The invoice plan allows for non-standard billing intervals, skipping traditional monthly or quarterly cycles. For instance, the first payment occurs ten days after the sale, with the second payment two months later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with invoice plan when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp of when the current user had last accessed the invoice plan, or a record or list view related to the invoice plan. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when a user last viewed this record, a record related to this record, or a list view. If this value is null, it's possible the user accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the invoice plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the invoice plan record. This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| blng__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the invoice plan is active (true) or not (false). The default value is true. |
| blng__BillingScheduleCreation__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionBilling schedules use predetermined dates to define when and how Salesforce Billing invoices an order product. An invoice plan can be created with BillingScheduleCreation set to Order Product Activation or Manual. When BillingScheduleCreation is set to Order Product Activation, billing schedules and billing transactions are generated automatically. Valid values are:ManualOrder Product Activation |
