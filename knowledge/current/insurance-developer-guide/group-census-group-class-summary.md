---
title: "Group Census Group Class Summary"
domain: insurance-developer-guide
topic: group-census-group-class-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.601Z
estimatedTokens: 525
keywords: [Group, Census, Summary, Output, representation, data, aggregated]
---

# Group Census Group Class Summary

> Output representation of census summary data aggregated by group class.

# Group Census Group Class Summary

Output representation of census summary data aggregated by group class.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fullTime​MemberCount | Integer | Total number of full-time members for this group class. | Small, 65.0 | 65.0 |
| groupCensusId | String | ID of the group census. | Small, 65.0 | 65.0 |
| groupClassId | String | ID of the group class. | Small, 65.0 | 65.0 |
| id | String | ID of the group census group class summary record. | Small, 65.0 | 65.0 |
| mbrWithMore​Than1Chld​Count | Integer | Total number of members who have more than one child dependent for this group class. | Small, 65.0 | 65.0 |
| mbrWithMore​Than2ChldCount | Integer | Total number of members who have more than two child dependents for this group class. | Small, 65.0 | 65.0 |
| mbrWithout​DependentCount | Integer | Total number of members who have no dependents for this group class. | Small, 65.0 | 65.0 |
| memberOptOut​Count | Integer | Total number of members who have actively opted out of all insurance plans for this group class. | Small, 65.0 | 65.0 |
| memberWith​DependentCount | Integer | Total number of members who have at least one dependent of any type, such as spouse or children for this group class. | Small, 65.0 | 65.0 |
| memberWith​OneChildCount | Integer | Total number of members who have exactly one child dependent for this group class. | Small, 65.0 | 65.0 |
| memberWith​SpouseCount | Integer | Total number of members who have a spouse listed as a dependent for this group class. | Small, 65.0 | 65.0 |
| partTime​MemberCount | Integer | Total number of part-time members for this group class. | Small, 65.0 | 65.0 |
| totalDependents | Integer | Total number of dependents for this group class. | Small, 65.0 | 65.0 |
| totalMember​PlusDependent | Integer | Total of all members and all their dependents for this group class. | Small, 65.0 | 65.0 |
| totalMembers | Integer | Total number of members for this group class. | Small, 65.0 | 65.0 |

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
