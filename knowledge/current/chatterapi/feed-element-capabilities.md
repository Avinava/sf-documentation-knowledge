---
title: "Feed Element Capabilities"
domain: chatterapi
topic: feed-element-capabilities
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:18.674Z
estimatedTokens: 1810
keywords: [Feed, Element, Capabilities, container, included]
---

# Feed Element Capabilities

> A container for all capabilities that can be included with a feed element.

# Feed Element Capabilities

A container for all capabilities that can be included with a feed element.

In API version 30.0 and earlier, most feed items can have comments, likes, topics, and so on. In version 31.0 and later, every feed item (and feed element) can have a unique set of capabilities. If a capability property exists on a feed element, that capability is available, even if the capability property doesn’t have a value. For example, if the ChatterLikes capability property exists on a feed element (with or without a value), the context user can like that feed element. If the capability property doesn’t exist, it isn’t possible to like that feed element. A capability can also contain associated data. For example, the Moderation capability contains data about moderation flags.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| approval | Approval Capability | If a feed element has this capability, it includes information about an approval. | Small, 32.0 | 32.0 |
| associatedActions | Associated Actions Capability | If a feed element has this capability, it has platform actions associated with it. | Small, 31.0 | 31.0 |
| banner | Banner Capability | If this feed element has this capability, it has a banner motif and style. | Small, 31.0 | 31.0 |
| bookmarks | Bookmarks Capability | If a feed element has this capability, the context user can bookmark it. | Small, 31.0 | 31.0 |
| bundle | Generic Bundle CapabilityorTracked Change Bundle Capability | If a feed element has this capability, the feed element may be a group of other feed elements condensed into one. | Small, 31.0 | 31.0 |
| callCollaboration | Call Collaboration Capability | If a feed element has this capability, it has a recording comment. | Small, 51.0 | 51.0 |
| canvas | Canvas Capability | If a feed element has this capability, it renders a canvas app. | Small, 32.0 | 32.0 |
| caseComment | Case Comment Capability | If a feed element has this capability, it has a case comment on the case feed. | Small, 32.0 | 32.0 |
| chatterLikes | Chatter Likes Capability | If a feed element has this capability, the context user can like it. Exposes information about existing likes. | Small, 31.0 | 31.0 |
| close | Close Capability | If a feed element has this capability, users with permission can close it. | Small, 43.0 | 43.0 |
| comments | Comments Capability | If a feed element or comment has this capability, the context user can add a comment. | Small, 31.0 | 31.0 |
| content | Content Capability | If a comment has this capability, it has a file attachment.Most Content Capability properties are null if the content has been deleted from the feed element or if the access has changed to private.ImportantIn version 36.0 and later, use the files property. | Small, 32.0 | 32.0–35.0 |
| dashboardComponent​Snapshot | Dashboard Component Snapshot Capability | If a feed element has this capability, it has a dashboard component snapshot. A snapshot is a static image of a dashboard component at a specific point in time. | Small, 32.0 | 32.0 |
| directMessage | Direct Message Capability | If a feed element has this capability, it’s a direct message. | Small, 39.0 | 39.0 |
| edit | Edit Capability | If a feed element has this capability, users who have permission can edit it. | Small, 34.0 | 34.0 |
| emailMessage | Email Message Capability | If a feed element has this capability, it has an email message from a case. | Small, 32.0 | 32.0 |
| enhancedLink | Enhanced Link Capability | If a feed element has this capability, it has a link that may contain supplemental information like an icon, a title, and a description. | Small, 32.0 | 32.0 |
| extensions | Extensions Capability | If a feed element has this capability, it has one or more extension attachments. | Small, 40.0 | 40.0 |
| feedEntityShare | Feed Entity Share Capability | If a feed element or comment has this capability, a feed entity is shared with it. | Small, 39.0 | 39.0 |
| files | Files Capability | If a feed element has this capability, it has one or more file attachments. | Small, 36.0 | 36.0 |
| interactions | Interactions Capability | If a feed element has this capability, it has information about user interactions. | Small, 37.0 | 37.0 |
| link | Link Capability | If a feed element has this capability, it has a link. | Small, 32.0 | 32.0 |
| mediaReferences | Media Reference Capability | If a feed element has this capability, it has one or more media references. | Small, 41.0 | 41.0 |
| moderation | Moderation Capability | If a feed element has this capability, users in the Experience Cloud site can flag the feed element for moderation. This response body also includes information about the flagged content. | Small, 31.0 | 31.0 |
| mute | Mute Capability | If a feed element has this capability, users can mute it. | Small, 35.0 | 35.0 |
| origin | Origin Capability | If a feed element has this capability, it was created by a feed action. | Small, 33.0 | 33.0 |
| pin | Pin Capability | If a feed element has this capability, users who have permission can pin it to a feed. | Small, 41.0 | 41.0 |
| poll | Poll Capability | If a feed element has this capability, the feed element can include a poll for voting. | Small, 31.0 | 31.0 |
| questionAndAnswers | Question and And Answers Capability | If a feed element has this capability, it has a question and comments on the feed element are answers to the question. | Small, 31.0 | 31.0 |
| readBy | Read By Capability | If a feed element has this capability, the context user can mark it as read. | Small, 40.0 | 40.0 |
| recommendations | Recommendations Capability | If a feed element has this capability, it has a recommendation. | Small, 32.0 | 32.0 |
| recordSnapshot | Record Snapshot Capability | If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event. | Small, 32.0 | 32.0 |
| socialPost | Social Post Capability | If a feed element has this capability, it can interact with a social post on a social network. | Small, 36.0 | 36.0 |
| status | Status Capability | If a feed post or comment has this capability, it has a status that determines its visibility. | Small, 37.0 | 37.0 |
| topics | Topics Capability | If a feed element has this capability, the context user can add topics to it. Topics help users organize and discover conversations. | Small, 31.0 | 31.0 |
| trackedChanges | Tracked Changes Capability | If a feed element has this capability, it contains all changes to a record for a single tracked change event. | Small, 32.0 | 32.0 |
| upDownVote | Up Down Vote Capability | If a feed post or comment has this capability, users can upvote or downvote it. | Small, 41.0 | 41.0 |

#### See Also

-   [Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

-   [Generic Feed Element](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_generic.htm "A generic feed element.")

-   [Feed Item Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_summary.htm "A feed item summary.")

## Related Topics

- Approval Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_approval_capability.htm)
- Associated Actions
                  Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_associated_actions_capability.htm)
- Banner
                Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_capability.htm)
- Bookmarks
                Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bookmarks_capability.htm)
- Generic Bundle
                  Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_generic_clumps_capability.htm)
- Tracked Change Bundle
                    Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_change_clumps_capability.htm)
- Call Collaboration Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_call_collaboration_capability.htm)
- Canvas Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_canvas_capability.htm)
- Case Comment Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_case_comment_capability.htm)
- Chatter Likes
                Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chatter_likes_capability.htm)
