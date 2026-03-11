---
title: "ConnectApi.FeedItemInput"
domain: apex-reference
topic: connectapifeediteminput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.158Z
keywords: [ConnectApi.FeedItemInput]
---

# ConnectApi.FeedItemInput

# ConnectApi.FeedItemInput

Used to create rich feed items, for example, feed items that include @mentions or files.

Subclass of [ConnectApi.FeedElementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.") as of version 31.0.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachment | ConnectApi.​Feed​Item​Attachment​​Input | Specifies the attachment for the feed item. The feed item type is inferred based on the provided attachment.ImportantAs of API version 32.0, use the inherited capabilities property. | Optional | 28.0–31.0 |
| body | ConnectApi.​Message​​Body​Input | Message body. The body can contain up to 10,000 characters and 25 mentions. Because the character limit can change, clients should make a describeSObjects() call on the FeedItem or FeedComment object and look at the length of the Body or CommentBody field to determine the maximum number of allowed characters.If you specify originalFeedElementId to share a feed item, use the body property to add the first comment to the feed item.To edit this property in a feed item, use updateFeedElement(communityId, feedElementId, feedElement). Editing feed posts is supported in version 34.0 and later. | Required unless the feed item has a link capability or a content capability. | 28.0 |
| isBookmarked​​ByCurrentUser | Boolean | Specifies if the new feed item should be bookmarked for the user (true) or not (false).ImportantAs of API version 32.0, use the capabilities.bookmarks.isBookmarkedByCurrentUser property. | Optional | 28.0–31.0 |
| original​FeedElementId | String | To share a feed element, specify its 18-character ID.ImportantAs of API version 39.0, use the capabilities.feedEntity​Share.feedEntityId property. | Optional | 31.0–38.0 |
| original​FeedItemId | String | To share a feed item, specify its 18-character ID.ImportantIn API version 32.0–38.0, use the originalFeedElementId property. In API version 39.0 and later, use the capabilities.feedEntity​Share.feedEntityId property. | Optional | 28.0–31.0 |
| visibility | ConnectApi.​FeedItem​VisibilityType Enum | Type of users who can see a feed item.AllUsers—Visibility is not limited to internal users.InternalUsers—Visibility is limited to internal users.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 28.0 |