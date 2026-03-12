---
title: "ConnectApi.Audience"
domain: apex-reference
topic: connectapiaudience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.278Z
estimatedTokens: 280
keywords: [ConnectApi.Audience, personalization, audience]
---

# ConnectApi.Audience

> A personalization audience.

# ConnectApi.Audience

A personalization audience.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| criteria | List<ConnectApi.​AudienceCriteria​Detail> | Criteria details for the audience. | 48.0 |
| customFormula | String | Custom formula for the audience criteria. For example, (1 AND 2) OR 3. | 48.0 |
| formulaFilterType | ConnectApi.​FormulaFilterType | Formula filter type for the personalization audience. Values are:AllCriteriaMatch—All audience criteria are true (AND operation).AnyCriterionMatches—Any audience criterion is true (OR operation).CustomLogicMatches—Audience criteria match the custom formula (for example, (1 AND 2) OR 3). | 48.0 |
| id | String | ID of the audience. | 48.0 |
| name | String | Name of the audience. | 48.0 |
| targets | List<ConnectApi.​AudienceTarget​Assignment> | Target assignments for the audience. | 48.0 |
| url | String | URL to this audience. | 48.0 |

#### See Also

-   [ConnectApi.AudienceCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_collection.htm "Collection of personalization audiences.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​AudienceCriteria​Detail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_criteria_details.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​FormulaFilterType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​AudienceTarget​Assignment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_target_assignment.htm)
- ConnectApi.AudienceCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_collection.htm)
