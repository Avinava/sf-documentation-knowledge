---
title: "User Recommendations for a Specific Action"
domain: chatterapi
topic: user-recommendations-for-a-specific-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.875Z
estimatedTokens: 910
keywords: [User, Recommendations, Specific, Action, Chatter, custom, context]
---

# User Recommendations for a Specific Action

> Get the Chatter, custom, and static recommendations
      for the specified action for the context user.

# User Recommendations for a Specific Action

Get the Chatter, custom, and static recommendations for the specified action for the context user.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Valid values for action and resulting recommendations:

-   follow returns recommendations to follow users, files, records, and topics (version 36.0 and later).
-   join returns recommendations to join groups.
-   view returns recommendations to view users, files, groups, and records (version 25.0 and later). In version 34.0 and later, view returns custom recommendations. In version 35.0 and later, view returns static recommendations. In version 37.0 and later, view returns article recommendations.

Available since version

24.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| channel | String | A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:CustomChannel1—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.CustomChannel2—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel3—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel4—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.CustomChannel5—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.DefaultChannel—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder. | 36.0 |
| contextAction | String | Action that the user just performed. Supported values are:followviewUse contextAction and contextObjectId together to get new recommendations based on the action just performed. | 33.0 |
| contextObjectId | String | ID of the object that the user just performed an action on.If contextAction is follow, contextObjectId is user ID, file ID, record ID, or topic ID (version 36.0 and later).If contextAction is view, contextObjectId is user ID, file ID, group ID, record ID, or article ID (version 37.0 and later).Use contextAction and contextObjectId together to get new recommendations based on the action just performed. | 33.0 |
| followed | String | ID of a user. Provides new recommendations based on the context of this user ID.ImportantUse contextAction and contextObjectId in version 33.0 and later. | 23.0–32.0 |
| maxResults | Integer | Maximum number of recommendation results; default is 10. Values must be from 1 to 99. | 23.0 |
| viewed | String | ID of a file. Provides new recommendations based on the context of this file ID.ImportantUse contextAction and contextObjectId in version 33.0 and later. | 23.0–33.0 |

Response body

[Chatter Recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations.htm "A list of Chatter, custom, and static recommendations.")

## Code Examples

```
/chatter/users/userId/recommendations/action
```

```
/connect/communities/communityId/chatter/users/userId/recommendations/action
```

## Related Topics

- Chatter Recommendations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations.htm)
