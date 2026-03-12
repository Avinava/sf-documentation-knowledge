---
title: "List Shares"
domain: chatterapi
topic: list-shares
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.647Z
estimatedTokens: 278
keywords: [Shares, share, data, view]
---

# List Shares

> Get share data for a list view.

# List Shares

Get share data for a list view.

Resource

```

```

Available version

44.0

HTTP methods

GET, PUT, DELETE

Request body for PUT

A PUT request replaces all shares associated with a list view with the provided collection.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currentListShares | String[] | List of API names or 15-character IDs that identify the groups or roles with which to share the list. | Required | 44.0 |

Response body for GET and PUT

[List Current Share Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_list_current_share_collection.htm#connect_responses_list_current_share_collection "Current shares associated with a list.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/list-shares/listViewId
```

```
{"currentListShares": ["00GD00000000izfKAA", "00GD00000000izfKAA", "00GD00000000izfKAA"]
}
```

## Related Topics

- List Current Share
              Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_list_current_share_collection.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
