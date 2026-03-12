---
title: "Recommendations"
domain: chatterapi
topic: recommendations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.758Z
estimatedTokens: 1174
keywords: [Recommendations, Salesforce, several, Connect, REST, API, supports, Einstein, Best, Action, custom, Experience, Cloud, sites, Chatter]
---

# Recommendations

> Salesforce provides several types of recommendations, and Connect REST API supports
    Einstein Next Best Action, custom recommendations for Experience Cloud sites, and Chatter
    recommendations.

# Recommendations

Salesforce provides several types of recommendations, and Connect REST API supports Einstein Next Best Action, custom recommendations for Experience Cloud sites, and Chatter recommendations.

## Einstein Next Best Action

Einstein Next Best Action lets you use strategies to recommend actions and offers. You can deliver the right recommendation at the right moment to the right person. Integrate business rules, predictive models, and data—both inside and outside of Salesforce—to create unique strategies for all your use cases.

Available resources for Einstein Next Best Action recommendations:

| Resource | HTTP Methods | Tasks |
| --- | --- | --- |
| /connect/recommendations/recommendationId | GET | Get a recommendation. |
| /connect/recommendation-strategies/​strategyName/recommendations | POST | Execute a strategy. |
| /connect/recommendation-strategies/reactions | GET, POST | Get and record user reactions to recommendations. |
| /connect/recommendation-strategies/reactions/​reactionId | GET, DELETE | Get and delete a recommendation reaction. |

## Custom Recommendations for Experience Cloud Sites

Create custom recommendations that appear in Experience Cloud sites, encouraging users to watch videos, take training, and more. Target specific audiences and use channels to specify locations for the recommendations.

These recommendations appear by default on the Customer Service template. They appear on the home and question detail pages and in the feed in Salesforce mobile web. They also appear anywhere community managers add recommendations using Experience Builder in the Customer Service template.

So that users don’t see the same recommendations all the time, Salesforce periodically removes and brings back custom recommendations that haven’t been accepted or dismissed.

Available resources for custom recommendations in Experience Cloud sites:

| Resource | HTTP Methods | Tasks |
| --- | --- | --- |
| /connect/recommendation-definitions | GET, POST | Get a list of custom recommendation definitions or create a custom recommendation definition. |
| /connect/recommendation-definitions/​recommendationDefinitionId | GET, PATCH, DELETE | Get information about, modify, or delete a custom recommendation definition. |
| /connect/recommendation-definitions/​recommendationDefinitionId/photo | GET, PUT, DELETE | Get information about, upload, modify, or delete the photo for a custom recommendation definition. |
| /connect/recommendation-audiences | GET, POST | Get a list of custom recommendation audiences and create a custom recommendation audience. |
| /connect/recommendation-audiences/​recommendationAudienceId | GET, PATCH, DELETE | Get information about, update, and delete a custom recommendation audience. |
| /connect/recommendation-audiences/​recommendationAudienceId/members | GET | Get the members of a custom recommendation audience. |
| /connect/scheduled-recommendations | GET, POST | Get a list of scheduled custom recommendations or create a scheduled custom recommendation. |
| /connect/scheduled-recommendations/​scheduledRecommendationId | GET, PATCH, DELETE | Get information about, update, or delete a scheduled custom recommendation. |

## Chatter Recommendations

Chatter provides recommendations to help your users identify the people, groups, files, and records that closely relate to their job and interests.

Available resources for Chatter recommendations:

| Resource | HTTP Methods | Tasks |
| --- | --- | --- |
| /chatter/users/me/recommendations | GET | Get the Chatter recommendations, such as user, group, file, record, topic, and article recommendations, for the context user. Also get custom and static recommendations for the context user. |
| /chatter/users/me/recommendations/action | GET | Get the Chatter, custom, and static recommendations for the specified action for the context user. |
| /chatter/users/me/recommendations/action/​objectCategory | GET | Get the Chatter, custom, and static recommendations for the specified action and object category for the context user. |
| /chatter/users/me/recommendations/action/​idPrefix | GET | Get the Chatter, custom, and static recommendations for the specified action and key prefix for the context user. |
| /chatter/users/me/recommendations/action/​objectID | GET, DELETE | Get the Chatter, custom, and static recommendations for the specified action and object ID for the context user. Also used to delete a recommendation. |
| /chatter/users/userId/recommendations/action/​objectEnum | GET, DELETE | Get the static Chatter recommendation for the specified action and object type for the context user. Also used to delete a static recommendation. |

## Related Topics

- /connect/recommendations/recommendationId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_nba_proposition.htm)
- /connect/recommendation-strategies/​strategyName/recommendations (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_nba_recommendations.htm)
- /connect/recommendation-strategies/reactions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_nba_reactions.htm)
- /connect/recommendation-strategies/reactions/​reactionId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_nba_reaction.htm)
- /connect/recommendation-definitions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_list.htm)
- /connect/recommendation-definitions/​recommendationDefinitionId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_specific.htm)
- /connect/recommendation-definitions/​recommendationDefinitionId/photo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_photo.htm)
- /connect/recommendation-audiences (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audiences_list.htm)
- /connect/recommendation-audiences/​recommendationAudienceId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audience.htm)
- /connect/recommendation-audiences/​recommendationAudienceId/members (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audience_members.htm)
