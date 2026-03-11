---
title: "ConnectApi.AudienceCriterionInput"
domain: apex-reference
topic: connectapiaudiencecriterioninput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.790Z
keywords: [ConnectApi.AudienceCriterionInput, See]
---

# ConnectApi.AudienceCriterionInput

# ConnectApi.AudienceCriterionInput

Personalization audience criterion.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criterion | List<ConnectApi.​AudienceCriterion​ValueInput> | List of mappings of audience criteria fields and values. | Required when creating an audienceOptional when updating an audience | 48.0 |
| criterionNumber | Integer | Number associated with the audience criterion in a formula. For example, (1 AND 2) OR 3. If unspecified, criteria are assigned numbers in the order that they’re added. | Optional | 48.0 |
| criterionOperator | ConnectApi.​AudienceCriteria​Operator | Operator used in the personalization audience criterion. Values are:ContainsEqualGreaterThanGreaterThanOrEqualIncludesLessThanLessThanOrEqualNotEqualNotIncludesStartsWith | Required when creating an audienceOptional when updating an audience | 48.0 |
| criterionType | ConnectApi.​AudienceCriteria​Type | Type of personalization audience criterion. Values are:Audience—Criterion based on audience.Default—Audience has no criteria.Domain—Criterion based on domain.FieldBased—Criterion based on object fields.GeoLocation—Criterion based on location.Permission—Criterion based on standard or custom permissions.Profile—Criterion based on profile. | Required when creating an audienceOptional when updating an audience | 48.0 |

#### See Also

-   [ConnectApi.AudienceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience.htm "A personalization audience.")