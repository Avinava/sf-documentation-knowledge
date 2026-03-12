---
title: "Feed Element Capabilities Input"
domain: chatterapi
topic: feed-element-capabilities-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.670Z
estimatedTokens: 834
keywords: [Feed, Element, Capabilities, Input, container, included, creating]
---

# Feed Element Capabilities Input

> A container for all capabilities that can be included when creating a
         feed element.

# Feed Element Capabilities Input

A container for all capabilities that can be included when creating a feed element.

In API version 30.0 and earlier, most feed items can have comments, likes, topics, and so on. In version 31.0 and later, every feed item (and feed element) can have a unique set of capabilities. If a capability property exists on a feed element, that capability is available, even if the capability property doesn’t have a value. For example, if the ChatterLikes capability property exists on a feed element (with or without a value), the context user can like that feed element. If the capability property doesn’t exist, it isn’t possible to like that feed element. A capability can also contain associated data. For example, the Moderation capability contains data about moderation flags.

XML example

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| associated​Actions | Associated Actions Capability Input | Describes action links that can be created or updated on a feed element. To associate an action link group with a feed element, the client must be the same client app that created the action link group definition and the user must either be the user who created the definition or have View all Data permission. | Optional | 31.0 |
| bookmarks | Bookmarks Capability Input | Create or update a bookmark on a feed element. | Optional | 32.0 |
| canvas | Canvas Capability Input | Create or update a canvas app associated with a feed element. | Optional | 32.0 |
| content | Content Capability Input | Attach or update a file on a comment. Use this class to attach a new file or update a file that has already been uploaded to Salesforce.ImportantThis request body isn’t available for feed posts in version 36.0 and later. In version 36.0 and later, use Files Capability Input. | Optional | 32.0–35.0 |
| directMessage | Direct Message Capability Input | Create or update the members of a direct message. | Optional | 39.0 |
| extensions | Extensions Capability Input | Create or update extensions associated with a feed element. | Optional | 40.0 |
| feedEntityShare | Feed Entity Share Capability Input | Share a feed entity with a feed post or comment. | Optional | 39.0 |
| files | Files Capability Input | Attach up to 10 files that have already been uploaded or remove one or more files from a feed element. | Optional | 36.0 |
| link | Link Capability Input | Create or update a link attached to a feed element. | Optional | 32.0 |
| poll | Poll Capability Input | Create or vote on a poll feed element. | Optional | 32.0 |
| questionAnd​Answers | Question and Answers Capability Input | Create or edit a question feed element or set the best answer of the existing question feed element. | Optional | 32.0 |
| status | Status Capability Input | Change the status of a feed post or comment. | Optional | 44.0 |
| topics | Topics Capability Input | Assign topics to a feed element. | Optional | 38.0 |

#### See Also

-   [Edit a Question Title and Post](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_question_title_and_post.htm "Edit a question title and post.")

-   [Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

## Code Examples

```
<capabilities>
   <associatedActions>
      <actionLinkGroupIds>
         <actionLinkGroupId/>0Agxx00000000d1CAA<actionLinkGroupId/>
         <actionLinkGroupId/>0Agxx00000000d2DFY<actionLinkGroupId/>
      </actionLinkGroupIds>
   </associatedActions>
   <bookmarksCapability>
      <isBookmarkedByCurrentUser>false</isBookmarkedByCurrentUser>
   </bookmarksCapability>
   <files>
      <items>
         <file>
            <id>069D00000001IOh</id>
         </file>
         <file>
            <id>069D00000002IOg</id>
         </file>
      </items>
   </files>
</capabilities>
```

```
"capabilities": {
   "associatedActions": {
      "actionLinkGroupIds":["0Agxx00000000d1CAA", "0Agxx00000000d2DFY"]
   },
   "bookmarks": {
      "isBookmarkedByCurrentUser": false
   },
   "files": {
      "items": [
         {"id": "069D00000001IOh"},
         {"id": "069D00000002IOg"}
      ]
   }
}
```

## Related Topics

- Associated
                                    Actions Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_associated_actions_capability_input.htm)
- Bookmarks Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_bookmarks_capability_input.htm)
- Canvas Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_canvas_capability_input.htm)
- Content Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_capability_input.htm)
- Files Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_content_capability_input.htm)
- Direct Message Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_direct_message_capability_input.htm)
- Extensions Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_extensions_capability_input.htm)
- Feed Entity Share Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_entity_share_capability_input.htm)
- Link Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_link_capability_input.htm)
- Poll Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_poll_capability_input.htm)
