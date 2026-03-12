---
title: "Audience Criterion Input"
domain: chatterapi
topic: audience-criterion-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.009Z
estimatedTokens: 371
keywords: [Audience, Criterion, Input]
---

# Audience Criterion Input

> Audience criterion.

# Audience Criterion Input

Audience criterion.

Root XML tag

<audienceCriteria>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criterion | Audience Criterion Value Input[] | List of mappings of audience criteria fields and values. | Required when creating an audienceOptional when updating an audience | 47.0 |
| criterionNumber | Integer | Number associated with the audience criterion in a formula. For example, (1 AND 2) OR 3. If unspecified, criteria are assigned numbers in the order that they’re added. | Optional | 47.0 |
| criterionOperator | String | Operator used in the personalization audience criterion. Values are:ContainsEqualGreaterThanGreaterThanOrEqualIncludesLessThanLessThanOrEqualNotEqualNotIncludesStartsWith | Required when creating an audienceOptional when updating an audience | 47.0 |
| criterionType | String | Type of personalization audience criterion. Values are:Audience—Criterion based on audience.Default—Audience has no criteria.Domain—Criterion based on domain.FieldBased—Criterion based on object fields.GeoLocation—Criterion based on location.Permission—Criterion based on standard or custom permissions.Profile—Criterion based on profile. | Required when creating an audienceOptional when updating an audience | 47.0 |

#### See Also

-   [Audience Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_audience_input.htm "An audience.")

## Code Examples

```
{
   "criterion": [
      {
      "permission": "AssignTopics",
      "isEnabled": "true"
      }
   ],
   "criterionNumber": 1,
   "criterionOperator": "Equal",
   "criterionType": "Permission"
}
```

## Related Topics

- Audience Criterion Value Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_audience_criterion_value_input.htm)
- Audience Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_audience_input.htm)
