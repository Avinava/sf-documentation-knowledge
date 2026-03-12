---
title: "Audience"
domain: chatterapi
topic: audience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.265Z
estimatedTokens: 287
keywords: [Audience]
---

# Audience

> An audience.

# Audience

An audience.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Audience Criteria Details[] | Criteria details for the audience. | Medium, 47.0 | 47.0 |
| customFormula | String | Custom formula for the audience criteria. For example, (1 AND 2) OR 3. | Small, 47.0 | 47.0 |
| formulaFilter​Type | String | Formula filter type for the personalization audience. Values are:AllCriteriaMatch—All audience criteria are true (AND operation).AnyCriterionMatches—Any audience criterion is true (OR operation).CustomLogicMatches—Audience criteria match the custom formula (for example, (1 AND 2) OR 3). | Small, 47.0 | 47.0 |
| id | String | ID of the audience. | Small, 47.0 | 47.0 |
| name | String | Name of the audience. | Small, 47.0 | 47.0 |
| targets | Audience Target Assignment[] | Target assignments for the audience. | Small, 47.0 | 47.0 |
| url | String | URL to this audience. | Small, 47.0 | 47.0 |

#### See Also

-   [Audience Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience_collection.htm "Collection of audiences.")

## Related Topics

- Audience Criteria Details (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience_criteria_details.htm)
- Audience Target Assignment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience_target_assignment.htm)
- Audience Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience_collection.htm)
