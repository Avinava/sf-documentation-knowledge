---
title: "ConnectApi.FeedElementCapability"
domain: apex-reference
topic: connectapifeedelementcapability
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:27.350Z
estimatedTokens: 2364
keywords: [ConnectApi.FeedElementCapability, feed, element, capability, which, defines, characteristics, element.]
---

# ConnectApi.FeedElementCapability

> A feed element capability, which defines
the characteristics of a feed element.

# ConnectApi.FeedElementCapability

A feed element capability, which defines the characteristics of a feed element.

In API version 30.0 and earlier, most feed items can have comments, likes, topics, and so on. In version 31.0 and later, every feed item (and feed element) can have a unique set of capabilities. If a capability property exists on a feed element, that capability is available, even if the capability property doesn’t have a value. For example, if the ChatterLikes capability property exists on a feed element (with or without a value), the context user can like that feed element. If the capability property doesn’t exist, it isn’t possible to like that feed element. A capability can also contain associated data. For example, the Moderation capability contains data about moderation flags.

This class is abstract.

This class is a superclass of:

-   [ConnectApi.AssociatedActionsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_associated_actions_capability.htm "If a feed element has this capability, it has platform actions associated with it.")
-   [ConnectApi.ApprovalCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_approval_capability.htm#apex_connectapi_output_approval_capability "If a feed element has this capability, it includes information about an approval.")
-   [ConnectApi.BannerCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_capability.htm "If a feed element has this capability, it has a banner motif and style.")
-   [ConnectApi.BookmarksCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bookmarks_capability.htm "If a feed element has this capability, the context user can bookmark it.")
-   [ConnectApi.BundleCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_bundle_capability.htm "If a feed element has this capability, it has a container of feed elements called a bundle.")
-   [ConnectApi.CallCollaborationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_call_collaboration_capability.htm "If a feed element has this capability, it has a recording comment.")
-   [ConnectApi.CanvasCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_canvas_capability.htm#apex_connectapi_output_canvas_capability "If a feed element has this capability, it renders a canvas app.")
-   [ConnectApi.CaseCommentCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_case_comment_capability.htm#apex_connectapi_output_case_comment_capability "If a feed element has this capability, it has a case comment on the case feed.")
-   [ConnectApi.ChatterLikesCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_likes_capability.htm "If a feed element has this capability, the context user can like it. Exposes information about existing likes.")
-   [ConnectApi.CloseCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_close_capability.htm "If a feed element has this capability, users with permission can close it.")
-   [ConnectApi.CommentsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comments_capability.htm "If a feed element or comment has this capability, the context user can add a comment to it.")
-   [ConnectApi.ContentCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_capability.htm#apex_connectapi_output_content_capability "If a comment has this capability, it has a file attachment.")
-   [ConnectApi.DashboardComponentSnapshotCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_dashboard_capability.htm#apex_connectapi_output_dashboard_capability "If a feed element has this capability, it has a dashboard component snapshot. A snapshot is a static image of a dashboard component at a specific point in time.")
-   [ConnectApi.DirectMessageCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_capability.htm "If a feed element has this capability, it’s a direct message.")
-   [ConnectApi.EmailMessageCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_email_message_capability.htm#apex_connectapi_output_email_message_capability "If a feed element has this capability, it has an email message from a case.")
-   [ConnectApi.EnhancedLinkCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_enhanced_link_capability.htm#apex_connectapi_output_enhanced_link_capability "If a feed element has this capability, it has a link that may contain supplemental information like an icon, a title, and a description.")
-   [ConnectApi.ExtensionsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_extensions_capability.htm "If a feed element has this capability, it has one or more extension attachments.")
-   [ConnectApi.FeedEntityShareCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_share_capability.htm "If a feed element or comment has this capability, a feed entity is shared with it.")
-   [ConnectApi.FilesCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_content_capability.htm "If a feed element has this capability, it has one or more file attachments.")
-   [ConnectApi.InteractionsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_interactions_capability.htm "If a feed element has this capability, it has information about user interactions.")
-   [ConnectApi.LinkCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_link_capability.htm#apex_connectapi_output_link_capability "If a feed element has this capability, it has a link.")
-   [ConnectApi.MediaReferenceCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_media_reference_capability.htm "If a feed element has this capability, it has one or more media references.")
-   [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")
-   [ConnectApi.MuteCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mute_capability.htm "If a feed element has this capability, users can mute it. Muted feed elements are visible in the muted feed, and invisible in all other feeds that respect mute.")
-   [ConnectApi.OriginCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_origin_capability.htm#apex_connectapi_output_origin_capability "If a feed element has this capability, it was created by a feed action.")
-   [ConnectApi.PinCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pin_capability.htm "If a feed element has this capability, users who have permission can pin it to a feed.")
-   [ConnectApi.PollCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_poll_capability.htm "If a feed element has this capability, it includes a poll.")
-   [ConnectApi.QuestionAndAnswersCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_question_and_answers_capability.htm "If a feed element has this capability, it has a question and comments on the feed element are answers to the question.")
-   [ConnectApi.ReadByCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_capability.htm "If a feed element has this capability, the context user can mark it as read.")
-   [ConnectApi.RecommendationsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_capability.htm "If a feed element has this capability, it has a recommendation.")
-   [ConnectApi.RecordCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_capability.htm "If a comment has this capability, it has a record attachment.")
-   [ConnectApi.RecordSnapshotCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_snapshot_capability.htm#apex_connectapi_output_record_snapshot_capability "If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event.")
-   [ConnectApi.SocialPostCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_post_capability.htm "If a feed element has this capability, it can interact with a social post on a social network.")
-   [ConnectApi.StatusCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_status_capability.htm "If a feed post or comment has this capability, it has a status that determines its visibility.")
-   [ConnectApi.TopicsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topics_capability.htm "If a feed element has this capability, the context user can add topics to it. Topics help users organize and discover conversations.")
-   [ConnectApi.TrackedChangesCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tracked_changes_capability.htm#apex_connectapi_output_tracked_changes_capability "If a feed element has this capability, it contains all changes to a record for a single tracked change event.")
-   [ConnectApi.UpDownVoteCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_up_down_vote_capability.htm "If a feed post or comment has this capability, users can upvote or downvote it.")
-   [ConnectApi.VerifiedCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_verified_capability.htm "If a comment has this capability, users with permission can mark it as verified or unverified.")

This class doesn’t have any properties.

## Related Topics

- ConnectApi.AssociatedActionsCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_associated_actions_capability.htm)
- ConnectApi.ApprovalCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_approval_capability.htm)
- ConnectApi.BannerCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_capability.htm)
- ConnectApi.BookmarksCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bookmarks_capability.htm)
- ConnectApi.BundleCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_bundle_capability.htm)
- ConnectApi.CallCollaborationCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_call_collaboration_capability.htm)
- ConnectApi.CanvasCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_canvas_capability.htm)
- ConnectApi.CaseCommentCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_case_comment_capability.htm)
- ConnectApi.ChatterLikesCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_likes_capability.htm)
- ConnectApi.CloseCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_close_capability.htm)
