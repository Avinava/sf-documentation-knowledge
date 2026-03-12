---
title: "Document Details"
domain: revenue-cloud
topic: document-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.687Z
estimatedTokens: 277
keywords: [Document, Details, Output, representation, details, generated, document.]
---

# Document Details

> Output representation of the details of the generated document.

# Document Details

Output representation of the details of the generated document.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| documentEntityId | String | Identifier of the related object record that manages the relationship between the source record and the generated document. For example, InvoiceDocument for Invoice records. | Big, 66.0 | 66.0 |
| documentGenerationProcessId | String | Identifier of the document generation process record that's created to track this document generation request. | Big, 66.0 | 66.0 |
| documentTemplateId | String | Identifier of the document template that’s used to generate the PDF. | Big, 66.0 | 66.0 |
| documentTitle | String | Document title or name of the generated document. | Big, 66.0 | 66.0 |
| existingDocumentId | String | Identifier of the existing content document if a document is already generated and is available to view. | Big, 66.0 | 66.0 |
| recordId | String | Identifier of the source record the document is generated for. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "details": {
    "documentEntityId": "1BBSM00000003KT4AY",
    "documentGenerationProcessId": "0nnSM00000009jFYAQ",
    "documentTitle": "DOC-000000197",
    "existingDocumentId": "069SM000002PYQLYA4",
    "recordId": "3ttSM0000000o58YAA",
    "documentTemplateId": "0694x000000XyzABC"
  }
}
```
