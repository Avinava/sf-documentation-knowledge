---
title: "EmissionsAllocation"
domain: sfFieldRef
topic: emissionsallocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.905Z
estimatedTokens: 348
keywords: [EmissionsAllocation, emissions, child, partner, account, allocated]
---

# EmissionsAllocation

> Represents information about the emissions from a child or partner account
         that are allocated to an account.

# EmissionsAllocation

Represents information about the emissions from a child or partner account that are allocated to an account.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EmissionsAllocation in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllocatedFromAccountId | Account ID | reference |  | 18 |  |  |
| AllocatedFromScope | Allocated From Scope | picklist |  | 255 |  |  |
| AllocatedToAccountId | Account ID | reference |  | 18 |  |  |
| AllocatedToScope | Allocated To Scope | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Emissions Allocation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Percentage | Percentage | percent |  |  | 13 | 3 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
