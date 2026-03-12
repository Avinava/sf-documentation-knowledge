---
title: "ConnectApi.CaseCommentCapability"
domain: apex-reference
topic: connectapicasecommentcapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.568Z
estimatedTokens: 310
keywords: [ConnectApi.CaseCommentCapability, feed, element, capability, case, comment]
---

# ConnectApi.CaseCommentCapability

> If a feed element has this capability, it has a case comment on the
      case feed.

# ConnectApi.CaseCommentCapability

If a feed element has this capability, it has a case comment on the case feed.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actorType | ConnectApi.​CaseActorType | Specifies the type of user who made the comment. | 32.0 |
| createdBy | ConnectApi.Actor | Information about the user who created the comment. | 32.0 |
| createdDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 32.0 |
| eventType | ConnectApi.​CaseComment​EventType | Specifies an event type for a comment in the case feed. | 32.0 |
| id | String | 18-character ID of case comment. | 32.0 |
| published | Boolean | Specifies whether the comment has been published. | 32.0 |
| text | String | Text of the case comment. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- ConnectApi.​CaseActorType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.Actor (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​CaseComment​EventType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
