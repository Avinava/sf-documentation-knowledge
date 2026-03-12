---
title: "PaymentBatchRun"
domain: sfFieldRef
topic: paymentbatchrun
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.197Z
estimatedTokens: 517
keywords: [PaymentBatchRun, batch, processing, job, processes, payments, Billing, payment, run, schedules, meet, criteria, processed, corresponding, records]
---

# PaymentBatchRun

> Represents a batch processing job that processes payments in Billing. During
         a payment batch run, all the payment schedules that meet the specified criteria are
         processed and the corresponding Payment records are created. These payments are then
         applied to invoices or invoice lines. This object is available in API version 64.0 and
      later.

# PaymentBatchRun

Represents a batch processing job that processes payments in Billing. During a payment batch run, all the payment schedules that meet the specified criteria are processed and the corresponding Payment records are created. These payments are then applied to invoices or invoice lines. This object is available in API version 64.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PaymentBatchRun in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingBatchSchedulerId | Billing Scheduler ID | reference |  | 18 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CompletionTime | Completion time | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Payment Batch Run ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PaymentBatchRunNumber | Payment Batch Run Number | string |  | 255 |  |  |
| StartTime | Start time | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalFailedScheduleItems | Total Failed Schedule Items | int | 9 |  |  |  |
| TotalFilteredScheduleItems | Total Filtered Schedule Items | int | 9 |  |  |  |
| TotalProcessedScheduleItems | Total Processed Schedule Items | int | 9 |  |  |  |
| TotalScheduleItemsApplied | Total Schedule Items Applied | int | 9 |  |  |  |
| TotalScheduleItemsApplyFailed | Total Schedule Items Apply Failed | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
