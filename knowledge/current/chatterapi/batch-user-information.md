---
title: "Batch User Information"
domain: chatterapi
topic: batch-user-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.820Z
estimatedTokens: 150
keywords: [Batch, User, users’, profiles]
---

# Batch User Information

> Returns information about the specified users’
   profiles.

# Batch User Information

Returns information about the specified users’ profiles.

Resource

```

```

```

```

Where user\_list is a comma-separated list of up to 500 user IDs.

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Response body

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

#### See Also

-   [Get User Information for Multiple Users](atlas.en-us.chatterapi.meta/chatterapi/quickreference_retrieve_info_for_list_of_users.htm "Get user information for multiple users with a single call.")

## Code Examples

```
/chatter/users/batch/user_list
```

```
/connect/communities/communityId/chatter/users/batch/user_list
```

## Related Topics

- Batch Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
- Get User Information for Multiple Users (atlas.en-us.chatterapi.meta/chatterapi/quickreference_retrieve_info_for_list_of_users.htm)
