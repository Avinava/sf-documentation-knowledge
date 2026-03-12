---
title: "ConnectApi.InsuranceGroupCensusOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancegroupcensusoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.551Z
estimatedTokens: 409
keywords: [Output, representation, group, census, summary]
---

# ConnectApi.InsuranceGroupCensusOutputRepresentation

> Output representation of a group census summary.

# ConnectApi.InsuranceGroupCensusOutputRepresentation

Output representation of a group census summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fullTimeMemberCount | Integer | Total number of full-time members. | 65.0 |
| grpCensusGrpClassSummaryList | List<ConnectApi.InsuranceGrpCensusGrpClassSummaryOutputRepresentation> | List of census summaries that are aggregated by group class. | 65.0 |
| id | String | ID of the group census summary. | 65.0 |
| mbrWithMoreThan1ChldCount | Integer | Total number of members who have more than one child dependent. | 65.0 |
| mbrWithMoreThan2ChldCount | Integer | Total number of members who have more than two child dependents. | 65.0 |
| mbrWithoutDependentCount | Integer | Total number of members who have no dependents. | 65.0 |
| memberOptOutCount | Integer | Total number of members who have actively opted out of all insurance plans. | 65.0 |
| memberWithDependentCount | Integer | Total number of members who have at least one dependent of any type. | 65.0 |
| memberWithOneChildCount | Integer | Total number of members who have exactly one child dependent. | 65.0 |
| memberWithSpouseCount | Integer | Total number of members who have a spouse listed as a dependent. | 65.0 |
| partTimeMemberCount | Integer | Total number of part-time members. | 65.0 |
| totalDependents | Integer | Total of all dependent records across all members in the census. | 65.0 |
| totalMemberPlusDependent | Integer | Total of all members and all their dependents. | 65.0 |
| totalMembers | Integer | Total number of primary members in the census. | 65.0 |

## Related Topics

- ConnectApi.InsuranceGrpCensusGrpClassSummaryOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_grp_census_grp_class_summary_output.htm)
