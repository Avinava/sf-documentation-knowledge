---
title: "ConnectApi.MessageSegment"
domain: apex-reference
topic: connectapimessagesegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.020Z
estimatedTokens: 883
keywords: [ConnectApi.MessageSegment, Message, segment]
---

# ConnectApi.MessageSegment

> Message segment.

# ConnectApi.MessageSegment

Message segment.

This class is abstract.

Superclass of:

-   [ConnectApi.ComplexSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_complex_msg_seg.htm "Complex segments of field changes.")
-   [ConnectApi.EntityLinkSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entityLinkSeg.htm "Entity link segment.")
-   [ConnectApi.FieldChangeSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FieldChgMsgSeg.htm "Field change segment.")
-   [ConnectApi.FieldChangeNameSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FieldChgNameMsgSeg.htm "Field change name segment.")
-   [ConnectApi.FieldChangeValueSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FieldChgValueMsgSeg.htm "Field change value segment.")
-   [ConnectApi.HashtagSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_hash_msg_seg.htm "Hashtag segment.")
-   [ConnectApi.InlineImageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_inline_image_message_segment.htm "An inline image in the feed body.")
-   [ConnectApi.LinkSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_link_link_seg.htm "Link segment.")
-   [ConnectApi.MarkupBeginSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_markup_begin_message_segment.htm "The beginning of rich text markup.")
-   [ConnectApi.MarkupEndSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_markup_end_message_segment.htm "The end of rich text markup.")
-   [ConnectApi.MentionSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mention_msg_seg.htm "Mention segment.")
-   [ConnectApi.MoreChangesSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moreChgMsgSeg.htm "In feed items with a large number of tracked changes, the message is formatted as: “changed A, B, and made X more changes.” The MoreChangesSegment contains the “X more changes.”")
-   [ConnectApi.ResourceLinkSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_resourcelink.htm "Resource link segment.")
-   [ConnectApi.TextSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_txtMsgSeg.htm "Text segment.")

Message segments in a feed item are typed as ConnectApi.MessageSegment. Feed item capabilities are typed as ConnectApi.FeedItemCapability. Record fields are typed as ConnectApi.AbstractRecordField. These classes are all abstract and have several concrete subclasses. At runtime you can use instanceof to check the concrete types of these objects and then safely proceed with the corresponding downcast. When you downcast, you must have a default case that handles unknown subclasses.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

The composition of a feed can change between releases. Write your code to handle instances of unknown subclasses.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| text | String | Text-only rendition of this segment. If a client encounters an unknown message segment type, it can render this value. | 28.0 |
| type | ConnectApi.​MessageSegment​Type Enum | The message segment type. One of these values:EntityLinkFieldChangeFieldChangeNameFieldChangeValueHashtagInlineImageLinkMarkupBeginMarkupEndMentionMoreChangesResourceLinkText | 28.0 |

#### See Also

-   [ConnectApi.AbstractMessageBody](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstractMessageBody.htm "Abstract message body.")

## Related Topics

- ConnectApi.ComplexSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_complex_msg_seg.htm)
- ConnectApi.EntityLinkSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_entityLinkSeg.htm)
- ConnectApi.FieldChangeSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FieldChgMsgSeg.htm)
- ConnectApi.FieldChangeNameSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FieldChgNameMsgSeg.htm)
- ConnectApi.FieldChangeValueSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_FieldChgValueMsgSeg.htm)
- ConnectApi.HashtagSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_hash_msg_seg.htm)
- ConnectApi.InlineImageSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_inline_image_message_segment.htm)
- ConnectApi.LinkSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_link_link_seg.htm)
- ConnectApi.MarkupBeginSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_markup_begin_message_segment.htm)
- ConnectApi.MarkupEndSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_markup_end_message_segment.htm)
