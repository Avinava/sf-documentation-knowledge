---
title: "Group Files"
domain: chatterapi
topic: group-files
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.531Z
estimatedTokens: 222
keywords: [Group, Files, posted]
---

# Group Files

> Get information about the files posted to the specified
   group.

# Group Files

Get information about the files posted to the specified group.

Resource

```

```

```

```

Available since version

24.0

Requires Chatter

Yes

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
/chatter/groups/groupID/files
```

```
/connect/communities/communityId/chatter/groups/groupID/files
```

## Related Topics

- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- File Summary Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_files_page.htm)
