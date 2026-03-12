---
title: "InvoiceBatchRun"
domain: sfFieldRef
topic: invoicebatchrun
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.829Z
estimatedTokens: 897
keywords: [InvoiceBatchRun, batch, processing, job, Subscription, Management, Revenue, Lifecycle, Billing, invoice, run, schedules, meet, criteria, processed]
---

# InvoiceBatchRun

> Represents a batch processing job in Subscription Management or
			Revenue Lifecycle Management Billing. During an invoice batch run, all billing schedules
			that meet the specified criteria are processed, resulting in the generation of
			invoices. This object is available in API version 55.0 and later.

# InvoiceBatchRun

Represents a batch processing job in Subscription Management or Revenue Lifecycle Management Billing. During an invoice batch run, all billing schedules that meet the specified criteria are processed, resulting in the generation of invoices. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [InvoiceBatchRun](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_invoicebatchrun.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingBatchSchedulerId | Billing Scheduler ID | reference |  | 18 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CompletionTime | Completion time | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditApplicationStatus | Credits Application Status | picklist |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DocGenCompletionTime | Invoice Document Generation Completion Time | datetime |  |  |  |  |
| DocGenStartTime | Invoice Document Generation Start Time | datetime |  |  |  |  |
| DocGenStatus | Invoice Document Generation Status | picklist |  | 255 |  |  |
| Id | Invoice Batch Run ID | id |  | 18 |  |  |
| InvoiceBatchRunNumber | Invoice Batch Run Number | string |  | 255 |  |  |
| InvoiceDocsGenFailed | Invoice Document Generation Failures | int | 9 |  |  |  |
| InvoiceDocsGenerated | Invoice Documents Generated | int | 9 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecoveryStatus | Recovery Status | picklist |  | 255 |  |  |
| StartTime | Start time | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusSubtype | Status Subtype | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotBillSchdUpdtDurDrftToPost | Total Billing Schedules Updated During Draft to Posted | int | 9 |  |  |  |
| TotalBillSchedRecovered | Total Billing Schedules Recovered | int | 9 |  |  |  |
| TotalBillSchedUnrecovered | Total Billing Schedules Unrecovered | int | 9 |  |  |  |
| TotalBillingSchedulesFailed | Total Billing Schedules Failed | int | 9 |  |  |  |
| TotalBsSuccessfullyProcessed | Total Billing Schedules Successfully Processed | int | 9 |  |  |  |
| TotalDraftInvoiceAmount | Total Draft Invoice Amount | currency |  |  | 18 | 2 |
| TotalDraftInvoices | Total Draft Invoices | int | 9 |  |  |  |
| TotalFilteredBillingSchedules | Total Matching Billing Schedules | int | 9 |  |  |  |
| TotalInvSuccessfullyProcessed | Total Invoices Successfully Processed | int | 9 |  |  |  |
| TotalInvoicedAmount | Total Invoiced Amount | currency |  |  | 18 | 2 |
| TotalInvoicesCanceled | Total Invoices Canceled | int | 9 |  |  |  |
| TotalInvoicesFailed | Total Invoices Failed | int | 9 |  |  |  |
| TotalInvoicesGenerated | Total Invoices Generated | int | 9 |  |  |  |
| TotalPostedInvoices | Total Posted Invoices | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
