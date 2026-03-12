---
title: "WorkerCompCoverageClass"
domain: sfFieldRef
topic: workercompcoverageclass
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.844Z
estimatedTokens: 418
keywords: [WorkerCompCoverageClass, compensation, coverage, worker, belongs, API, version, 60.0, later]
---

# WorkerCompCoverageClass

> Represents the compensation coverage class that a worker belongs to.
      This object is available in API version 60.0 and later.

# WorkerCompCoverageClass

Represents the compensation coverage class that a worker belongs to. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see WorkerCompCoverageClass in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Worker Compensation Coverage Class ID | id |  | 18 |  |  |
| InsurancePolicyCoverageId | Insurance Policy Coverage ID | reference |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Premium | Premium | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalExposure | Total Exposure | currency |  |  | 18 | 2 |
| WorkerClass | Worker Class | picklist |  | 40 |  |  |
| WorkerCount | Number of Workers | int | 9 |  |  |  |
| WorkerLocationId | Associated Location ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
