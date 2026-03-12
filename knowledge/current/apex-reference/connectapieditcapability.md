---
title: "ConnectApi.EditCapability"
domain: apex-reference
topic: connectapieditcapability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:27.173Z
estimatedTokens: 387
keywords: [ConnectApi.EditCapability, feed, element, comment, capability, users, permission, edit]
---

# ConnectApi.EditCapability

> If a feed element or comment has this capability, users who have
            permission can edit it.

# ConnectApi.EditCapability

If a feed element or comment has this capability, users who have permission can edit it.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| isEditRestricted | Boolean | Specifies whether editing this feed element or comment is restricted. If true, the context user can’t edit this feed element or comment. If false, the context user may or may not have permission to edit this feed element or comment. To determine if the context user can edit a feed element or comment, use the isFeedElementEditableByMe(communityId, feedElementId) or isCommentEditableByMe(communityId, commentId) method. | 34.0 |
| isEditable​ByMeUrl | String | The URL to check if the context user is able to edit this feed element or comment. | 34.0 |
| lastEditedBy | ConnectApi.Actor | Who last edited this feed element or comment. | 34.0 |
| lastEditedDate | Datetime | The most recent edit date of this feed element or comment. | 34.0 |
| latestRevision | Integer | The most recent revision of this feed element or comment. | 34.0 |
| relativeLast​EditedDate | String | Relative last edited date, for example, “2h ago.” | 34.0 |

#### See Also

-   [ConnectApi.CommentCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm "A set of capabilities on a comment.")

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- isFeedElementEditableByMe(communityId, feedElementId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm)
- isCommentEditableByMe(communityId, commentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.Actor (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.CommentCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
