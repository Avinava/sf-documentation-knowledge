---
title: "Topics a User Is Knowledgeable About"
domain: chatterapi
topic: topics-a-user-is-knowledgeable-about
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.920Z
estimatedTokens: 218
keywords: [Topics, User, Knowledgeable]
---

# Topics a User Is Knowledgeable About

> Topics that
the specified user is knowledgeable about. Get a list of topics for
the specified user.

# Topics a User Is Knowledgeable About

Topics that the specified user is knowledgeable about. Get a list of topics for the specified user.

Resource

```

```

```

```

Available since version

30.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Request parameters

| Parameter Name | Values | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | An integer specifying a page of topics. The default value is 0. | Optional | 30.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 to 100. The default value is 25. | Optional | 30.0 |

Response body

[Topics People Are Knowledgeable About Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_knowledgeable_about_collection.htm "A collection of topics people are knowledgeable about response bodies.")

## Code Examples

```
/chatter/users/userId/knowledgeable-about-topics
```

```
/connect/communities/communityId/chatter/users/userId/knowledgeable-about-topics
```

## Related Topics

- Topics People Are Knowledgeable About
       Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_knowledgeable_about_collection.htm)
