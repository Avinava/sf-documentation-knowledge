---
title: "InvoiceBatchRunCriteria"
domain: sfFieldRef
topic: invoicebatchruncriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.837Z
estimatedTokens: 488
keywords: [InvoiceBatchRunCriteria, batch, processing, job, criteria, Subscription, Management, invoice, run, billing, schedules, meet, processed, resulting, generation]
---

# InvoiceBatchRunCriteria

> Represents a batch processing job and its required criteria in
         Subscription Management. During an invoice batch run, all billing schedules that meet the
         specified criteria are processed, resulting in the generation of invoices. This object
      is available in API version 55.0 and later.

# InvoiceBatchRunCriteria

Represents a batch processing job and its required criteria in Subscription Management. During an invoice batch run, all billing schedules that meet the specified criteria are processed, resulting in the generation of invoices. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [InvoiceBatchRunCriteria](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_invoicebatchruncriteria.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CriteriaExpression | Criteria Expression | textarea |  | 1000 |  |  |
| CriteriaMatchType | Criteria Match Type | picklist |  | 255 |  |  |
| ExpectedInvoiceStatus | Expected Invoice Status | picklist |  | 255 |  |  |
| Id | Invoice Batch Run Criteria ID | id |  | 18 |  |  |
| InvoiceBatchRunCriteriaNumber | Invoice Batch Run Criteria Number | string |  | 255 |  |  |
| InvoiceDate | Invoice Date | date |  |  |  |  |
| InvoiceDateOffset | Invoice Date Offset | int | 9 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInvoiceDateFromRunDate | Invoice Date From Run Date | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetDate | Target Date | date |  |  |  |  |
| TargetDateOffset | Target Date Offset | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
