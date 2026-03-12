---
title: "ConnectApi.FeedElementCapabilityInput"
domain: apex-reference
topic: connectapifeedelementcapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.163Z
estimatedTokens: 1116
keywords: [ConnectApi.FeedElementCapabilityInput, feed, element, capability]
---

# ConnectApi.FeedElementCapabilityInput

> A feed element capability.

# ConnectApi.FeedElementCapabilityInput

A feed element capability.

In API version 30.0 and earlier, most feed items can have comments, likes, topics, and so on. In version 31.0 and later, every feed item (and feed element) can have a unique set of capabilities. If a capability property exists on a feed element, that capability is available, even if the capability property doesn’t have a value. For example, if the ChatterLikes capability property exists on a feed element (with or without a value), the context user can like that feed element. If the capability property doesn’t exist, it isn’t possible to like that feed element. A capability can also contain associated data. For example, the Moderation capability contains data about moderation flags.

This class is abstract and has no public constructor. You can make an instance only of a subclass.

This class is a superclass of:

-   [ConnectApi.AssociatedActionsCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_associated_actions_capability.htm#apex_connectapi_input_associated_actions_capability "A list of action link groups to associate with a feed element. To associate an action link group with a feed element, the call must be made from the Apex namespace that created the action link definition. In addition, the user making the call must have created the definition or have View All Data permission.")
-   [ConnectApi.BookmarksCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bookmarks_capability.htm#apex_connectapi_input_bookmarks_capability "Create or update a bookmark on a feed element.")
-   [ConnectApi.CanvasCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_canvas_capability.htm#apex_connectapi_input_canvas_capability "Create or update a canvas app associated with a feed element.")
-   [ConnectApi.ContentCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_capability.htm#apex_connectapi_input_content_capability "Attach or update a file on a comment. Use this class to attach a new file or update a file that has already been uploaded to Salesforce.")
-   [ConnectApi.DirectMessageCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_direct_message_capability.htm "Create or update the members of a direct message.")
-   [ConnectApi.ExtensionsCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_extensions_capability.htm "Create or update extensions associated with a feed element.")
-   [ConnectApi.FeedEntityShareCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_entity_share_capability.htm "Share a feed entity with a feed post or comment.")
-   [ConnectApi.FilesCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_content_capability.htm "Attach up to 10 files that have already been uploaded or remove one or more files from a feed element.")
-   [ConnectApi.LinkCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_link_capability.htm#apex_connectapi_input_link_capability "Create or update a link on a feed element.")
-   [ConnectApi.MuteCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_mute_capability.htm#apex_connectapi_input_mute_capability "Mute or unmute a feed element.")
-   [ConnectApi.PollCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_poll_capability.htm#apex_connectapi_input_poll_capability "Create, update, or vote on a poll on a feed element.")
-   [ConnectApi.QuestionAndAnswersCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_question_and_answers_capability.htm#apex_connectapi_input_question_and_answers_capability "Create or edit a question feed element or set the best answer of the existing question feed element.")
-   [ConnectApi.ReadByCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_read_by_capability.htm "Mark feed elements as read by the context user.")
-   [ConnectApi.RecordCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_record_capability.htm "Attach an existing knowledge article to a comment.")
-   [ConnectApi.StatusCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_status_capability.htm "Change the status of a feed post or comment.")
-   [ConnectApi.TopicsCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_topics_capability.htm "Assign topics to a feed element.")

## Related Topics

- ConnectApi.AssociatedActionsCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_associated_actions_capability.htm)
- ConnectApi.BookmarksCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bookmarks_capability.htm)
- ConnectApi.CanvasCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_canvas_capability.htm)
- ConnectApi.ContentCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_capability.htm)
- ConnectApi.DirectMessageCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_direct_message_capability.htm)
- ConnectApi.ExtensionsCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_extensions_capability.htm)
- ConnectApi.FeedEntityShareCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_entity_share_capability.htm)
- ConnectApi.FilesCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_multiple_content_capability.htm)
- ConnectApi.LinkCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_link_capability.htm)
- ConnectApi.MuteCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_mute_capability.htm)
