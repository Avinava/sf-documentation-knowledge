---
title: "TenantUsageEntitlement"
domain: sfFieldRef
topic: tenantusageentitlement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.207Z
estimatedTokens: 445
keywords: [TenantUsageEntitlement, data, structure, features, functionalities, Salesforce, org, access, API, version, 28.0, later]
---

# TenantUsageEntitlement

> Represents a data structure that contains information about the features or
   functionalities that a Salesforce org has access to. This object is available in API version
  28.0 and later.

# TenantUsageEntitlement

Represents a data structure that contains information about the features or functionalities that a Salesforce org has access to. This object is available in API version 28.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TenantUsageEntitlement](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_tenantusageentitlement.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AmountUsed | Amount Used | double |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentAmountAllowed | Current Amount Allowed | double |  |  | 18 | 0 |
| EndDate | End Date | date |  |  |  |  |
| Frequency | Frequency | picklist |  | 255 |  |  |
| HasRollover | Has Rollover | boolean |  |  |  |  |
| Id | Tenant Usage Entitlement ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPersistentResource | Is Persistent Resource | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Setting Label | string |  | 255 |  |  |
| OverageGrace | Overage Grace | percent |  |  | 5 | 2 |
| ResourceGroupKey | Resource Group Key | string |  | 120 |  |  |
| Setting | Setting | string |  | 120 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageDate | Usage Date | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
