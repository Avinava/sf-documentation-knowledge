---
title: "Document Clause Sets"
domain: clm-developer-guide
topic: document-clause-sets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.282Z
estimatedTokens: 230
keywords: [Document, Clause, per, filters]
---

# Document Clause Sets

> Get document clause sets as per specified filters.

# Document Clause Sets

Get document clause sets as per specified filters.

Resource

```

```

Example URI

```

```

Available version

57.0

HTTP methods

GET

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| category | String | The comma-separated category values used for filtering. | Required | 57.0 |
| defaultLanguage | String | The comma-separated language values used for filtering. | Required | 57.0 |
| name | String | The name of the clause set used for filtering. | Required | 57.0 |
| status | String | The comma-separated status values used for filtering. | Required | 57.0 |

Response body for GET

[Document Clause Set List Response](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_clause_set_list_respons.htm "Output representation for the list of document clause set.")

## Code Examples

```
/connect/clause-library/document-clause-sets
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/clause-library/document-clause-sets
```

## Related Topics

- Document Clause Set List Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_clause_set_list_respons.htm)
