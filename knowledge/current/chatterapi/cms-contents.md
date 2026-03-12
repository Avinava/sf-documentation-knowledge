---
title: "CMS Contents"
domain: chatterapi
topic: cms-contents
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.769Z
estimatedTokens: 495
keywords: [CMS, Contents, managed, content]
---

# CMS Contents

> Create managed content.

# CMS Contents

Create managed content.

Resource

```

```

Available version

54.0

HTTP methods

POST

In version 56.0 and later, you can upload binary files to create managed content. To upload a binary file, you must send it in a multipart/form-data request. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Request body for POST

Root XML tag

<ManagedContentInputRepresentation>

JSON example for version 60.0 and later

```

```

JSON example for version 54.0–59.0

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the managed content. | Optional | 61.0 |
| contentBody | Managed Content Body Input in version 60.0 and laterMap<String, Object> in version 54.0–59 | Body of the managed content. | Required | 54.0 |
| contentKey | String | Content key to assign to the managed content. A content key is a universally unique identifier (UUID) such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ. | Optional | 56.0 |
| contentSpace​OrFolderId | String | Content space or folder ID where the content is created. | Required | 54.0 |
| contentType | String | Fully qualified name of the content type to create.If you’re uploading a binary file using a multipart/form-data message, contentType must be sfdc_cms__image or sfdc_cms__doc.You can't create a Form using sfdc_cms__form. The sfdc_cms__form content type isn't supported. | Required | 54.0 |
| externalId | String | External ID of the managed content. | Optional | 58.0 |
| title | String | Title of the managed content. | Required | 54.0 |
| urlName | String | URL name of the managed content within the org. | Optional | 54.0 |

Response body for POST

[Managed Content Document](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_document.htm "Managed content document.")

## Code Examples

```
/connect/cms/contents
```

```
{
  "contentSpaceOrFolderId": "0Zuxx00000003M5CAI",
  "title": "Title of Document",
  "contentType": "sfdc_cms__news",
  "urlName": "test-url",
  "contentBody": {
    "bannerImage": {
      "source": {
        "type": "imageReference",
        "ref": {
          "contentKey": "MCZOCY2AM5PFBADN5UDRB53TLXR4"
        }
      }
    },
    "excerpt": "this is test excerpt",
    "body": "&lt;p&gt;Test body&lt;/p&gt;"
  }
}
```

```
{
"contentSpaceOrFolderId":"0Zuxx00000003M5CAI",
"title":"Title of Document",
"contentType":"ftestSfdcOnly__banner",
"urlName":"testUrl",
"contentBody" : {
   "bannerImage":"MCZOCY2AM5PFBADN5UDRB53TLXR4",
   "featuredEvent":"MCZOCY2AM5PFBADN5UDRB53TLXR4",
   "excerpt":"this is test except",
   "body":"&lt;p&gt;Test body&lt;/p&gt;"
   }
}
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Managed Content Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_body_input_rep.htm)
- Managed Content Document (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_document.htm)
