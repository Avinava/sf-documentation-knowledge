---
title: "StandardObjectName Feed Feed"
domain: agentforce
topic: standardobjectname-feed-feed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.309Z
estimatedTokens: 2132
keywords: [StandardObjectName, Feed, StandardObjectNameFeed, model, feed, objects, associated, standard, objects., represent, posts, feed-tracked, changes, object., Supported, Calls, Special, Access, Rules, Fields]
---

# StandardObjectName Feed Feed

> StandardObjectNameFeed is the model for all feed
      objects associated with standard objects. These objects represent the posts and feed-tracked
      changes of a standard object.

# StandardObjectName Feed Feed

StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.

The object name is variable and uses StandardObjectNameFeed syntax. For example, AccountFeed represents the posts and feed-tracked changes on an account record. We list the available associated feed objects at the end of this topic. For specific version information, see the documentation for the standard object.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

In the internal org, users can delete all feed items they created. This rule varies in Experience Cloud sites where threaded discussions and delete-blocking are enabled. Site members can delete all feed items they created, provided the feed items don’t have content nested under them—like a comment, answer, or reply. Where the feed item has nested content, only feed moderators and users with the Modify All Data permission can delete threads.

To delete feed items they didn’t create, users must have one of these permissions:

-   Modify All Data
-   Modify All Records on the parent object, like Account for AccountFeed
-   Moderate Chatter

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=agentforce_it_service_dev_guide)

    #### Note

    Users with the Moderate Chatter permission can delete only the feed items and comments they can see.

    Only users with this permission can delete items in unlisted groups.


For more special access rules, if any, see the documentation for the standard object. For example, for AccountFeed, see the special access rules for Account.

## Fields

| Field | Details |
| --- | --- |
| BestCommentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the comment marked as best answer on a question post. |
| Body | TypetextareaPropertiesNillable, SortDescriptionThe body of the post. Required when Type is TextPost. Optional when Type is ContentPost or LinkPost. |
| CommentCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of comments associated with this feed item. |
| ConnectionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionWhen a PartnerNetworkConnection modifies a record that is tracked, the CreatedBy field contains the ID of the system administrator. The ConnectionId contains the ID of the PartnerNetworkConnection. Available if Salesforce to Salesforce is enabled for your organization. |
| InsertedById | TypereferencePropertiesGroup, Nillable, SortDescriptionID of the user who added this item to the feed. For example, if an application migrates posts and comments from another application into a feed, the InsertedBy value is set to the ID of the context user. |
| isRichText | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the feed item Body contains rich text. If you post a rich text feed comment using SOAP API, set IsRichText to true and escape HTML entities from the body. Otherwise, the post is rendered as plain text.Rich text supports the following HTML tags:<p>TipThough the <br> tag isn’t supported, you can use <p>&nbsp;</p> to create lines.<a><b><code><i><u><s><ul><ol><li><img>The <img> tag is accessible only through the API and must reference files in Salesforce similar to this example: <img src="sfdc://069B0000000omjh"></img>NoteIn API version 35.0 and later, the system replaces special characters in rich text with escaped HTML. In API version 34.0 and prior, all rich text appears as a plain-text representation. |
| LikeCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of likes associated with this feed item. |
| LinkUrl | TypeurlPropertiesNillable, SortDescriptionThe URL of a LinkPost. |
| NetworkScope | TypepicklistPropertiesGroup, Nillable, Restricted picklist, SortDescriptionSpecifies whether this feed item is available in the default Experience Cloud site, a specific Experience Cloud site, or all sites. This field is available in API version 26.0 and later, if digital experiences is enabled for your org.NetworkScope can have the following values:NetworkId—The ID of the Experience Cloud site in which the FeedItem is available. If left empty, the feed item is only available in the default Experience Cloud site.AllNetworks—The feed item is available in all Experience Cloud sites.Note the following exceptions for NetworkScope:Only feed items with a Group or User parent can set a NetworkId or a null value for NetworkScope.For feed items with a record parent, users can set NetworkScope only to AllNetworks.You can’t filter a feed item on the NetworkScope field. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the record that is tracked in the feed. The detail page for the record displays the feed. |
| RelatedRecordId | TypereferencePropertiesGroup, Nillable, SortDescriptionID of the ContentVersion record associated with a ContentPost. This field is null for all posts except ContentPost. |
| Title | TypestringPropertiesGroup, Nillable, SortDescriptionThe title of the feed item. When the Type is LinkPost, the LinkUrl is the URL and this field is the link name. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of feed item. Values are:ActivityEvent—indirectly generated event when a user or the API adds a Task associated with a feed-enabled parent record (excluding email tasks on cases). Also occurs when a user or the API adds or updates a Task or Event associated with a case record (excluding email and call logging).For a recurring Task with CaseFeed disabled, one event is generated for the series only. For a recurring Task with CaseFeed enabled, events are generated for the series and each occurrence.AdvancedTextPost—created when a user posts a group announcement and, in Lightning Experience as of API version 39.0 and later, when a user shares a post.AnnouncementPost—Not used.ApprovalPost—generated when a user submits an approval.BasicTemplateFeedItem—Not used.CanvasPost—a post made by a canvas app posted on a feed.CollaborationGroupCreated—generated when a user creates a public group.CollaborationGroupUnarchived—Not used.ContentPost—a post with an attached file.CreatedRecordEvent—generated when a user creates a record from the publisher.DashboardComponentAlert—generated when a dashboard metric or gauge exceeds a user-defined threshold.DashboardComponentSnapshot—created when a user posts a dashboard snapshot on a feed.LinkPost—a post with an attached URL.PollPost—a poll posted on a feed.ProfileSkillPost—generated when a skill is added to a user’s Chatter profile.QuestionPost—generated when a user posts a question.ReplyPost—generated when Chatter Answers posts a reply.RypplePost—generated when a user creates a Thanks badge in WDC.TextPost—a direct text entry on a feed.TrackedChange—a change or group of changes to a tracked field.UserStatus—automatically generated when a user adds a post. Deprecated. |
| Visibility | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether this feed item is available to all users or internal users only. This field is available if dgitial experiences is enabled for your org.Visibility can have the following values:AllUsers—The feed item is available to all users who have permission to see the feed item.InternalUsers—The feed item is available to internal users only.Note the following exceptions for Visibility:For record posts, Visibility is set to InternalUsers for all internal users by default.External users can set Visibility only to AllUsers.On user and group posts, only internal users can set Visibility to InternalUsers. |

## Usage

A feed for an object is automatically created when a user enables feed tracking for the object. Use feeds to track changes to records. For example, AccountFeed tracks changes to an account record. Use feed objects to retrieve the content of feed fields, such as type of feed or feed ID.

Note the following SOQL restrictions. No SOQL limit if logged-in user has the View All Data permission. If not, specify a LIMIT clause of 1,000 records or fewer. SOQL ORDER BY on fields using relationships is not available. Use ORDER BY on fields on the root object in the SOQL query.

## Object That Follows This Model

This object follows the standard pattern for associated feed objects.
