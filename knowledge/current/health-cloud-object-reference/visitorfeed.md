---
title: "VisitorFeed"
domain: health-cloud-object-reference
topic: visitorfeed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.238Z
estimatedTokens: 1309
keywords: [VisitorFeed, posts, feed-tracked, changes, Visitor, API, version, 49.0, later, Calls, Usage]
---

# VisitorFeed

> This object represents the posts and feed-tracked changes of the Visitor object.  This object is available in API version
    49.0 and later.

# VisitorFeed

This object represents the posts and feed-tracked changes of the Visitor object. This object is available in API version 49.0 and later.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| BestCommentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the comment marked as best answer on a question post. |
| Body | TypetextareaPropertiesNillable, SortDescriptionThe body of the post. Required when Type is TextPost. Optional when Type is ContentPost or LinkPost. |
| CommentCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of comments associated with this feed item. |
| InsertedById | TypereferencePropertiesGroup, Nillable, SortDescriptionID of the user who added this item to the feed. For example, if an application migrates posts and comments from another application into a feed, the InsertedBy value is set to the ID of the context user. |
| IsRichText | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the feed item Body contains rich text. Set IsRichText to true if you post a rich text feed item via SOAP API. Otherwise, the post is rendered as plain text.Rich text supports the following HTML tags:<p>TipThough the <br> tag isn’t supported, you can use <p>&nbsp;</p> to create lines.<a><b><code><i><u><s><ul><ol><li><img>The <img> tag is accessible only via the API and must reference files in Salesforce similar to this example: <img src="sfdc://069B0000000omjh"></img> |
| LikeCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of likes associated with this feed item. |
| LinkUrl | TypeurlPropertiesNillable, SortDescriptionThe URL of a LinkPost. |
| NetworkScope | TypepicklistPropertiesGroup, Nillable, Restricted picklist, SortDescriptionSpecifies whether this feed item is available in the default Experience Cloud site, a specific Experience Cloud site, or all sites. This field is available in API version 26.0 and later, if digital experiences is enabled for your org.NetworkScope can have the following values:NetworkId—The ID of the Experience Cloud site in which the FeedItem is available. If left empty, the feed item is only available in the default Experience Cloud site.AllNetworks—The feed item is available in all Experience Cloud sites.Note the following exceptions for NetworkScope:Only feed items with a Group or User parent can set a NetworkId or a null value for NetworkScope.For feed items with a record parent, users can set NetworkScope only to AllNetworks.You can’t filter a feed item on the NetworkScope field. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the record that is tracked in the feed. The detail page for the record displays the feed. |
| RelatedRecordId | TypereferencePropertiesGroup, Nillable, SortDescriptionID of the ContentVersion record associated with a ContentPost. This field is null for all posts except ContentPost. |
| Title | TypestringPropertiesGroup, Nillable, SortDescriptionThe title of the feed item. When the Type is LinkPost, the LinkUrl is the URL and this field is the link name. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPossible values are:ActivityEventAdvancedTextPost—created when a user posts a group announcement and when a user shares a post.AnnouncementPostApprovalPostAttachArticleEventBasicTemplateFeedItem—Basic Template PostCallLogPostCanvasPost—a post made by a canvas app posted on a feed.CaseCommentPostChangeStatusPostChatTranscriptPostCollaborationGroupCreatedCollaborationGroupUnarchivedContentPostCreateRecordEventDashboardComponentSnapshotEmailMessageEventFacebookPostLinkPostMilestoneEventPollPostProfileSkillPostQuestionPostReplyPostRypplePost—generated when a user creates a Thanks badge in WDC.SocialPostTextPostTrackedChangeUserStatus |
| Visibility | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether this feed item is available to all users or internal users only. This field is available if Salesforce Communities are enabled for your organization.Visibility can have the following values:AllUsers—The feed item is available to all users who have permission to see the feed item.InternalUsers—The feed item is available to internal users only.Note the following exceptions for Visibility:For record posts, Visibility is set to InternalUsers for all internal users by default.External users can set Visibility only to AllUsers.On user and group posts, only internal users can set Visibility to InternalUsers. |

## Usage

A feed for an object is automatically created when a user enables feed tracking for the object. Use feeds to track changes to records. For example, AccountFeed tracks changes to an account record. Use feed objects to retrieve the content of feed fields, such as type of feed or feed ID.

Note the following SOQL restrictions. No SOQL limit if logged-in user has View All Data permission. If not, specify a LIMIT clause of 1,000 records or fewer. SOQL ORDER BY on fields using relationships is not available. Use ORDER BY on fields on the root object in the SOQL query.
