---
title: "ConnectApi.AudienceCriterionValueInput"
domain: apex-reference
topic: connectapiaudiencecriterionvalueinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.794Z
keywords: [ConnectApi.AudienceCriterionValueInput, See]
---

# ConnectApi.AudienceCriterionValueInput

# ConnectApi.AudienceCriterionValueInput

Audience criterion value.

| Property | Type | Description | Required or Optional | Available Version |
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

-   [ConnectApi.AudienceCriterionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience_criterion.htm "Personalization audience criterion.")