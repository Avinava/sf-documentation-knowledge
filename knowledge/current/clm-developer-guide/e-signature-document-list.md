---
title: "E-signature Document List"
domain: clm-developer-guide
topic: e-signature-document-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.308Z
estimatedTokens: 193
keywords: [E-signature, Document, View, documents, sent]
---

# E-signature Document List

> View a list of documents sent for e-signature.

# E-signature Document List

View a list of documents sent for e-signature.

Resource

```

```

Available version

56.0

HTTP methods

GET

Example

```

```

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| documentSelector | String | Specifies which class is executed. Use this when you want to define a custom class other than the default class or the one already defined for DocuSignDocumentSelector. | Optional | 56.0 |
| sourceObjectId | String | Record ID of the object. | Required | 56.0 |

Response body for GET

[Document List Response](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_list_respons.htm "Document record list.")

## Code Examples

```
/connect/e-sign/documents
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/e-sign/documents?sourceObjectId=<sourceObjectId>&documentSelector=<customClassName>
```

## Related Topics

- Document List Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_list_respons.htm)
