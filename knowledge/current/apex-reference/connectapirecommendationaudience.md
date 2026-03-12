---
title: "ConnectApi.RecommendationAudience"
domain: apex-reference
topic: connectapirecommendationaudience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.826Z
estimatedTokens: 351
keywords: [ConnectApi.RecommendationAudience, custom, recommendation, audience]
---

# ConnectApi.RecommendationAudience

> A custom recommendation audience.

# ConnectApi.RecommendationAudience

A custom recommendation audience.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| criteria | ConnectApi.AudienceCriteria | The criteria for the custom recommendation audience type. | 36.0 |
| id | String | 18-character ID of the custom recommendation audience. | 35.0 |
| memberCount | Integer | ImportantThis property is available only in version 35.0. In version 36.0 and later, this property is available in ConnectApi.CustomListAudienceCriteria.Number of members in the custom recommendation audience. | 35.0 only |
| members | ConnectApi.​UserReferencePage | ImportantThis property is available only in version 35.0. In version 36.0 and later, this property is available in ConnectApi.CustomListAudienceCriteria.Members of the custom recommendation audience. | 35.0 only |
| modifiedBy | ConnectApi.User | User who last modified the custom recommendation audience. | 36.0 |
| modifiedDate | Datetime | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. | 36.0 |
| name | String | Name of the custom recommendation audience. | 35.0 |
| url | String | URL to the custom recommendation audience. | 35.0 |

#### See Also

-   [ConnectApi.RecommendationAudiencePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_audience_collection.htm "A list of custom recommendation audiences.")

## Related Topics

- ConnectApi.AudienceCriteria (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_criteria.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.CustomListAudienceCriteria (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_custom_list_audience_criteria.htm)
- ConnectApi.​UserReferencePage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_reference_collection.htm)
- ConnectApi.User (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_User.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.RecommendationAudiencePage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_audience_collection.htm)
