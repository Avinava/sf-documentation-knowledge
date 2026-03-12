---
title: "PricingAdjBatchJobLog"
domain: sfFieldRef
topic: pricingadjbatchjoblog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.659Z
estimatedTokens: 385
keywords: [PricingAdjBatchJobLog, report, failed, adjustment, requests, along, error, message, reason, failure, API, version, 62.0, later]
---

# PricingAdjBatchJobLog

> Represents the report that contains a list of failed adjustment requests
         along with an error message that describes the reason for failure. This object is
      available in API version 62.0 and later.

# PricingAdjBatchJobLog

Represents the report that contains a list of failed adjustment requests along with an error message that describes the reason for failure. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PricingAdjBatchJobLog in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedValue | Adjusted Value | double |  |  | 18 | 6 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ErrorMessage | Error Message | textarea |  | 1000 |  |  |
| Id | Pricing Adjustment Batch Job Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PricingAdjBatchJobId | Pricing Adjustment Batch Job ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetRecord | Target Record | string |  | 25 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
