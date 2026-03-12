---
title: "GrpCensusGrpClassSummary"
domain: sfFieldRef
topic: grpcensusgrpclasssummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.970Z
estimatedTokens: 521
keywords: [GrpCensusGrpClassSummary, junction, group, census, statistics, members, associated]
---

# GrpCensusGrpClassSummary

> Represents a junction between group census and group class to get statistics about the
      group class members for the associated group census.

# GrpCensusGrpClassSummary

Represents a junction between group census and group class to get statistics about the group class members for the associated group census.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GrpCensusGrpClassSummary in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FullTimeMemberCount | Full Time Member Count | int | 9 |  |  |  |
| GroupCensusId | Group Census ID | reference |  | 18 |  |  |
| GroupClassId | Group Class ID | reference |  | 18 |  |  |
| Id | Group Census Group Class Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MbrWithMoreThan1ChldCount | Member With More Than One Child Count | int | 9 |  |  |  |
| MbrWithMoreThan2ChldCount | Member With More Than Two Children Count | int | 9 |  |  |  |
| MbrWithoutDependentCount | Member Without Dependent Count | int | 9 |  |  |  |
| MemberOptOutCount | Member Opt Out Count | int | 9 |  |  |  |
| MemberWithDependentCount | Member With Dependent Count | int | 9 |  |  |  |
| MemberWithOneChildCount | Member With One Child Count | int | 9 |  |  |  |
| MemberWithSpouseCount | Member With Spouse Count | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PartTimeMemberCount | Part Time Member Count | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalDependents | Total Dependents | int | 9 |  |  |  |
| TotalMemberPlusDependent | Total Members Plus Dependents | int | 9 |  |  |  |
| TotalMembers | Total Members | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
