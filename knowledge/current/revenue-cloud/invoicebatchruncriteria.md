---
title: "InvoiceBatchRunCriteria"
domain: revenue-cloud
topic: invoicebatchruncriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.617Z
estimatedTokens: 672
keywords: [InvoiceBatchRunCriteria, batch, processing, job, criteria, Billing, invoice, run, schedules, meet, processed, resulting, generation, invoices, API]
---

# InvoiceBatchRunCriteria

> Represents a batch processing job and its required criteria in
         Billing. During an invoice batch run, all billing schedules that meet the specified
         criteria are processed, resulting in the generation of invoices. This object is
      available in API version 62.0 and later.

# InvoiceBatchRunCriteria

Represents a batch processing job and its required criteria in Billing. During an invoice batch run, all billing schedules that meet the specified criteria are processed, resulting in the generation of invoices. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesFilter, Nillable, SortDescriptionAdditional notes or comments for the invoice batch run criteria. |
| CriteriaExpression | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe formula that specifies criteria for filtering the billing schedules. For example, you can filter billing schedules by the currency code. |
| CriteriaMatchType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. The type of matching criteria required for the batch.Valid value is MatchAll.The default value is MatchAll. |
| ExpectedInvoiceStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of invoice a batch run generates.Valid values are:DraftPosted |
| InvoiceBatchRunCriteriaNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the invoice batch run criteria. |
| InvoiceDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date displayed on the invoice. This date is also used for tax calculations. |
| InvoiceDateOffset | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe offset that's applied to the target date to calculate the invoice date. |
| IsInvoiceDateFromRunDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the invoice date is derived from the run date (true) or not (false).The default value is false. Available in API version 63.0 and later. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the user who created the invoice batch run criteria.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| TargetDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe target date for the invoice run. Billing schedules having the next billing date before this date are picked up for invoicing. |
| TargetDateOffset | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe offset that's applied to the next run date to calculate the target date. |
