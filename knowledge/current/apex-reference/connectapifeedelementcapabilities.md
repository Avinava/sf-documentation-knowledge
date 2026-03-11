---
title: "ConnectApi.FeedElementCapabilities"
domain: apex-reference
topic: connectapifeedelementcapabilities
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:42:38.782Z
keywords: [ConnectApi.FeedElementCapabilities, See]
---

# ConnectApi.FeedElementCapabilities

# ConnectApi.FeedElementCapabilities

A container for all capabilities that can be included with a feed element.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| approval | ConnectApi.​ApprovalCapability | If a feed element has this capability, it includes information about an approval. | 32.0 |
| associated​Actions | ConnectApi.​AssociatedActions​Capability | If a feed element has this capability, it has platform actions associated with it. | 33.0 |
| banner | ConnectApi.​BannerCapability | If a feed element has this capability, it has a banner motif and style. | 31.0 |
| bookmarks | ConnectApi.​BookmarksCapability | If a feed element has this capability, the context user can bookmark it. | 31.0 |
| bundle | ConnectApi.​BundleCapability | If a feed element has this capability, it has a container of feed elements called a bundle. | 31.0 |
| callCollaboration | ConnectApi.​CallCollaboration​Capability | If a feed element has this capability, it has a recording comment. | 51.0 |
| canvas | ConnectApi.​CanvasCapability | If a feed element has this capability, it renders a canvas app. | 32.0 |
| caseComment | ConnectApi.​CaseComment​Capability | If a feed element has this capability, it has a case comment on the case feed. | 32.0 |
| chatterLikes | ConnectApi.​ChatterLikes​Capability | If a feed element has this capability, the context user can like it. Exposes information about existing likes. | 31.0 |
| close | ConnectApi.​CloseCapability | If a feed element has this capability, users with permission can close it. | 43.0 |
| comments | ConnectApi.​CommentsCapability | If a feed element or comment has this capability, the context user can add a comment to it. | 31.0 |
| content | ConnectApi.​ContentCapability | If a comment has this capability, it has a file attachment.Most ConnectApi.ContentCapability properties are null if the content has been deleted from the feed element or if the access has changed to private.ImportantIn version 36.0 and later, use the files property. | 32.0–35.0 |
| dashboardComponent​Snapshot | ConnectApi.​DashboardComponent​SnapshotCapability | If a feed element has this capability, it has a dashboard component snapshot. A snapshot is a static image of a dashboard component at a specific point in time. | 32.0 |
| directMessage | ConnectApi.​DirectMessage​Capability | If a feed element has this capability, it’s a direct message. | 39.0 |
| edit | ConnectApi.​EditCapability | If a feed element has this capability, users who have permission can edit it. | 34.0 |
| emailMessage | ConnectApi.​EmailMessage​Capability | If a feed element has this capability, it has an email message from a case. | 32.0 |
| enhancedLink | ConnectApi.​EnhancedLink​Capability | If a feed element has this capability, it has a link that may contain supplemental information like an icon, a title, and a description. | 32.0 |
| extensions | ConnectApi.​ExtensionsCapability | If a feed element has this capability, it has one or more extension attachments. | 40.0 |
| feedEntityShare | ConnectApi.​FeedShare​Capability | If a feed element or comment has this capability, a feed entity is shared with it. | 39.0 |
| files | ConnectApi.​FilesCapability | If a feed element has this capability, it has one or more file attachments. | 36.0 |
| interactions | ConnectApi.​InteractionsCapability | If a feed element has this capability, it has information about user interactions. | 37.0 |
| link | ConnectApi.​LinkCapability | If a feed element has this capability, it has a link. | 32.0 |
| mediaReferences | ConnectApi.MediaReferenceCapability | If a feed element has this capability, it has one or more media references. | 41.0 |
| moderation | ConnectApi.​ModerationCapability | If a feed element has this capability, users in an Experience Cloud site can flag it for moderation. | 31.0 |
| mute | ConnectApi.​MuteCapability | If a feed element has this capability, users can mute it. | 35.0 |
| origin | ConnectApi.​OriginCapability | If a feed element has this capability, it was created by a feed action. | 33.0 |
| pin | ConnectApi.PinCapability | If a feed element has this capability, users who have permission can pin it to a feed. | 41.0 |
| poll | ConnectApi.​PollCapability | If a feed element has this capability, it includes a poll. | 31.0 |
| questionAndAnswers | ConnectApi.​QuestionAnd​AnswersCapability | If a feed element has this capability, it has a question and comments on the feed element are answers to the question. | 31.0 |
| readBy | ConnectApi.​ReadBy​Capability | If a feed element has this capability, the context user can mark it as read. | 40.0 |
| recommendations | ConnectApi.​Recommendations​Capability | If a feed element has this capability, it has a recommendation. | 32.0 |
| recordSnaphot | ConnectApi.​RecordSnapshot​Capability | If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event. | 32.0 |
| socialPost | ConnectApi.​SocialPost​Capability | If a feed element has this capability, it can interact with a social post on a social network. | 36.0 |
| status | ConnectApi.​StatusCapability | If a feed post or comment has this capability, it has a status that determines its visibility. | 37.0 |
| topics | ConnectApi.​TopicsCapability | If a feed element has this capability, the context user can add topics to it. Topics help users organize and discover conversations. | 31.0 |
| trackedChanges | ConnectApi.​TrackedChanges​Capability | If a feed element has this capability, it contains all changes to a record for a single tracked change event. | 32.0 |
| upDownVote | ConnectApi.​UpDownVote​Capability | If a feed post or comment has this capability, users can upvote or downvote it. | 41.0 |

#### See Also

-   [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")
    
-   [ConnectApi.FeedItemSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_summary.htm "A feed item summary.")