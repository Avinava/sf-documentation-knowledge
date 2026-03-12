---
title: "Feed Elements Resources"
domain: chatterapi
topic: feed-elements-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.313Z
estimatedTokens: 1708
keywords: [Feed, Elements, Resources, Access, edit, post, search, element’s, capabilities, including, bundles, their]
---

# Feed Elements Resources

> Information about feed elements. Access, edit, post, search, and delete feed
        elements. Access a feed element’s capabilities, including bundles and their feed
        elements.

# Feed Elements Resources

Information about feed elements. Access, edit, post, search, and delete feed elements. Access a feed element’s capabilities, including bundles and their feed elements.

Available resources:

| Resource | Description |
| --- | --- |
| /chatter/feed-elements | Post feed elements and search all feed elements in an organization. |
| /chatter/feed-elements/batch | Post a batch of up to 500 feed elements. |
| /chatter/feed-elements/batch/feedElementIds​ | Get information about a comma-separated list of up to 500 feed elements. Errors for feed elements that can’t be loaded are returned in the results. |
| /chatter/feed-elements/feedElementId​ | Access, edit, or delete a feed element. Feed items are the only type of feed element that can be edited. |
| /chatter/feed-elements/feedElementId​/capabilities | Access a feed element's set of capabilities. |
| /chatter/feed-elements/feedElementId​/capabilities/approval | Access the approval capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/associated-actions | Access the associated actions capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/banner | Access the banner capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/bookmarks | Get information about whether a feed element is bookmarked, or add bookmarks to feed elements. |
| /chatter/feed-elements/feedElementId​/capabilities/bundle | Access the bundle capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/bundle/feed-elements | Access all feed elements that are grouped together in a bundle. |
| /chatter/feed-elements/feedElementId​/capabilities/call-collaboration | Access the call collaboration capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/canvas | Access the canvas capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/case-comment | Access the case comment capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/chatter-likes | Access information about the chatter likes capability for a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/chatter-likes/items | Access a page of likes for a feed element. Like or unlike a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/comments | Access the comments capability for a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/comments/items | Access comments for a feed element, or add a comment to a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/content | Access the content capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/dashboard-component-snapshot | Access the dashboard component capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/direct-message | Access the direct message capability of a feed element. Update the members of a direct message. |
| /chatter/feed-elements/feedElementId​/capabilities/direct-message/members | Get all the members for a direct message. |
| /chatter/feed-elements/feedElementId​/capabilities/direct-message/original-members | Get the original members for a direct message. |
| /chatter/feed-elements/feedElementId​/capabilities/direct-message/membership-activity | Get the membership activities for a direct message. |
| /chatter/feed-elements/feedElementId​/capabilities/edit/is-editable-by-me | Indicates whether the context user can edit the feed element. Feed items are the only type of feed element that can be edited. |
| /chatter/feed-elements/feedElementId​/capabilities/email-message | Access the email message capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/enhanced-link | Access the enhanced link capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/extensions | Access the extensions capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/feed-entity-share | Access the feed entity share capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/link | Access the link capability of a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/media-references | Access the media references capability of a feed element. |
| /connect/communities/communityId​/chatter/feed-elements/feedElementId​/capabilities/moderation | Get information about a feed element's moderation capability, add a moderation flag to a feed element, or delete all moderation flags from a feed element. |
| /chatter/feed-elements/feedElementId/capabilities/mute | Get information about whether a feed element is muted, or mute or unmute a feed element. |
| /chatter/feed-elements/feedElementId​/capabilities/origin | Access the origin capability of a feed element. If a feed element has this capability, it was created by a feed action. |
| /chatter/feed-elements/feedElementId​​/capabilities/poll | Access a poll for a feed element or vote on a poll. |
| /chatter/feed-elements/feedElementId​​/capabilities/question-and-answers | Access question and answers for a feed element, or update question and answers on a feed element. |
| /chatter/feed-elements/feedElementId​​/capabilities/read-by | Access the read by capability of a feed element. Mark a feed element as read for the context user. |
| /chatter/feed-elements/feedElementId​​/capabilities/read-by/items | Get information about who read a feed element and when. |
| /chatter/feed-elements/batch/feedElementIds​​/capabilities/read-by | Mark multiple feed elements as read by the context user at the same time. |
| /chatter/feed-elements/feedElementId​​/capabilities/recommendations | Access the recommendations capability of a feed element. |
| /chatter/feed-elements/feedElementId​​/capabilities/record-snapshot | Access the record snapshot capability of a feed element. |
| /chatter/feed-elements/feedElementId​​/capabilities/status | Access the status capability of a feed post or set the status of a feed post. |
| /chatter/feed-elements/feedElementId​​/capabilities/topics | Get, delete, and post topics associated with a feed element. |
| /chatter/feed-elements/feedElementId​​/capabilities/tracked-changes | Access the tracked changes capability of a feed element. |
| /chatter/feed-elements/feedElementId​​/capabilities/up-down-vote | Get the upvotes and downvotes for a feed element. Upvote or downvote a feed element. |
| /chatter/feed-elements/feedElementId​​/capabilities/up-down-vote/items | Get a list of users who upvoted or downvoted a feed element. |
| /chatter/feed-elements/feedElementId​/related-posts | Get questions related to the context question. |
| /chatter/feed-elements/publish-draft | Publish a draft feed element. |

## Related Topics

- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- /chatter/feed-elements/batch (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_batch_post.htm)
- /chatter/feed-elements/batch/feedElementIds​ (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_batch.htm)
- /chatter/feed-elements/feedElementId​ (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm)
- /chatter/feed-elements/feedElementId​/capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capabilities.htm)
- /chatter/feed-elements/feedElementId​/capabilities/approval (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_approval.htm)
- /chatter/feed-elements/feedElementId​/capabilities/associated-actions (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_associated_actions.htm)
- /chatter/feed-elements/feedElementId​/capabilities/banner (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_banner.htm)
- /chatter/feed-elements/feedElementId​/capabilities/bookmarks (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_bookmarks.htm)
- /chatter/feed-elements/feedElementId​/capabilities/bundle (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_bundle.htm)
