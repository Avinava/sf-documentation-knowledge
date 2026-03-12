---
title: "ConnectApi.AudienceInput"
domain: apex-reference
topic: connectapiaudienceinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.323Z
estimatedTokens: 287
keywords: [ConnectApi.AudienceInput, personalization, audience.]
---

# ConnectApi.AudienceInput

> A personalization audience.

# ConnectApi.AudienceInput

A personalization audience.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | List<ConnectApi.​AudienceCriterion​Input> | List of audience criteria to update or add. An audience can have up to 100 criteria. | Required when creating an audienceOptional when updating an audience | 48.0 |
| customFormula | String | Custom formula for the audience criteria. For example, (1 AND 2) OR 3. | Required when creating an audience with the formulaFilterType set to CustomLogicMatchesOptional, otherwise | 48.0 |
| formulaFilterType | ConnectApi.​FormulaFilterType | Formula filter type for the personalization audience. Values are:AllCriteriaMatch—All audience criteria are true (AND operation).AnyCriterionMatches—Any audience criterion is true (OR operation).CustomLogicMatches—Audience criteria match the custom formula (for example, (1 AND 2) OR 3). | Required when creating an audienceOptional when updating an audience | 48.0 |
| name | String | Name of the audience. | Required when creating an audienceOptional when updating an audience | 48.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​AudienceCriterion​Input (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience_criterion.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​FormulaFilterType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
