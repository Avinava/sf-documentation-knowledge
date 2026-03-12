---
title: "ConnectApi.BasicTemplateAttachment"
domain: apex-reference
topic: connectapibasictemplateattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.183Z
estimatedTokens: 354
keywords: [ConnectApi.BasicTemplateAttachment, Attachments, feed, items, BasicTemplate., Important]
---

# ConnectApi.BasicTemplateAttachment

> Attachments in feed items with type BasicTemplate.

# ConnectApi.BasicTemplateAttachment

Attachments in feed items with type BasicTemplate.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.EnhancedLinkCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_enhanced_link_capability.htm#apex_connectapi_output_enhanced_link_capability "If a feed element has this capability, it has a link that may contain supplemental information like an icon, a title, and a description.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | An optional description with a 500 character limit. | 28.0–31.0 |
| icon | ConnectApi.Icon | An optional icon. | 28.0–31.0 |
| linkRecordId | String | If linkURL refers to a Salesforce record, linkRecordId contains the ID of the record. | 28.0–31.0 |
| linkUrl | String | An optional URL to a detail page if there is more content that can’t be displayed inline. Do not specify linkUrl unless you specify a title. | 28.0–31.0 |
| title | String | An optional title to the detail page. If linkUrl is specified, the title links to linkUrl. | 28.0–31.0 |

## Related Topics

- ConnectApi.EnhancedLinkCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_enhanced_link_capability.htm)
- ConnectApi.FeedItemAttachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.Icon (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_icon.htm)
