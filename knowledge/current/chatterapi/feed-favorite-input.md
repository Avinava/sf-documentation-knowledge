---
title: "Feed Favorite Input"
domain: chatterapi
topic: feed-favorite-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.678Z
estimatedTokens: 163
keywords: [Feed, Favorite, Input]
---

# Feed Favorite Input

> Feed favorite input.

# Feed Favorite Input

Feed favorite input.

Root XML tag

<favorite>

JSON for POST

```

```

Properties for POST

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| searchText | String | Text of the feed search. Use this parameter for feed searches only. | 24.0 |
| targetId | String | Id of the topic. Use this parameter for topics only. | 28.0 |

JSON for PATCH

```

```

Properties for PATCH

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| updateLastViewDate | Boolean | Sets the last view date of the specified feed favorite to the current system time. Default value is false. | 24.0 |

## Code Examples

```
{ 
   "searchText" : "release",
   "targetId" : "0TOD0000000099d"
}
```

```
{ 
   "updateLastViewDate" : "true"
}
```
