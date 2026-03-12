---
title: "Attachment Input: Link"
domain: chatterapi
topic: attachment-input-link
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.991Z
estimatedTokens: 230
keywords: [Attachment, Input, Link]
---

# Attachment Input: Link

> Link attachment input.

# Attachment Input: Link

Link attachment input.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This request body isn’t available in version 32.0 and later. In version 32.0 and later, use [Link Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_link_capability_input.htm "Create or update a link attached to a feed element.").

XML

The attachmentType property is an attribute of the <attachment> element. For example:

```

```

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attachmentType | String | The attachment type. Must contain the value Link. | 27.0–31.0 |
| url | String | URL included in the attachment. | 23.0–31.0 |
| urlName | String | Optional. Name of the URL. If not provided, a name is generated from the domain name of the URL. | 23.0–31.0 |

## Code Examples

```
<attachment attachmentType="Link">
   <url>http://www.google.com</url>
   <urlName>A search engine</urlName>
</attachment>
```

```
{ "attachment": 
   {
      "attachmentType":"Link",
      "url": "https://salesforce.com",
      "urlName": "Salesforce"
   }
}
```

## Related Topics

- Link Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_link_capability_input.htm)
