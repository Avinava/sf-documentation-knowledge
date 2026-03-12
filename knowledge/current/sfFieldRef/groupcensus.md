---
title: "GroupCensus"
domain: sfFieldRef
topic: groupcensus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.858Z
estimatedTokens: 722
keywords: [GroupCensus, snapshot, statistics, eligible, members, employees, group, employer, association, their, legal, dependents, entity, quoting, rating]
---

# GroupCensus

> Represents a snapshot of statistics about eligible members (employees or members) of a group (employer or association) and their legal dependents. Use this entity in quoting, rating, and the subsequent enrollment process. Child object of employer or group Account. This object is available in API version 55.0 and later.

# GroupCensus

Represents a snapshot of statistics about eligible members (employees or members) of a group (employer or association) and their legal dependents. Use this entity in quoting, rating, and the subsequent enrollment process. Child object of employer or group Account. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GroupCensus in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveDate | Effective Date | date |  |  |  |  |
| EffectiveEndDate | Effective End Date | datetime |  |  |  |  |
| EffectiveStartDate | Effective Start Date | datetime |  |  |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| ExternalIdentifier | External Identifier | string |  | 50 |  |  |
| FullTimeMemberCount | Full Time Member Count | int | 9 |  |  |  |
| Id | Group Census ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadId | Lead ID | reference |  | 18 |  |  |
| MbrWithMoreThan1ChldCount | Member With More Than One Child Count | int | 9 |  |  |  |
| MbrWithMoreThan2ChldCount | Member With More Than Two Children Count | int | 9 |  |  |  |
| MbrWithoutDependentCount | Member Without Dependent Count | int | 9 |  |  |  |
| MemberOptOutCount | Member Opt Out Count | int | 9 |  |  |  |
| MemberWithDependentCount | Member With Dependent Count | int | 9 |  |  |  |
| MemberWithOneChildCount | Member With One Child Count | int | 9 |  |  |  |
| MemberWithSpouseCount | Member With Spouse Count | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartTimeMemberCount | Part Time Member Count | int | 9 |  |  |  |
| SourceSystemName | Source System Name | string |  | 50 |  |  |
| SourceSystemType | Source System Type | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalDependents | Total Dependents | int | 9 |  |  |  |
| TotalMemberPlusDependent | Total Members Plus Dependents | int | 9 |  |  |  |
| TotalMembers | Total Members | int | 9 |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
