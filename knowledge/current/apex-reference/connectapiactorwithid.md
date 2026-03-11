---
title: "ConnectApi.ActorWithId"
domain: apex-reference
topic: connectapiactorwithid
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.910Z
keywords: [ConnectApi.ActorWithId, See]
---

# ConnectApi.ActorWithId

# ConnectApi.ActorWithId

Actor with ID.

This class is abstract.

Subclass of [ConnectApi.Actor](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm "Actor.").

Superclass of:

-   [ConnectApi.AbstractRecordView](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstractRecordView.htm "A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type.")
-   [ConnectApi.ArticleSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_article_summary.htm "A knowledge article summary.")
-   [ConnectApi.ChatterGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm "Chatter group.")
-   [ConnectApi.ContentHubRepository](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository.htm "A repository.")
-   [ConnectApi.File](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file.htm "File.")
-   [ConnectApi.RelatedFeedPost](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_related_feed_post.htm "This class is abstract.")
-   [ConnectApi.User](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_User.htm "User.")

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | Actor’s 18-character ID | 28.0 |
| motif | ConnectApi.​Motif | An icon that identifies the actor as a user, group, file, or custom object. The icon isn’t the user or group photo, and it isn’t a preview of the file. The motif can also contain the object’s base color. | 28.0 |
| mySubscription | ConnectApi.​​Reference | If the context user is following the item, this contains information about the subscription, else returns null. | 28.0 |
| url | String | Connect REST API URL for the resource | 28.0 |

#### See Also

-   [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")
    
-   [ConnectApi.FeedEntitySummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_summary.htm "The summary of a feed entity that is shared with a feed element.")
    
-   [ConnectApi.GroupRecord](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecord.htm "A record associated with a group.")
    
-   [ConnectApi.MentionSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mention_msg_seg.htm "Mention segment.")
    
-   [ConnectApi.RecordSummaryList](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordSummaryList.htm "Summary information about a list of records in the organization including custom objects.")