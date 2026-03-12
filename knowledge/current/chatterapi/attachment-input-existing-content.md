---
title: "Attachment Input: Existing Content"
domain: chatterapi
topic: attachment-input-existing-content
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.988Z
estimatedTokens: 208
keywords: [Attachment, Input, Content]
---

# Attachment Input: Existing Content

> Existing content attachment input.

# Attachment Input: Existing Content

Existing content attachment input.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This request body isn’t available in version 32.0 and later. In version 32.0 and later, use [Content Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_capability_input.htm "Create or update a file associated with a comment.").

XML

In XML request bodies, attachmentType is an attribute of the <attachment> element.

```

```

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attachmentType | String | The attachment type. Must contain the value ExistingContent. | 27.0–31.0 |
| contentDocumentId | String | ID of the existing content | 23.0–31.0 |

## Code Examples

```
<attachment attachmentType="ExistingContent">
   <contentDocumentId>069...</contentDocumentId>
</attachment>
```

```
{ "attachment": 
   {
      "attachmentType":"ExistingContent",
      "contentDocumentId": "069D00000001FHF"
   }
}
```

## Related Topics

- Content Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_capability_input.htm)
