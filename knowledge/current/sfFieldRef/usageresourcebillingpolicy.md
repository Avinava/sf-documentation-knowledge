---
title: "UsageResourceBillingPolicy"
domain: sfFieldRef
topic: usageresourcebillingpolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:15.876Z
estimatedTokens: 329
keywords: [UsageResourceBillingPolicy, how, usage, accumulated, rating, resource.This, API, version, 62.0, later]
---

# UsageResourceBillingPolicy

> Represents information about how the usage is accumulated before
         rating a usage resource.This object is available in API version 62.0 and
      later.

# UsageResourceBillingPolicy

Represents information about how the usage is accumulated before rating a usage resource.This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see UsageResourceBillingPolicy in the Usage Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Code | Code | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Usage Aggregation Policy ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageAccumulationMethod | Usage Accumulation Method | picklist |  | 255 |  |  |
| UsageAccumulationPeriod | Usage Accumulation Period | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
