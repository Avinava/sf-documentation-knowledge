---
title: "User Recommendations for a Specific Action and Key Prefix"
domain: chatterapi
topic: user-recommendations-for-a-specific-action-and-key-prefix
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.884Z
estimatedTokens: 987
keywords: [User, Recommendations, Specific, Action, Key, Prefix, Chatter, custom, context]
---

# User Recommendations for a Specific Action and Key Prefix

> Get the Chatter, custom, and static
      recommendations for the specified action and key prefix for the context user.

# User Recommendations for a Specific Action and Key Prefix

Get the Chatter, custom, and static recommendations for the specified action and key prefix for the context user.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

-   Valid values for action:
    -   follow
    -   join
    -   view
-   The key prefix, or idPrefix in the resource URL, is the first three characters of the object ID and indicates the object type. Valid values for idPrefix in this URL are:
    -   If action is follow, idPrefix is the key prefix for users (005), files (069), topics (0TO), or records (such as 001 or 003).
    -   If action is join, idPrefix is the key prefix for groups (0F9).
    -   If action is view, idPrefix is the key prefix for users (005), files (069), groups (0F9), records (such as 001 or 003), custom recommendations (0RD) in version 34.0 and later, static recommendations (T) in version 35.0 and later, or articles (such as kA0) in version 37.0 and later.

Available since version

26.0

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

Example request URL

```

```

Response body for GET

[Chatter Recommendations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations.htm "A list of Chatter, custom, and static recommendations.")

## Code Examples

```
/chatter/users/userId/recommendations/action/idPrefix
```

```
/connect/communities/communityId/chatter/users/userId/recommendations/action/idPrefix
```

```
/chatter/users/me/recommendations/view/001
```

## Related Topics

- Chatter Recommendations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendations.htm)
