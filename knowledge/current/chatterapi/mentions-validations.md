---
title: "Mentions Validations"
domain: chatterapi
topic: mentions-validations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.773Z
estimatedTokens: 511
keywords: [Mentions, Validations, whether, context, user, can’t, mention, groups, doesn’t, belong, group, were, included, hasErrors, validationStatus]
---

# Mentions Validations

> Information about whether the specified mentions are valid for the context user. For
  example, the context user can’t mention private groups he doesn’t belong to. If such
  a group were included in the list of mention validations, the hasErrors property of the Mention Validations response body would be true and the group would have a validationStatus of Disallowed in its mention
  validation.

# Mentions Validations

Information about whether the specified mentions are valid for the context user. For example, the context user can’t mention private groups he doesn’t belong to. If such a group were included in the list of mention validations, the hasErrors property of the Mention Validations response body would be true and the group would have a validationStatus of Disallowed in its mention validation.

Resource

```

```

```

```

Available since version

29.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Since |
| --- | --- | --- | --- | --- |
| parentId | String | The feed item parent ID. | Required | 29.0 |
| recordIds | String[] | A comma-separated list of IDs to be mentioned. The maximum value is 25. | Required | 29.0 |
| visibility | String | Type of users who can see a feed item.AllUsers—Visibility is not limited to internal users.InternalUsers—Visibility is limited to internal users. | Required | 29.0 |

Response body for GET

[Mention Validation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mentionValidation.htm "Information about whether a proposed mention is valid for the context user.")

## Usage

First make a request to [Mentions Completions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_completions.htm "Information about users and groups to mention in a feed item body or comment body. Use this resource to generate a list of proposed mentions that a user can choose from. A mention is an “@” character followed by a user or group name. When a user or group is mentioned, they receive a notification.") to get a list of proposed mentions. Pass those proposed mentions to the Mentions Validations resource to determine whether the mentions are valid for the context user.

#### See Also

-   [Get a List of @Mention Proposals](atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_list_of_mention_proposals.htm "Get a list of @mention proposals in Chatter.")

## Code Examples

```
/chatter/mentions/validations
```

```
/connect/communities/communityId/chatter/mentions/validations
```

## Related Topics

- Mention Validation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mentionValidation.htm)
- Mentions Completions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_completions.htm)
- Get a List of @Mention Proposals (atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_list_of_mention_proposals.htm)
