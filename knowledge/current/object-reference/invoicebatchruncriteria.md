---
title: "InvoiceBatchRunCriteria"
domain: object-reference
topic: invoicebatchruncriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.335Z
estimatedTokens: 631
keywords: [InvoiceBatchRunCriteria, batch, processing, job, criteria, Subscription, Management, invoice, run, billing, schedules, meet, processed, resulting, generation]
---

# InvoiceBatchRunCriteria

> Represents a batch processing job and its required criteria in
         Subscription Management. During an invoice batch run, all billing schedules that meet the
         specified criteria are processed, resulting in the generation of invoices. This object
      is available in API version 55.0 and later.

# InvoiceBatchRunCriteria

Represents a batch processing job and its required criteria in Subscription Management. During an invoice batch run, all billing schedules that meet the specified criteria are processed, resulting in the generation of invoices. This object is available in API version 55.0 and later.

A scheduled invoice batch run tells the system to start the run at a scheduled date and time by using certain criteria. The scheduler includes the matching criteria, which are used to evaluate the billing schedules. Billing schedules that meet the specified criteria are included for processing in the invoice batch run.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoicebatchruncriteria.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesFilter, Nillable, SortDescriptionOptional user-defined information about the batch run criteria. |
| CriteriaExpression | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe formula that specifies criteria for filtering the billing schedules. For example, we can filter billing schedules by currency code. |
| CriteriaMatchType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of matching criteria required for the batch.Valid value is MatchAll.The default value is MatchAll. |
| ExpectedInvoiceStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of invoice a batch run generates.Valid values are:DraftPostedThis field is available in API version 60.0 and later. |
| InvoiceBatchRunCriteriaNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-generated sequential number. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionSystem-generated field. The ID of the user who created the BillingBatchScheduler record. Its UI label is Owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
