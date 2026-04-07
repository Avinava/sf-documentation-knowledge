---
title: "Group Information Input"
domain: chatterapi
topic: group-information-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:08.663Z
estimatedTokens: 143
keywords: [Group, Chatter]
---

> Chatter group information input.

# Group Information Input

Chatter group information input.

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| text | String | The text in the “Information” section of the group. HTML is not supported. The maximum length is 4000 characters (bytes). | 28.0 |
| title | String | The title in the “Information” section of the group. The maximum length is 240 characters (bytes). | 28.0 |

#### See Also

-   [Group Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_group_input.htm "Chatter group input.")

## Code Examples

```
{
   "text" : "Post questions about the API.",
   "title" : "API Questions"
}
```

## Related Topics

- Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_group_input.htm)
