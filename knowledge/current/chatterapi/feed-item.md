---
title: "Feed Item"
domain: chatterapi
topic: feed-item
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:18.724Z
estimatedTokens: 2894
keywords: [Feed, Item, made, elements, element]
---

# Feed Item

> A feed is made up of feed elements. A feed item is a type of feed element.

# Feed Item

A feed is made up of feed elements. A feed item is a type of feed element.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actor | Depends on parent | The entity that created the feed item. Values are:Record Summary—if a record (23.0)User Summary—if a user (23.0)Unauthenticated User—if a Chatter customer (24.0)NoteIf the actor is a user, a User Summary response body is returned, not a Record Summary of type user. | Small, 29.0 |  |
| attachment | Depends on type | Depends on the type value of the attachment. Values include:Approval—Feed Item Attachment: Approval (v27.0–31.0)BasicTemplate—Feed Item Attachment: Basic Template (v27.0–31.0)Canvas—Feed Item Attachment: Canvas Template (v29.0–31.0)CaseComment—Feed Item Attachment: Case Comment (v24.0–31.0)Content—Feed Item Attachment: Content or null if the content is unavailable (v23.0–31.0)DashboardComponent—Feed Item Attachment: Dashboard (v24.0–31.0)EmailMessage—Feed Item Attachment: Email Message (v29.0–31.0)Link—Feed Item Attachment: Link (v23.0–31.0)Poll—Feed Item Attachment: Poll (v26.0–31.0)RecordSnapshot—Feed Item Attachment: Record Snapshot (v29.0–31.0)TrackedChange—Feed Item Attachment: Tracked Change (v29.0–31.0)ImportantAs of API version 32.0, use the capabilities property. | Medium, 29.0 |  |
| body | Feed Item Body | Information about the feed item.In API versions to 28.0, use the /body/text property as the default case for rendering text. In API versions 29.0–30.0, use the /preamble/text property as the default case for rendering text. In API versions 31.0 and later, use the /header/text property as the default case for rendering text. | Small, 29.0 | 23.0 |
| canShare | Boolean | Indicates whether the feed item can be shared.If a feed item has multiple file attachments and at least one attachment has been deleted or is inaccessible, the feed item can’t be shared. The canShare value is incorrectly set to true in these cases.ImportantAs of API version 39.0, use the isSharable property. | Medium, 29.0 | 27.0–38.0 |
| capabilities | Feed Element Capabilities | Auxiliary information for the feed element. The feed element's characteristics are made up of these capabilities. | Medium, 31.0 | 31.0 |
| clientInfo | ClientInfo | Information about the client app used to authenticate the connection. | Medium, 29.0 | 23.0 |
| comments | Comment Page | Comments for this feed item.ImportantAs of API version 32.0, use the capabilities.comments.page property. | Small, 29.0 | 23.0–31.0 |
| createdDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z | Small, 29.0 | 23.0 |
| currentUserLike | Reference | NoteThis property is no longer available as of version 24.0. Use the myLike property instead.A reference to a like object if applicable, null otherwise. |  | 23.0–24.0 |
| event | Boolean | true if feed item created due to an event change, false otherwise. | Medium, 29.0 | 23.0 |
| feedElementType | String | Feed elements are the top-level objects that a feed contains. The feed element type describes the characteristics of that feed element. One of these values:Bundle—A container of feed elements. A bundle also has a body made up of message segments that can always be gracefully degraded to text-only values.FeedItem—A feed item has a single parent and is scoped to oneExperience Cloud site or across all Experience Cloud sites. A feed item can have capabilities such as bookmarks, canvas, content, comment, link, poll. Feed items have a body made up of message segments that can always be gracefully degraded to text-only values.Recommendation—A recommendation is a feed element with a recommendations capability. A recommendation suggests records to follow, groups to join, or applications that are helpful to the context user. | Small, 31.0 | 31.0 |
| hasVerified​Comment | Boolean | true if the feed item has a verified comment, otherwise false. | Small, 41.0 | 41.0 |
| header | Feed Item Body | The header is the title of the post. This property contains renderable plain text for all the segments of the message. If a client doesn’t know how to render a feed element type, it should render this text. | Medium, 31.0 | 31.0 |
| id | String | 18-character ID of the feed item. | Small, 29.0 | 23.0 |
| isBookmarked​ByCurrentUser | Boolean | true if the context user has bookmarked this feed item, false otherwise.ImportantAs of API version 32.0, use the capabilities.bookmarks.isBookmarkedByCurrentUser property. | Medium, 29.0 | 24.0–31.0 |
| isDelete​Restricted | Boolean | Returns true if the context user can’t delete a feed item. If it returns false, possibly the context users can delete the feed item. | Medium, 29.0 | 25.0 |
| isLikedBy​CurrentUser | Boolean | true if the context user has liked this feed item, false otherwise.ImportantAs of API version 32.0, use the capabilities.chatterLikes.isLikedByCurrentUser property. | Medium, 29.0 | 23.0–31.0 |
| isSharable | Boolean | Indicates whether the feed item can be shared. | Medium, 39.0 | 39.0 |
| likes | Like Page | Likes for this feed item,ImportantAs of API version 32.0, use the capabilities.chatterLikes.page property. | Medium, 29.0 | 23.0–31.0 |
| likesMessage | Like Message Body | A message body that describes who likes the feed item.ImportantAs of API version 32.0, use the capabilities.chatterLikes.likesMessage property. | Small, 29.0 | 27.0–31.0 |
| modifiedDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | Small, 29.0 | 23.0 |
| moderationFlags | Moderation Flags | Flags for this feed item. Moderators can view and act on flagged items.If the communityModeration property of the Features response body is false, this property is null.ImportantAs of API version 32.0, use the capabilities.moderation.moderationFlags property. | Big, 29.0 | 29.0–31.0 |
| myLike | Reference | If the context user has liked the comment, this property is a reference to the specific like, null otherwise.ImportantAs of API version 32.0, use the capabilities.chatterLikes.myLike property. | Medium, 29.0 | 23.0–31.0 |
| originalFeedItem | Reference | A reference to the original feed item if this feed item is a shared feed item, null otherwise. | Small, 29.0 | 24.0 |
| originalFeed​ItemActor | Depends on type | Value depends on type of original feed item. Values are:Record Summary–if original feed item is a recordUser Summary–if original feed item is a userUnauthenticated User—if original feed item is from a Chatter customernull if this feed item is not a shared feed item | Medium, 29.0 | 24.0 |
| parent | Depends on type | Value depends on type of parent. Values are:File Summary–if parent is a fileGroup–if parent is a groupRecord Summary–if parent is a recordUser Summary–if parent is a userNoteIf the parent is a user, a User Summary response body is returned, not a Record Summary of type user. The same applies for both groups and files. | Medium, 29.0 | 23.0 |
| photoUrl | String | URL of the photo associated with the feed item. | Medium, 29.0 | 23.0 |
| preamble | Feed Item Preamble Message Body | The preamble is the title of the post. This property contains renderable plain text for all the segments of the message, for example, “App Builders - Pam Jones”.In API versions to 28.0, use the /body/text property as the default case for rendering text. In API versions 29.0–30.0, use the /preamble/text property as the default case for rendering text. In API versions 31.0 and later, use the /header/text property as the default case for rendering text. | Medium, 29.0 | 27.0–30.0 |
| relative​CreatedDate | String | Created date formatted as a relative, localized string, for example, “17m ago” or “Yesterday.”. | Small, 29.0 | 28.0 |
| topics | Feed Item Topics | Topics for this feed item.ImportantAs of API version 32.0, use the capabilities.topics.items property. | Medium, 29.0 | 28.0–31.0 |
| type | String | The type property always returns all types, regardless of API version. However, not all types are valid with all API versions.ImportantAs of API version 32.0, use the capabilities property to determine what can be done with a feed item. See Capabilities.Values are:ActivityEvent—Feed item generated in Case Feed when an event or task associated with a parent record with a feed enabled is created or updated.AdvancedTextPost—A feed item with advanced text formatting, such as a group announcement post.ApprovalPost—Feed item with an approval capability. Approvers can act on the feed item parent.AttachArticleEvent—Feed item generated when an article is attached to a case in Case Feed.BasicTemplateFeedItem—Feed item with an enhanced link capability.CallLogPost—Feed item generated when a call log is saved to a case in Case Feed.CanvasPost—Feed item generated by a canvas app in the publisher or from Connect REST API or Connect in Apex. The post itself is a link to a canvas app.CaseCommentPost—Feed item generated when a case comment is saved in Case Feed.ChangeStatusPost—Feed item generated when the status of a case is changed in Case Feed.ChatTranscriptionPost—Feed item generated in Case Feed when a Live Agent chat transcript is saved to a case.CollaborationGroupCreated—Feed item generated when a new public group is created. Contains a link to the new group.CollaborationGroupUnarchived—Deprecated. Feed item generated when an archived group is activated.ContentPost—Feed item with a content capability.CreateRecordEvent—Feed item that describes a record created in the publisher.DashboardComponentAlert—Feed item with a dashboard alert.DashboardComponentSnapshot—Feed item with a dashboard component snapshot capability.EmailMessageEvent—Feed item generated when an email is sent from a case in Case Feed.FacebookPost—Deprecated. Feed item generated when a Facebook post is created from a case in Case Feed.LinkPost—Feed item with a link capability.MilestoneEvent—Feed item generated when a case milestone is either completed or reaches a violation status. Contains a link to the case milestone.PollPost—Feed item with a poll capability. Viewers of the feed item are allowed to vote on the options in the poll.ProfileSkillPost—Feed item generated when a skill is added to a user’s profile.QuestionPost—Feed item generated when a question is asked.As of API version 33.0, a feed item of this type can have a content capability and a link capability.ReplyPost—Feed item generated by a Chatter Answers reply.RypplePost—Feed item generated when a user posts thanks.SocialPost—Feed item generated when a social post is created from a case in Case Feed.TextPost—Feed item containing text only.TrackedChange—Feed item created when one or more fields on a record have been changed.UserStatus—Deprecated. A user's post to their own profile. | Small, 29.0 | 23.0 |
| url | String | URL to this feed item. | Small, 29.0 | 23.0 |
| visibility | String | Who can see this feed item. Values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item. | Small, 29.0 | 26.0 |

#### See Also

-   [Announcement](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm "An announcement.")

-   [Feed Item Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm "Chatter feed item page.")

-   [Pinned Feed Element Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pinned_feed_element_collection.htm "Collection of pinned feed elements.")

## Related Topics

- Record
                  Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Unauthenticated
                  User (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_unauthenticated_user.htm)
- Feed Item Attachment: Approval (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_approval.htm)
- Feed Item Attachment: Basic Template (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_basic.htm)
- Feed Item Attachment: Canvas Template (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_canvas.htm)
- Feed Item Attachment: Case Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_case.htm)
- Feed Item Attachment: Content (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_content.htm)
- Feed Item Attachment:
                    Dashboard (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_dashboard.htm)
- Feed Item Attachment: Email Message (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_emailMessage.htm)
