---
title: "ConnectApi.RecommendationAudienceInput"
domain: apex-reference
topic: connectapirecommendationaudienceinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.448Z
estimatedTokens: 459
keywords: [ConnectApi.RecommendationAudienceInput, custom, recommendation, audience.]
---

# ConnectApi.RecommendationAudienceInput

> A custom recommendation audience.

# ConnectApi.RecommendationAudienceInput

A custom recommendation audience.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | ConnectApi.AudienceCriteriaInput | The criteria for the custom recommendation audience type. | OptionalIf not specified when creating a recommendation audience, the audience criteria type defaults to custom list. | 36.0 |
| memberOperation​Type | ConnectApi.​Recommendation​AudienceMember​OperationType | ImportantThis property is available only in version 35.0. In version 36.0 and later, use ConnectApi.CustomListAudienceCriteriaInput.The operation to carry out on the audience members.Add—Adds specified members to the audience.Remove—Removes specified members from the audience. | Required to update a recommendation audienceDon’t use or specify null to create a recommendation audience | 35.0 only |
| members | List<String> | ImportantThis property is available only in version 35.0. In version 36.0 and later, use ConnectApi.CustomListAudienceCriteriaInput.A collection of user IDs.When updating an audience, you can include up to 100 members. An audience can have up to 100,000 members, and each Experience Cloud site can have up to 100 audiences. | Required to update a recommendation audienceDon’t use or specify null to create a recommendation audience | 35.0 only |
| name | String | The unique name of the custom recommendation audience. | Optional to update a recommendation audienceRequired to create a recommendation audience | 35.0 |

#### See Also

-   [createRecommendationAudience(communityId, recommendationAudience)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_createRecommendationAudience_3 "Create an audience for a custom recommendation.")

## Related Topics

- ConnectApi.AudienceCriteriaInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_audience_criteria.htm)
- ConnectApi.​Recommendation​AudienceMember​OperationType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.CustomListAudienceCriteriaInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_custom_list_audience_criteria.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- createRecommendationAudience(communityId, recommendationAudience) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm)
