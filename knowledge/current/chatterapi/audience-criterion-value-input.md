---
title: "Audience Criterion Value Input"
domain: chatterapi
topic: audience-criterion-value-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.016Z
estimatedTokens: 496
keywords: [Audience, Criterion, Input]
---

# Audience Criterion Value Input

> Audience criterion value.

# Audience Criterion Value Input

Audience criterion value.

Root XML tag

<audienceCriterionValue>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| audienceId | String | ID of an audience. | Required if creating or updating an audience with the Audience criterion type. | 53.0 |
| city | String | City of a user. | Optional if creating or updating an audience with the GeoLocation criterion type | 48.0 |
| country | String | Country of a user. | Required if creating or updating an audience with the GeoLocation criterion type | 48.0 |
| domainId | String | Domain ID of a user. | Required if creating or updating an audience with the Domain criterion type | 48.0 |
| entityField | String | Field of an object. | Required if creating or updating an audience with the FieldBased criterion type | 48.0 |
| entityType | String | Type of object. | Required if creating or updating an audience with the FieldBased criterion type | 48.0 |
| fieldValue | String | Value of a field. | Required if creating or updating an audience with the FieldBased criterion type | 48.0 |
| isEnabled | Boolean | Specifies whether the permission is enabled (true) or not (false) for a user. | Required if creating or updating an audience with the Permission criterion type | 48.0 |
| permission | String | Valid API name of a standard user or custom permission. | Required if creating or updating an audience with the Permission criterion type | 48.0 |
| profileId | String | Profile ID of a user. | Required if creating or updating an audience with the Profile criterion type | 48.0 |
| subdivision | String | Subdivision of a user. | Required if creating or updating an audience with the GeoLocation criterion type and using the city property | 48.0 |

#### See Also

-   [Audience Criterion Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_audience_criteria_input.htm "Audience criterion.")

## Code Examples

```
{
   "permission": "AssignTopics",
   "isEnabled": "true"
}
```

## Related Topics

- Audience Criterion Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_audience_criteria_input.htm)
