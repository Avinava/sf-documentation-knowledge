---
title: "ConnectApi.Actor"
domain: apex-reference
topic: connectapiactor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.028Z
estimatedTokens: 501
keywords: [ConnectApi.Actor, Actor.]
---

# ConnectApi.Actor

> Actor.

# ConnectApi.Actor

Actor.

This class is abstract.

Superclass of:

-   [ConnectApi.ActorWithId](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm "Actor with ID.")
-   [ConnectApi.RecommendedObject](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommended_object.htm "A recommended object, such as a custom or static recommendation.")
-   [ConnectApi.UnauthenticatedUser](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_unauth_user.htm "Unauthenticated user.")

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| name | String | Name of the actor, such as the group name. | 28.0 |
| type | String | One of the following:filegrouprecommendedObject (version 34.0 and later)unauthenticateduseruserrecord type name—the name of the record type, such as myCustomObject__c or Account | 28.0 |

#### See Also

-   [ConnectApi.CaseCommentCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_case_comment_capability.htm "If a feed element has this capability, it has a case comment on the case feed.")

-   [ConnectApi.EntityRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm "A Chatter, custom, or static recommendation.")

-   [ConnectApi.EditCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_edit_capability.htm "If a feed element or comment has this capability, users who have permission can edit it.")

-   [ConnectApi.FeedEntitySummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_summary.htm "The summary of a feed entity that is shared with a feed element.")

-   [ConnectApi.FeedItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm "Feed item.")

-   [ConnectApi.FeedItemSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_summary.htm "A feed item summary.")

-   [ConnectApi.Subscription](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_subscription.htm "Subscription.")

## Related Topics

- ConnectApi.ActorWithId (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm)
- ConnectApi.RecommendedObject (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommended_object.htm)
- ConnectApi.UnauthenticatedUser (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_unauth_user.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.CaseCommentCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_case_comment_capability.htm)
- ConnectApi.EntityRecommendation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entity_recommendation.htm)
- ConnectApi.EditCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_edit_capability.htm)
- ConnectApi.FeedEntitySummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_summary.htm)
- ConnectApi.FeedItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm)
- ConnectApi.FeedItemSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_summary.htm)
