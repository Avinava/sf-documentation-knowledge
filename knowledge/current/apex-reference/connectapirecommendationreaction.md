---
title: "ConnectApi.RecommendationReaction"
domain: apex-reference
topic: connectapirecommendationreaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.037Z
estimatedTokens: 409
keywords: [ConnectApi.RecommendationReaction, reaction, recommendation, produced, strategy]
---

# ConnectApi.RecommendationReaction

> A reaction to a recommendation produced by a recommendation strategy

# ConnectApi.RecommendationReaction

A reaction to a recommendation produced by a recommendation strategy

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| aiModel | String | Reserved for future use. | 47.0 |
| contextRecord | ConnectApi.Reference | Reference to the context record. | 45.0 |
| createdBy | ConnectApi.​Reference | Reference to the reaction creator. | 45.0 |
| createdDate | Datetime | Reaction creation date. | 45.0 |
| externalId | String | External target ID of the recommendation reacted on. This ID doesn’t need to be a Salesforce 18-character ID. For example, it can be a product number from an external system. | 46.0 |
| id | String | Reaction record ID. | 45.0 |
| onBehalfOf | ConnectApi.​Reference | Reference to the user or record that is indirectly reacting to the recommendation. | 45.0 |
| reactionType | ConnectApi.​RecommendationReaction​Type | Type of reaction to a recommendation. Values are:AcceptedRejected | 45.0 |
| recommendation​Mode | String | Reserved for future use. | 46.0 |
| recommendation​Score | Double | Reserved for future use. | 46.0 |
| strategy | ConnectApi.​RecordSnapshot | Strategy that recommended the target record. | 45.0 |
| targetAction | ConnectApi.​RecordSnapshot | Target action that is recommended. | 45.0 |
| targetRecord | ConnectApi.​Reference | Reference to the target record. | 45.0 |
| url | String | URL to the recommendation reaction. | 45.0 |

#### See Also

-   [ConnectApi.RecommendationReactions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_reaction_collection.htm "A list of recommendation reactions.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- ConnectApi.​Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​RecommendationReaction​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- ConnectApi.​RecordSnapshot (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_snapshot.htm)
- ConnectApi.RecommendationReactions (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_n_b_a_reaction_collection.htm)
