---
title: "External Documents (GET, POST)"
domain: clm-developer-guide
topic: external-documents-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.341Z
estimatedTokens: 491
keywords: [External, Documents, POST, document]
---

# External Documents (GET, POST)

> Get information about external document details and
    update.

# External Documents (GET, POST)

Get information about external document details and update.

Resource

```

```

Example URI

```

```

Available version

58.0

Example for GET

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=clm_developer_guide)

#### Note

You can access the external document details using the reference object such as document template, contract document version or using the external document ID.

```

```

```

```

```

```

Example for POST

```

```

HTTP methods

GET, POST

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalDocumentId | String | ID of an external document record. | Required | 58.0 |
| refObjectId | String | ID for the salesforce reference object. | Required | 58.0 |

Response body for GET

[External Document Output](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_external_document_output.htm "Output representation of the details of an external document.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentVersionId | String | Content version ID of the document using which new external document is created. | Required | 58.0 |
| documentNamePrefix | String | Document name prefix, which is required to name the newly created external document. | Optional | 58.0 |
| isAsync | String | Determines the way the external document gets created. | Optional | 58.0 |
| refObjectId | String | ID of the reference object. This can be either a document template or a contract ID. | Optional | 58.0 |

Response body for POST

[External Document Creation Output](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_external_doc_creation_output.htm "Output representation for the create external document request.")

## Code Examples

```
/connect/external-document
```

```
https://yourInstance.salesforce.com/services/data/v58.0/connect/external-document
```

```
https://yourInstance.salesforce.com/services/data/v58.0/connect/external-document?externalDocumentId=${externalDocumentId}
```

```
https://yourInstance.salesforce.com/services/data/v58.0/connect/external-document?refObjectId=${refObjectId}
```

```
https://yourInstance.salesforce.com/services/data/v58.0/connect/external-document?externalDocumentId=${externalDocumentId}&refObjectId=${refObjectId}
```

## Related Topics

- External Document Output (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_external_document_output.htm)
- External Document Creation Output (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_external_doc_creation_output.htm)
