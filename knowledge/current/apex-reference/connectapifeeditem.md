---
title: "ConnectApi.FeedItem"
domain: apex-reference
topic: connectapifeeditem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.698Z
keywords: [ConnectApi.FeedItem]
---

# ConnectApi.FeedItem

# ConnectApi.FeedItem

Feed item.

Subclass of [ConnectApi.FeedElement Class](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.") as of version 31.0.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actor | ConnectApi.Actor | The entity that created the feed item. | 28.0 |
| attachment | ConnectApi.​FeedItem​Attachment | Information about the attachment. If there is no attachment, returns null.ImportantAs of version 32.0, use the inherited capabilities property. | 28.0–31.0 |
| canShare | Boolean | Indicates whether the feed item can be shared.If a feed item has multiple file attachments and at least one attachment has been deleted or is inaccessible, the feed item can’t be shared. The canShare value is incorrectly set to true in these cases.ImportantAs of version 39.0, use the isSharable property. | 28.0–38.0 |
| clientInfo | ConnectApi.​ClientInfo | Information about the connected app used to authenticate the connection. | 28.0 |
| comments | ConnectApi.​Comment​​Page | First page of comments for this feed item.ImportantAs of version 32.0, use the inherited capabilities.comments.page property. | 28.0–31.0 |
| event | Boolean | true if feed item is created due to an event change, false otherwise. | 22.0 |
| hasVerified​Comment | Boolean | true if the feed item has a verified comment, otherwise false. | 41.0 |
| isBookmarked​ByCurrentUser | Boolean | true if the context user has bookmarked this feed item, otherwise, false.ImportantAs of version 32.0, use the inherited capabilities.bookmarks.isBookmarkedByCurrentUser property. | 28.0–31.0 |
| isDelete​Restricted | Boolean | If this property is true the comment cannot be deleted by the context user. If it is false, it might be possible for the context user to delete the comment, but it is not guaranteed. | 28.0 |
| isLikedBy​CurrentUser | Boolean | true if the context user has liked this feed item, otherwise, false.ImportantAs of version 32.0, use the inherited capabilities.chatterLikes.isLikedByCurrentUser property. | 28.0–31.0 |
| isSharable | Boolean | Indicates whether the feed item can be shared. | 39.0 |
| likes | ConnectApi.​Chatter​Like​Page | First page of likes for this feed item.ImportantAs of version 32.0, use the inherited capabilities.chatterLikes.page property. | 28.0–31.0 |
| likesMessage | ConnectApi.​Message​Body | A message body the describes who likes the feed item.ImportantAs of version 32.0, use the inherited capabilities.chatterLikes.likesMessage property. | 28.0–31.0 |
| moderationFlags | ConnectApi.​ModerationFlags | Information about the moderation flags on a feed item. If ConnectApi.Features.communityModeration is false, this property is null.ImportantAs of version 31.0, use the inherited capabilities.moderation.moderationFlags property. | 29.0–30.0 |
| myLike | ConnectApi.​​Reference | If the context user has liked the feed item, this property is a reference to the specific like, otherwise, null.ImportantAs of version 32.0, use the inherited capabilities.chatterLikes.myLike property. | 28.0–31.0 |
| originalFeedItem | ConnectApi.​​Reference | A reference to the original feed item if this feed item is a shared feed item, otherwise, null. | 28.0 |
| originalFeed​ItemActor | ConnectApi.Actor | If this feed item is a shared feed item, returns information about the original poster of the feed item, otherwise, returns null. | 28.0 |
| photoUrl | String | URL of the photo associated with the feed item | 28.0 |
| preamble | ConnectApi.​Message​Body | A collection of message segments, including the unformatted text of the message that you can use as the title of a feed item. Message segments include name, link, and motif icon information for the actor that created the feed item.ImportantFor API versions 29.0 and 30.0, use the ConnectApi.FeedItem.preamble.text property as the default case to render text. For API versions 31.0 and later, use the ConnectApi.FeedElement.header.text property as the default case to render text. | 28.0-30.0 |
| topics | ConnectApi.FeedItemTopicPage | Topics for this feed item.ImportantAs of version 31.0, use the inherited capabilities.topics.items property. | 28.0–31.0 |
| type | ConnectApi.​FeedItemType | Type of feed item.ImportantAs of API version 32.0, use the capabilities property to determine what can be done with a feed item. See Working with Feeds and Feed Elements.One of these values:ActivityEvent—Feed item generated in Case Feed when an event or task associated with a parent record with a feed enabled is created or updated.AdvancedTextPost—A feed item with advanced text formatting, such as a group announcement post.ApprovalPost—Feed item with an approval capability. Approvers can act on the feed item parent.AttachArticleEvent—Feed item generated when an article is attached to a case in Case Feed.BasicTemplateFeedItem—Feed item with an enhanced link capability.CallLogPost—Feed item generated when a call log is saved to a case in Case Feed.CanvasPost—Feed item generated by a canvas app in the publisher or from Connect REST API or Connect in Apex. The post itself is a link to a canvas app.CaseCommentPost—Feed item generated when a case comment is saved in Case Feed.ChangeStatusPost—Feed item generated when the status of a case is changed in Case Feed.ChatTranscriptionPost—Feed item generated in Case Feed when a Live Agent chat transcript is saved to a case.CollaborationGroupCreated—Feed item generated when a new public group is created. Contains a link to the new group.CollaborationGroupUnarchived—Deprecated. Feed item generated when an archived group is activated.ContentPost—Feed item with a content capability.CreateRecordEvent—Feed item that describes a record created in the publisher.DashboardComponentAlert—Feed item with a dashboard alert.DashboardComponentSnapshot—Feed item with a dashboard component snapshot capability.EmailMessageEvent—Feed item generated when an email is sent from a case in Case Feed.FacebookPost—Deprecated. Feed item generated when a Facebook post is created from a case in Case Feed.LinkPost—Feed item with a link capability.MilestoneEvent—Feed item generated when a case milestone is either completed or reaches a violation status. Contains a link to the case milestone.PollPost—Feed item with a poll capability. Viewers of the feed item are allowed to vote on the options in the poll.ProfileSkillPost—Feed item generated when a skill is added to a user’s profile.QuestionPost—Feed item generated when a question is asked.As of API version 33.0, a feed item of this type can have a content capability and a link capability.ReplyPost—Feed item generated by a Chatter Answers reply.RypplePost—Feed item generated when a user posts thanks.SocialPost—Feed item generated when a social post is created from a case in Case Feed.TextPost—Feed item containing text only.TrackedChange—Feed item created when one or more fields on a record have been changed.UserStatus—Deprecated. A user's post to their own profile. | 28.0 |
| visibility | ConnectApi.​FeedItem​VisibilityType | Type of users who can see a feed item.AllUsers—Visibility is not limited to internal users.InternalUsers—Visibility is limited to internal users. | 28.0 |