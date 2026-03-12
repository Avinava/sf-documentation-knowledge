---
title: "Document Clause Fields"
domain: clm-developer-guide
topic: document-clause-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.277Z
estimatedTokens: 252
keywords: [Document, Clause, distinct, fieldName]
---

# Document Clause Fields

> Get distinct document clause values for a given fieldName
      parameter.

# Document Clause Fields

Get distinct document clause values for a given fieldName parameter.

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
| clauseSetId | String | The ID of the document clause set. | Required | 57.0 |
| fieldName | String | Specifies language and name. Value is case-sensitive.Possible values are:LanguageName | Required | 57.0 |
| language | String | The language for the clauseSetId parameter. | Required | 57.0 |
| name | String | The name for the clauseSetId parameter. | Required | 57.0 |
| status | String | Displays records based on the status. | Required | 57.0 |

Response body for GET

[Document Clause Fields Response](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_clause_fields_respons.htm "Output representation for the list of document clause fields.")

## Code Examples

```
/connect/clause-library/document-clauses/fields
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/clause-library/document-clauses/fields?clauseSetId={id}
```

## Related Topics

- Document Clause Fields Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_clause_fields_respons.htm)
