---
title: "UsageGrantRolloverPolicy"
domain: sfFieldRef
topic: usagegrantrolloverpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.732Z
estimatedTokens: 331
keywords: [UsageGrantRolloverPolicy, policy, rollover, usage, grant.This, API, version, 62.0, later]
---

# UsageGrantRolloverPolicy

> Represents a policy about the rollover of a usage grant.This object is
      available in API version 62.0 and later.

# UsageGrantRolloverPolicy

Represents a policy about the rollover of a usage grant.This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see UsageGrantRolloverPolicy in the Usage Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Code | Code | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Usage Grant Rollover Policy ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRolloverAllowed | Rollover Allowed | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumRolloverCount | Maximum Rollover Count | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ShouldAllowRolloverExpiry | Allow Rollover Expiry | boolean |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
