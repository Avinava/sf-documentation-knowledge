---
title: "PricingAdjBatchJob"
domain: sfFieldRef
topic: pricingadjbatchjob
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.640Z
estimatedTokens: 439
keywords: [PricingAdjBatchJob, collective, multiple, records, their, prices, adjustments, API, version, 62.0, later]
---

# PricingAdjBatchJob

> Represents the collective update of multiple records on their prices
         and other adjustments.  This object is available in API version 62.0 and
      later.

# PricingAdjBatchJob

Represents the collective update of multiple records on their prices and other adjustments. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PricingAdjBatchJob in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Pricing Adjustment Batch Job ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastTriggeredDate | Last Triggered Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProcessedRecordsCount | Processed Records Count | long | 18 |  |  |  |
| RecordCount | Record Count | long | 18 |  |  |  |
| RecordList | Record List | textarea |  | 131072 |  |  |
| ShouldSkipBulkRetry | Should Skip Bulk Retry | string |  | 40 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetObject | Target Object | picklist |  | 255 |  |  |
| UpdateType | Update Type | picklist |  | 255 |  |  |
| UpdateValue | Update Value | double |  |  | 18 | 6 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
