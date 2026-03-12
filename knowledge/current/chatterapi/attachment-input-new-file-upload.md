---
title: "Attachment Input: New File Upload"
domain: chatterapi
topic: attachment-input-new-file-upload
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.998Z
estimatedTokens: 312
keywords: [Attachment, Input, New, File, Upload]
---

# Attachment Input: New File Upload

> New file upload attachment input.

# Attachment Input: New File Upload

New file upload attachment input.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This request body isn’t available in version 32.0 and later. In version 32.0 and later, use [Content Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_capability_input.htm "Create or update a file associated with a comment.").

To upload a new file, provide the binary file in a multipart/form-data body part where name="feedItemFileUpload". See [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

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
| attachmentType | String | The attachment type. Must contain the value NewFile. | 27.0–31.0 |
| desc | String | Description of the file.AttentionThis parameter should not be used as of version 27.0. Use description instead. | 23.0–26.0 |
| description | String | Optional. Description of the file. | 27.0–31.0 |
| title | String | Title of the file. | 24.0–31.0 |

## Code Examples

```
<attachment attachmentType="NewFile">
   <description>TPS Report (with cover)</description>
       <title>TPS.txt</title>
</attachment>
```

```
{ "attachment": 
  {
     "attachmentType":"NewFile",
     "description":"TPS Report (with cover)",
     "title":"TPS.txt"
  }
}
```

## Related Topics

- Content Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_capability_input.htm)
- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
