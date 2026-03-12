---
title: "Recommendation Reaction"
domain: chatterapi
topic: recommendation-reaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.821Z
estimatedTokens: 443
keywords: [Recommendation, Reaction, produced, strategy]
---

# Recommendation Reaction

> Reaction to a recommendation produced by a recommendation
      strategy.

# Recommendation Reaction

Reaction to a recommendation produced by a recommendation strategy.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aiModel | String | Reserved for future use. | Small, 47.0 | 47.0 |
| contextRecord | Reference | Reference to the context record. | Small, 45.0 | 45.0 |
| createdBy | Reference | Reference to the reaction creator. | Small, 45.0 | 45.0 |
| createdDate | String | Reaction creation date. Format is ISO 8601. | Small, 45.0 | 45.0 |
| externalId | String | External target ID of the recommendation reacted on. This ID doesn’t need to be a Salesforce 18-character ID. For example, it can be a product number from an external system. | Small, 46.0 | 46.0 |
| id | String | Reaction record ID. | Small, 45.0 | 45.0 |
| onBehalfOf | Reference | Reference to the user or record that is indirectly reacting to the recommendation. | Small, 45.0 | 45.0 |
| reactionType | String | Type of reaction to a recommendation. Values are:AcceptedRejected | Small, 45.0 | 45.0 |
| recommendation​Mode | String | Reserved for future use. | Small, 46.0 | 46.0 |
| recommendation​Score | Double | Reserved for future use. | Small, 46.0 | 46.0 |
| strategy | Record Snapshot | Strategy that recommended the target record. | Small, 45.0 | 45.0 |
| targetAction | Record Snapshot | Target action that is recommended. | Small, 45.0 | 45.0 |
| targetRecord | Reference | Reference to the target record. | Small, 45.0 | 45.0 |
| url | String | URL to the recommendation reaction. | Small, 45.0 | 45.0 |

#### See Also

-   [Recommendation Reaction Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_reaction_collection.htm "A list of recommendation reactions.")

## Related Topics

- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Record Snapshot (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_snapshot.htm)
- Recommendation Reaction Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_reaction_collection.htm)
