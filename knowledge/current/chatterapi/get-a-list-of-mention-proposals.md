---
title: "Get a List of @Mention Proposals"
domain: chatterapi
topic: get-a-list-of-mention-proposals
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.879Z
estimatedTokens: 408
keywords: [@Mention, Proposals, Chatter]
---

# Get a List of @Mention Proposals

> Get a list of @mention proposals in Chatter.

# Get a List of @Mention Proposals

Get a list of @mention proposals in Chatter.

Resource

Use the Mentions Completions resource to get a list of mention proposals: [/chatter/mentions/completions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_completions.htm "Information about users and groups to mention in a feed item body or comment body. Use this resource to generate a list of proposed mentions that a user can choose from. A mention is an “@” character followed by a user or group name. When a user or group is mentioned, they receive a notification."). Use the Mentions Validations resource to determine which of those proposals are valid for the context user: [/chatter/mentions/validations](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_validations.htm "Information about whether the specified mentions are valid for the context user. For example, the context user can’t mention private groups he doesn’t belong to. If such a group were included in the list of mention validations, the hasErrors property of the Mention Validations response body would be true and the group would have a validationStatus of Disallowed in its mention validation.").

HTTP method

GET

Request parameters

contextId, page, pageSize, q, type

Returns

[Mention Completion Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mention_completion_page.htm "Paginated list of Mention Completion response bodies.")

[Mention Validations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mentionValidations.htm "Information about whether a set of mentions is valid for the context user.")

## Related Topics

- /chatter/mentions/completions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_completions.htm)
- /chatter/mentions/validations (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_validations.htm)
- Mention Completion
                Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mention_completion_page.htm)
- Mention Validations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mentionValidations.htm)
