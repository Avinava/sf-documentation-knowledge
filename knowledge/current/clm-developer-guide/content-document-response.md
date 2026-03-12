---
title: "Content Document Response"
domain: clm-developer-guide
topic: content-document-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.387Z
estimatedTokens: 262
keywords: [Content, Document, Output, representation, individual, documents]
---

# Content Document Response

> Output representation of the individual content documents.

# Content Document Response

Output representation of the individual content documents.

JSON Sample

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| content​DocumentId | String | Record ID of the content document. | Small, 60.0 | 60.0 |
| contentDocument​LinkId | String | Record ID of the content document link. | Small, 60.0 | 60.0 |
| contractDocument​VersionId | String | Record ID of the linked ContractDocumentVersion object. | Small, 60.0 | 60.0 |
| created​Date | String | Creation date of the content document. | Small, 60.0 | 60.0 |
| file​Extension | String | File extension of the content document. | Small, 60.0 | 60.0 |
| isShared​Externally | Boolean | Indicates if the file can be viewed by all users (true) or not (false). The default value is true. | Small, 60.0 | 60.0 |
| lastModified​Date | String | Last modification date of the content document. | Small, 60.0 | 60.0 |
| title | String | Title of the content document. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "contractId": "contractId_value",
  "contractDocumentVersionId": "contractDocumentVersionId_value",
  "status": "",
  "contractDocuments": [
    {
      "contentDocumentId": "contentDocumentId_value1",
      "contractDocumentVersionId": "contractDocumentVersionId_value1",
      "createdDate": "createdDate_value1",
      "fileExtension": "fileExtension_value1",
      "lastModifiedDate": "lastModifiedDate_value1",
      "title": "title_value1",
      "isSharedExternally": true
    }
  ],
  "attachments": [
    {
      "contentDocumentId": "contentDocumentId_value2",
      "contractDocumentVersionId": "contractDocumentVersionId_value2",
      "createdDate": "createdDate_value2",
      "fileExtension": "fileExtension_value2",
      "lastModifiedDate": "lastModifiedDate_value2",
      "title": "title_value2",
      "isSharedExternally": true
    }
  ]
}
```
