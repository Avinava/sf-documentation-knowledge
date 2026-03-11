---
title: "ConnectApi.CloseCapability"
domain: apex-reference
topic: connectapiclosecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.327Z
keywords: [ConnectApi.CloseCapability, See]
---

# ConnectApi.CloseCapability

# ConnectApi.CloseCapability

If a feed element has this capability, users with permission can close it.

Users can’t edit (specifically the feed item body or title), comment on, or delete a closed feed element. If the closed feed element is a poll, users can’t vote on it. Users can’t edit (specifically the comment body) or delete a comment on a closed feed element or select or remove it as best answer.

Admins and moderators can edit and delete closed feed elements and comments on closed feed elements. Admins and moderators can select or remove the best answer status on comments on closed feed elements.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| canContextUser​UpdateIsClosed | Boolean | Specifies whether the context user has permission to set the feed element to closed (true) or not (false). | 43.0 |
| isClosed | Boolean | Specifies whether the feed element is closed (true) or not (false). | 43.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")