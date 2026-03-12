---
title: "BillingBatchFilterCriteria"
domain: sfFieldRef
topic: billingbatchfiltercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.875Z
estimatedTokens: 457
keywords: [BillingBatchFilterCriteria, filter, eligible, billing, schedules, satisfy, order, picked, invoice, run, API, version, 62.0, later]
---

# BillingBatchFilterCriteria

> Represents the filter that all eligible billing schedules must satisfy in
         order to be picked up by an invoice run. This object is available in API version 62.0
      and later.

# BillingBatchFilterCriteria

Represents the filter that all eligible billing schedules must satisfy in order to be picked up by an invoice run. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BillingBatchFilterCriteria in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BatchCriteriaId | Batch Criteria ID | reference |  | 18 |  |  |
| BillingBatchFilterCriteriaNumber | Billing Batch Filter Criteria Number | string |  | 255 |  |  |
| ColumnEnum | Column | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CriteriaFieldType | Criteria Field Type | picklist |  | 255 |  |  |
| CriteriaSequence | Criteria Sequence | int | 9 |  |  |  |
| Id | Billing Batch Filter Criteria ID | id |  | 18 |  |  |
| InvoiceRunMatchingValue | Invoice Run Matching Value | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ObjectName | Object | picklist |  | 255 |  |  |
| Operation | Operation | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PaymentRunMatchingValue | Payment Run Matching Value | picklist |  | 40 |  |  |
| StandardCriteriaField | Standard Criteria Field | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Value | Value | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
