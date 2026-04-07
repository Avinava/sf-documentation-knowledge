---
title: "Get User Information for Multiple Users"
domain: chatterapi
topic: get-user-information-for-multiple-users
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:24.372Z
estimatedTokens: 162
keywords: [User, Multiple, Users, call]
---

> Get user information for multiple users with a single call.

# Get User Information for Multiple Users

Get user information for multiple users with a single call.

Resource

[/chatter/users/batch/user\_list](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_BatchUserInformation.htm "Returns information about the specified users’ profiles.") where user\_list is a list of user Ids. Your app may need to call Connect REST API twice: once to get the feed items and user Ids, the second time to call this resource with the list of user Ids.

HTTP method

GET

Example

```

```

Returns

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

## Code Examples

```
/services/data/v66.0/chatter/users
/batch/005D0000001Kl6xIAC,005D0000005J3D4HVB, . . .
```

## Related Topics

- /chatter/users/batch/user_list (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_BatchUserInformation.htm)
- Batch Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
