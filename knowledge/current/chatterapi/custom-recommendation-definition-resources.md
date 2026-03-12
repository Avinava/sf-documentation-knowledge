---
title: "Custom Recommendation Definition Resources"
domain: chatterapi
topic: custom-recommendation-definition-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:16.335Z
estimatedTokens: 516
keywords: [Custom, Recommendation, Definition, Resources, definitions, allow, recommendations, appear, Experience, Cloud, sites, encouraging, users, watch, videos]
---

# Custom Recommendation Definition Resources

> Recommendation definitions allow you to create custom recommendations that appear in
    Experience Cloud sites, encouraging users to watch videos, take training and more. Use these
    resources to get information about, create, modify, and delete recommendation definitions. Also
    get information about, upload, modify, and delete recommendation definition photos.

# Custom Recommendation Definition Resources

Recommendation definitions allow you to create custom recommendations that appear in Experience Cloud sites, encouraging users to watch videos, take training and more. Use these resources to get information about, create, modify, and delete recommendation definitions. Also get information about, upload, modify, and delete recommendation definition photos.

Community managers can access, create, and delete audiences, definitions, and schedules for custom recommendations. (Community managers are users with the Create and Set Up Experiences or Manage Experiences permission.) Users with the Modify All Data permission can also access, create, and delete custom recommendation audiences, custom recommendation definitions, and scheduled custom recommendations.

These recommendations appear by default on the Customer Service template. They appear on the home and question detail pages and in the feed in Salesforce mobile web. They also appear anywhere community managers add recommendations using Experience Builder in the Customer Service template.

So that users don’t see the same recommendations all the time, Salesforce periodically removes and brings back custom recommendations that haven’t been accepted or dismissed.

Available resources:

| Resource | Description |
| --- | --- |
| /connect/recommendation-definitions | Get a list of custom recommendation definitions or create a custom recommendation definition. |
| /connect/recommendation-definitions/​recommendationDefinitionId | Get information about, modify, or delete a custom recommendation definition. |
| /connect/recommendation-definitions/​recommendationDefinitionId/photo | Get information about, upload, modify, or delete the photo for a custom recommendation definition. |

For information on Next Best Action recommendations, see [Next Best Action Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_nba_resources.htm "Get a recommendation, execute a recommendation strategy, and manage reactions to recommendations.").

## Related Topics

- /connect/recommendation-definitions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_list.htm)
- /connect/recommendation-definitions/​recommendationDefinitionId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_specific.htm)
- /connect/recommendation-definitions/​recommendationDefinitionId/photo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_defn_photo.htm)
- Next Best Action Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_nba_resources.htm)
