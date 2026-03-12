---
title: "Non-Entity Recommendation"
domain: chatterapi
topic: non-entity-recommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.895Z
estimatedTokens: 235
keywords: [Non-Entity, Recommendation, non-Salesforce, entity, application]
---

# Non-Entity Recommendation

> A recommendation for a non-Salesforce entity, such as an
      application.

# Non-Entity Recommendation

A recommendation for a non-Salesforce entity, such as an application.

This response body isn’t available in version 34.0 and later. In version 34.0 and later, the [Chatter Recommendation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation.htm#connect_responses_recommendation "A Chatter, custom, or static recommendation.") response body is used for all recommendations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| displayLabel | String | Localized label of the non-entity object. | Small, 32.0 | 32.0 |
| explanation | Explanation Summary | The recommendation explanation. | Big, 29.0 | 23.0 |
| motif | Motif | Motif for the non-entity object. | Small, 32.0 | 32.0 |
| recommendationType | String | Specifies the type of record being recommended.appsarticlesfilesgroupsrecordstopicsusers | Small, 32.0 | 32.0 |

## Related Topics

- Chatter Recommendation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation.htm)
- Explanation Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_explanation_summary.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
