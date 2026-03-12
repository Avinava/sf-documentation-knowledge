---
title: "ConnectApi.AudienceCriteria"
domain: apex-reference
topic: connectapiaudiencecriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.111Z
estimatedTokens: 264
keywords: [ConnectApi.AudienceCriteria, Custom, recommendation, audience, criteria.]
---

# ConnectApi.AudienceCriteria

> Custom recommendation audience criteria.

# ConnectApi.AudienceCriteria

Custom recommendation audience criteria.

This class is abstract.

This class is a superclass of:

-   [ConnectApi.CustomListAudienceCriteria](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_custom_list_audience_criteria.htm "Criteria for the custom list type of custom recommendation audience.")
-   [ConnectApi.NewUserAudienceCriteria](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_new_user_audience_criteria.htm "Criteria for the new members type of custom recommendation audience.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| type | ConnectApi.​RecommendationAudience​CriteriaType | Specifies the custom recommendation audience criteria type. One of these values:CustomList—A custom list of users makes up the audience.MaxDaysInCommunity—New members make up the audience. | 36.0 |

#### See Also

-   [ConnectApi.RecommendationAudience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_audience.htm "A custom recommendation audience.")

## Related Topics

- ConnectApi.CustomListAudienceCriteria (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_custom_list_audience_criteria.htm)
- ConnectApi.NewUserAudienceCriteria (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_new_user_audience_criteria.htm)
- ConnectApi.​RecommendationAudience​CriteriaType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.RecommendationAudience (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_audience.htm)
