---
title: "ConnectApi.AudienceCriteriaDetail"
domain: apex-reference
topic: connectapiaudiencecriteriadetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.115Z
estimatedTokens: 319
keywords: [ConnectApi.AudienceCriteriaDetail, Personalization, audience, criteria.]
---

# ConnectApi.AudienceCriteriaDetail

> Personalization audience criteria.

# ConnectApi.AudienceCriteriaDetail

Personalization audience criteria.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| criterion | List<ConnectApi.​AudienceCriterion​Detail> | List of mappings of audience criteria fields and values. | 48.0 |
| criterionNumber | Integer | Number associated with the audience criterion in a formula. For example, (1 AND 2) OR 3. If unspecified, criteria are assigned numbers in the order that they’re added. | 48.0 |
| criterionOperator | ConnectApi.​AudienceCriteria​Operator | Operator used in the personalization audience criterion. Values are:ContainsEqualGreaterThanGreaterThanOrEqualIncludesLessThanLessThanOrEqualNotEqualNotIncludesStartsWith | 48.0 |
| criterionType | ConnectApi.​AudienceCriteria​Type | Type of personalization audience criterion. Values are:Audience—Criterion based on audience.Default—Audience has no criteria.Domain—Criterion based on domain.FieldBased—Criterion based on object fields.GeoLocation—Criterion based on location.Permission—Criterion based on standard or custom permissions.Profile—Criterion based on profile. | 48.0 |

#### See Also

-   [ConnectApi.Audience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm "A personalization audience.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​AudienceCriterion​Detail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_criterion_details.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​AudienceCriteria​Operator (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​AudienceCriteria​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.Audience (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience.htm)
