---
title: "BranchUnitRelatedRecord"
domain: sfFieldRef
topic: branchunitrelatedrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.320Z
estimatedTokens: 399
keywords: [BranchUnitRelatedRecord, record, case, account, associated, attributed, branch, unit, API, version, 51.0, later]
---

# BranchUnitRelatedRecord

> Represents a record such as a case or account that is associated with or
      attributed to a branch unit. This object is available in API version 51.0 and later.

# BranchUnitRelatedRecord

Represents a record such as a case or account that is associated with or attributed to a branch unit. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BranchUnitRelatedRecord in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| BranchUnitId | Branch Unit ID | reference |  | 18 |  |  |
| BusinessUnitMemberId | Business Member ID | reference |  | 18 |  |  |
| Comment | Comment | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Branch Unit Related Record ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Reason | Reason | picklist |  | 40 |  |  |
| RelatedObjectName | Related Object Name | picklist |  | 255 |  |  |
| RelatedRecordAssocCriteriaId | Related Record Association ID | reference |  | 18 |  |  |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
