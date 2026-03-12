---
title: "Edit Capability"
domain: chatterapi
topic: edit-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.325Z
estimatedTokens: 416
keywords: [Edit, Capability, feed, element, comment, edited, users, permission]
---

# Edit Capability

> If a feed element or comment has this capability, it can be edited by
      users who have permission.

# Edit Capability

If a feed element or comment has this capability, it can be edited by users who have permission.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isEdit​Restricted | Boolean | Specifies whether editing this feed element or comment is restricted. If true, the context user can’t edit this feed element or comment. If false, the context user may or may not have permission to edit this feed element or comment. To determine if a feed element or comment is editable by the context user, use the Feed Elements, Editability or Comment Capability, Editability resource. | Small, 34.0 | 34.0 |
| isEditable​ByMeUrl | String | The URL to check if the context user is able to edit this feed element or comment. | Medium, 34.0 | 34.0 |
| lastEditedBy | User Detail | Who last edited this feed element or comment. | Small, 34.0 | 34.0 |
| lastEditedDate | String | The most recent edit date of this feed element or comment. Format is ISO 8601. | Small, 34.0 | 34.0 |
| latestRevision | Integer | The most recent revision of this feed element or comment. | Small, 34.0 | 34.0 |
| relativeLast​EditedDate | String | Relative last edited date, for example, “2h ago.” | Small, 34.0 | 34.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

-   [Comment Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm "A container for all capabilities that can be included with a comment.")

## Related Topics

- Feed Elements,
                  Editability (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_edit_editability.htm)
- Comment Capability, Editability (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_capability_editability.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
- Comment Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm)
