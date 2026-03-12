---
title: "Document Clause Set List Response"
domain: clm-developer-guide
topic: document-clause-set-list-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.439Z
estimatedTokens: 88
keywords: [Document, Clause, Output, representation]
---

# Document Clause Set List Response

> Output representation for the list of document clause
    set.

# Document Clause Set List Response

Output representation for the list of document clause set.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| documentClauseSets | Document Clause Set Response[] | The list of document clause set. | Small, 57.0 | 57.0 |

## Code Examples

```
{
  "documentClauseSets": [
    {
      "id": "123",
      "name": "Governing Law",
      "category": "00x40Axgdg0538F",
      "categoryName": "Confidential",
      "defaultLanguage": "English",
      "status": "Active"
    },
    {
      "id": "124",
      "name": "Governing Market Place",
      "category": "00x40Axgdg0538F",
      "categoryName": "Confidential",
      "defaultLanguage": "English",
      "status": "Active"
    }
  ]
}
```

## Related Topics

- Document Clause Set Response[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_clause_set_respons.htm)
