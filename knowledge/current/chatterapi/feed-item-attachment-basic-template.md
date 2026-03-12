---
title: "Feed Item Attachment: Basic Template"
domain: chatterapi
topic: feed-item-attachment-basic-template
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.734Z
estimatedTokens: 368
keywords: [Feed, Item, Attachment, Basic, Template]
---

# Feed Item Attachment: Basic Template

> Basic template feed item attachment.

# Feed Item Attachment: Basic Template

Basic template feed item attachment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Enhanced Link Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_enhanced_link_capability.htm "If a feed element has this capability, it has a link that may contain supplemental information like an icon, a title, and a description.") is used.

| Property | Type | Description | Filter Type and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | An optional description with a 500 character limit | Small, 29.0 | 27.0–31.0 |
| icon | Icon | An optional icon | Small, 29.0 | 27.0–31.0 |
| linkRecordId | String | If linkURL refers to a Salesforce record, linkRecordId contains the ID of the record. | Small, 29.0 | 28.0–31.0 |
| linkUrl | String | An optional link URL to a detail page if available content can’t display inline | Small, 29.0 | 27.0–31.0 |
| subtype | String | The subtype associated with the basic template feed item. Value is:CollaborationGroupCreated | Big, 29.0 | 27.0 onlyThis property is deprecated in 28.0 and always returns None for clients with older versions. |
| title | String | An optional title to a detail page | Small, 29.0 | 27.0–31.0 |
| type | String | BasicTemplate | Small, 29.0 | 27.0–31.0 |

## Related Topics

- Enhanced Link Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_enhanced_link_capability.htm)
- Icon (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_icon.htm)
