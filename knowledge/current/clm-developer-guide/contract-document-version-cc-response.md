---
title: "Contract Document Version CC Response"
domain: clm-developer-guide
topic: contract-document-version-cc-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.427Z
estimatedTokens: 281
keywords: [Contract, Document, Version, Output, representation, latest, including, status, associated, documents, attachments]
---

# Contract Document Version CC Response

> Output representation of the latest details of a contract document version, including its
    ID, status, and associated documents and attachments.

# Contract Document Version CC Response

Output representation of the latest details of a contract document version, including its ID, status, and associated documents and attachments.

JSON Sample

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attachments | Content Document Response[] | Details of the list of attachments associated with the contract document version. | Big, 60.0 | 60.0 |
| contract​Documents | Content Document Response[] | Details of the list of documents associated with the contract. | Big, 60.0 | 60.0 |
| contract​Document​VersionId | String | Record ID of the associated contract document version. | Small, 60.0 | 60.0 |
| contract​Documents | Content Document Response[] | Details of the list of documents associated with the contract. | Big, 60.0 | 60.0 |
| contract​Id | String | Record ID of the parent contract. | Small, 60.0 | 60.0 |
| name | String | Version name of the contract document version. | Small, 60.0 | 60.0 |
| status | String | Status of the contract document version. | Small, 60.0 | 60.0 |

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

## Related Topics

- Content Document Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_connect_api._content_document_respons.htm)
