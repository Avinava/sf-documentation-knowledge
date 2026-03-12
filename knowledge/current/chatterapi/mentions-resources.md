---
title: "Mentions Resources"
domain: chatterapi
topic: mentions-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.763Z
estimatedTokens: 322
keywords: [Mentions, Resources, users, groups, user, mention, feed, item, comment, group, mentioned, they, receive, notification]
---

# Mentions Resources

> Information about users and groups that a user can mention
in a feed item body or comment body. When a user or group is mentioned,
they receive notification.

# Mentions Resources

Information about users and groups that a user can mention in a feed item body or comment body. When a user or group is mentioned, they receive notification.

Use the Mentions Completions resource to get a list of mention proposals. Use the Mentions Validations resource to determine which of those proposals are valid for the context user.

-   **[Mentions Completions](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_completions.htm)**
    Information about users and groups to mention in a feed item body or comment body. Use this resource to generate a list of proposed mentions that a user can choose from. A mention is an “@” character followed by a user or group name. When a user or group is mentioned, they receive a notification.
-   **[Mentions Validations](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_validations.htm)**
    Information about whether the specified mentions are valid for the context user. For example, the context user can’t mention private groups he doesn’t belong to. If such a group were included in the list of mention validations, the hasErrors property of the Mention Validations response body would be true and the group would have a validationStatus of Disallowed in its mention validation.

## Related Topics

- Mentions Completions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_completions.htm)
- Mentions Validations (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions_validations.htm)
