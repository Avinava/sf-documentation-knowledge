---
title: "User Files, Filtered by Sharing"
domain: chatterapi
topic: user-files-filtered-by-sharing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.955Z
estimatedTokens: 317
keywords: [User, Files, Filtered, Sharing, shared]
---

# User Files, Filtered by Sharing

> Get information about files that have been shared
            with the specified user.

# User Files, Filtered by Sharing

Get information about files that have been shared with the specified user.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The resource can also be accessed with the final keyword as one word, sharedwithme.

Available since version

36.0

In versions 24.0–36.0, use /chatter/users/userId/files/filter/shared-with-me and /connect/communities/communityId/chatter/users/userId/files/filter/shared-with-me, which require Chatter.

HTTP methods

GET or HEAD

Request parameters

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | 24.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | 24.0 |
| q | String | A query string to filter the results. The string must contain at least two characters, not including wildcards. For information about wildcards, see Wildcards. | 27.0 |

Response body

[File Summary Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_files_page.htm "File summary page.")

## Code Examples

```
/connect/files/users/userId/filter/shared-with-me
```

```
/connect/communities/communityId/files/users/userId/filter/shared-with-me
```

## Related Topics

- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- File Summary
                            Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_files_page.htm)
