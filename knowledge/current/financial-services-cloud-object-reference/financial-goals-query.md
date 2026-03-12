---
title: "Financial Goals Query"
domain: financial-services-cloud-object-reference
topic: financial-goals-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.430Z
estimatedTokens: 393
keywords: [Financial, Goals, Query, goal, members, funding, parent, Person, Account, Household, Party, Relationship, Group, record]
---

# Financial Goals Query

> Query financial goals, goal members, and goal funding using the parent Person Account,
    Household, or Party Relationship Group record.

# Financial Goals Query

Query financial goals, goal members, and goal funding using the parent Person Account, Household, or Party Relationship Group record.

Resource

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filterCriteria | Filter Criteria[] | Filter criteria for the results. | Optional | 59.0 |
| financial​GoalFields | String[] | List of developer names of the fields from the FinancialGoal object to be retrieved. | Required for 59.0, Optional for 60.0 | 59.0 |
| financialGoal​FundingFields | String[] | List of field developer names from the FinancialAccount object to be retrieved. | Optional | 60.0 |
| financialGoal​PartyFields | String[] | List of field developer names from the FinancialGoalParty object to be retrieved. | Optional | 59.0 |
| limit | Integer | Maximum number of financial goals returned in each response. | Optional | 59.0 |
| offset | Integer | Offset for paging through returned financial goals. | Optional | 59.0 |
| orderBy | String | Fully qualified developer name of the field used to sort the results. | Optional | 59.0 |
| sortBy | String | Sort the results byAscorDescorder. | Optional | 59.0 |

Response body for POST

[Financial Goals List Output](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_financial_goals_list_output.htm "Queried financial goals.")

## Code Examples

```
/connect/financialplanning/financialgoals/query/parentRecordId
```

```
{
  "financialGoalFields": [
    "Name",
    "Description",
    "ActualAmount",
    "CompletionDate"
  ],
  "financialGoalPartyFields": [
    "AccountId",
    "Account.Name"
  ],
  "filterCriteria": [
    {
      "fieldName": "FinancialGoal.Type",
      "operator": "equals",
      "value": "Retirement"
    }
  ],
  "offset": 1,
  "limit": 10,
  "sortBy": "DESC",
  "orderBy": "FinancialGoal.Name"
}
```

## Related Topics

- Filter Criteria (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_filter_criteria_input.htm)
- Financial Goals List Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_financial_goals_list_output.htm)
