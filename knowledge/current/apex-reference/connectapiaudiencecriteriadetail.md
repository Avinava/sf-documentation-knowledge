---
title: "ConnectApi.AudienceCriteriaDetail"
domain: apex-reference
topic: connectapiaudiencecriteriadetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.973Z
keywords: [ConnectApi.AudienceCriteriaDetail, See]
---

# ConnectApi.AudienceCriteriaDetail

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