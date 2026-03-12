---
title: "Custom Recommendation Audience Resources"
domain: chatterapi
topic: custom-recommendation-audience-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:16.323Z
estimatedTokens: 451
keywords: [Custom, Recommendation, Audience, Resources, Target, specific, audiences, recommendations]
---

# Custom Recommendation Audience Resources

> Target specific audiences for your custom recommendations. Use these resources to get
    information about, create, update, and delete recommendation audiences.

# Custom Recommendation Audience Resources

Target specific audiences for your custom recommendations. Use these resources to get information about, create, update, and delete recommendation audiences.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

These recommendations appear by default on the Customer Service template. They appear on the home and question detail pages and in the feed in Salesforce mobile web. They also appear anywhere community managers add recommendations using Experience Builder in the Customer Service template.

So that users don’t see the same recommendations all the time, Salesforce periodically removes and brings back custom recommendations that haven’t been accepted or dismissed.

Available resources:

| Resource | Description |
| --- | --- |
| /connect/recommendation-audiences | Get a list of custom recommendation audiences and create a custom recommendation audience. |
| /connect/recommendation-audiences/​recommendationAudienceId | Get information about, update, and delete a custom recommendation audience. |
| /connect/recommendation-audiences/​recommendationAudienceId/members | Get the members of a custom recommendation audience. |

For information on Next Best Action recommendations, see [Next Best Action Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_nba_resources.htm "Get a recommendation, execute a recommendation strategy, and manage reactions to recommendations.").

## Related Topics

- /connect/recommendation-audiences (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audiences_list.htm)
- /connect/recommendation-audiences/​recommendationAudienceId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audience.htm)
- /connect/recommendation-audiences/​recommendationAudienceId/members (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audience_members.htm)
- Next Best Action Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_nba_resources.htm)
