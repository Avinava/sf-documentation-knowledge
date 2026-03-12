---
title: "Insurance Census Summary Sync Details"
domain: insurance-developer-guide
topic: insurance-census-summary-sync-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.535Z
estimatedTokens: 150
keywords: [Insurance, Census, Summary, Sync, Output, representation, employee, synchronization]
---

# Insurance Census Summary Sync Details

> Output representation of an employee census summary synchronization.

# Insurance Census Summary Sync Details

Output representation of an employee census summary synchronization.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorRepresentation> | List of errors that occurred during processing. | Small, 65.0 | 65.0 |
| groupCensus | Insurance Group Census Details | Summary details for the group census. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "errors": null,
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

- Insurance Group Census Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_group_census_output.htm)
