---
title: "ConnectApi.CaseComment"
domain: apex-reference
topic: connectapicasecomment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.563Z
estimatedTokens: 321
keywords: [ConnectApi.CaseComment, Attachments, feed, items, CaseCommentPost]
---

# ConnectApi.CaseComment

> Attachments in feed items with type CaseCommentPost.

# ConnectApi.CaseComment

Attachments in feed items with type CaseCommentPost.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.CaseCommentCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_case_comment_capability.htm "If a feed element has this capability, it has a case comment on the case feed.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actorType | ConnectApi.​CaseActorType Enum | Type of user who made the comment.Customer—if a Chatter customer made the commentCustomerService—if a service representative made the comment | 28.0–31.0 |
| createdBy | ConnectApi.​User​Summary | Comment’s creator | 28.0–31.0 |
| createdDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z | 28.0–31.0 |
| id | String | Comment’s 18–character ID | 28.0–31.0 |
| published | Boolean | Specifies whether the comment has been published | 28.0–31.0 |
| text | String | Comment’s text | 28.0–31.0 |

## Related Topics

- ConnectApi.CaseCommentCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_case_comment_capability.htm)
- ConnectApi.FeedItemAttachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
