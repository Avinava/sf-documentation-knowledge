---
title: "Close Capability"
domain: chatterapi
topic: close-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.732Z
estimatedTokens: 306
keywords: [Close, Capability, feed, element, users, permission]
---

# Close Capability

> If a feed element has this capability, users with permission can close it.

# Close Capability

If a feed element has this capability, users with permission can close it.

Users can’t edit (specifically the feed item body or title), comment on, or delete a closed feed element. If the closed feed element is a poll, users can’t vote on it. Users can’t edit (specifically the comment body) or delete a comment on a closed feed element or select or remove it as best answer.

Admins and moderators can edit and delete closed feed elements and comments on closed feed elements. Admins and moderators can select or remove the best answer status on comments on closed feed elements.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| canContextUser​UpdateIsClosed | Boolean | Specifies whether the context user has permission to set the feed element to closed (true) or not (false). | Small, 43.0 | 43.0 |
| isClosed | Boolean | Specifies whether the feed element is closed (true) or not (false). | Small, 43.0 | 43.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
