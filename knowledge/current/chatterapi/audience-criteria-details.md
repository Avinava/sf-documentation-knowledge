---
title: "Audience Criteria Details"
domain: chatterapi
topic: audience-criteria-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.272Z
estimatedTokens: 311
keywords: [Audience, Criteria]
---

# Audience Criteria Details

> Audience criteria.

# Audience Criteria Details

Audience criteria.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| criterion | Audience Criterion Details[] | List of mappings of audience criteria fields and values. | Small, 47.0 | 47.0 |
| criterionNumber | Integer | Number associated with the audience criterion in a formula. For example, (1 AND 2) OR 3. If unspecified, criteria are assigned numbers in the order that they’re added. | Small, 47.0 | 47.0 |
| criterionOperator | String | Operator used in the personalization audience criterion. Values are:ContainsEqualGreaterThanGreaterThanOrEqualIncludesLessThanLessThanOrEqualNotEqualNotIncludesStartsWith | Small, 47.0 | 47.0 |
| criterionType | String | Type of personalization audience criterion. Values are:Audience—Criterion based on audience.Default—Audience has no criteria.Domain—Criterion based on domain.FieldBased—Criterion based on object fields.GeoLocation—Criterion based on location.Permission—Criterion based on standard or custom permissions.Profile—Criterion based on profile. | Small, 47.0 | 47.0 |

#### See Also

-   [Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience.htm "An audience.")

## Related Topics

- Audience Criterion Details (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience_criterion_details.htm)
- Audience (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_audience.htm)
