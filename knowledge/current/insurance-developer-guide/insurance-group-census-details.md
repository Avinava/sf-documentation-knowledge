---
title: "Insurance Group Census Details"
domain: insurance-developer-guide
topic: insurance-group-census-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.588Z
estimatedTokens: 461
keywords: [Insurance, Group, Census, Output, representation, summary, data]
---

# Insurance Group Census Details

> Output representation of group census summary data.

# Insurance Group Census Details

Output representation of group census summary data.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fullTimeMemberCount | Integer | Total number of full-time members. | Small, 65.0 | 65.0 |
| grpCensus​GrpClass​SummaryList | Group Census Group Class Summary[] | List of census summaries that are aggregated by group class. | Small, 65.0 | 65.0 |
| id | String | ID of the group census summary. | Small, 65.0 | 65.0 |
| mbrWith​MoreThan1​ChldCount | Integer | Total number of members who have more than one child dependent. | Small, 65.0 | 65.0 |
| mbrWith​MoreThan2​ChldCount | Integer | Total number of members who have more than two child dependents. | Small, 65.0 | 65.0 |
| mbrWithout​Dependent​Count | Integer | Total number of members who have no dependents. | Small, 65.0 | 65.0 |
| memberOpt​OutCount | Integer | Total number of members who have opted out of all insurance plans. | Small, 65.0 | 65.0 |
| memberWith​DependentCount | Integer | Total number of members who have at least one dependent of any type. | Small, 65.0 | 65.0 |
| memberWith​OneChildCount | Integer | Total number of members who have exactly one child dependent. | Small, 65.0 | 65.0 |
| memberWith​SpouseCount | Integer | Total number of members who have a spouse listed as a dependent. | Small, 65.0 | 65.0 |
| partTime​MemberCount | Integer | Total number of part-time members. | Small, 65.0 | 65.0 |
| totalDependents | Integer | Total of all dependent records across all members in the census. | Small, 65.0 | 65.0 |
| totalMember​PlusDependent | Integer | Total of all members and all their dependents. | Small, 65.0 | 65.0 |
| total​Members | Integer | Total number of primary members in the census. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "groupCensus": {
    "id": "a0B1x000000XXXXX",
    "memberOptOutCount": 5,
    "mbrWithoutDependentCount": 20,
    "memberWithOneChildCount": 15,
    "mbrWithMoreThan1ChldCount": 10,
    "mbrWithMoreThan2ChldCount": 5,
    "memberWithDependentCount": 30,
    "memberWithSpouseCount": 25,
    "totalMemberPlusDependent": 85,
    "totalDependents": 45,
    "totalMembers": 40,
    "fullTimeMemberCount": 35,
    "partTimeMemberCount": 5,
    "grpCensusGrpClassSummaryList": [
      {
        "id": "a0C1x000000YYYYY",
        "groupCensusId": "a0B1x000000XXXXX",
        "groupClassId": "a0D1x000000ZZZZZ",
        "memberOptOutCount": 2,
        "mbrWithoutDependentCount": 10,
        "memberWithOneChildCount": 5,
        "mbrWithMoreThan1ChldCount": 3,
        "mbrWithMoreThan2ChldCount": 2,
        "memberWithDependentCount": 10,
        "memberWithSpouseCount": 8,
        "totalMemberPlusDependent": 28,
        "totalDependents": 15,
        "totalMembers": 13,
        "fullTimeMemberCount": 12,
        "partTimeMemberCount": 1
      }
    ]
  }
}
```

## Related Topics

- Group Census Group Class Summary (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_grp_census_grp_class_summary_output.htm)
