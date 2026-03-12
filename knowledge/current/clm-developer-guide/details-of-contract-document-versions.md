---
title: "Details of Contract Document Versions"
domain: clm-developer-guide
topic: details-of-contract-document-versions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.260Z
estimatedTokens: 343
keywords: [Contract, Document, Versions]
---

# Details of Contract Document Versions

> Get and create contract document versions.

# Details of Contract Document Versions

Get and create contract document versions.

Resource

```

```

Available version

56.0

HTTP methods

GET, POST

Example for GET

```

```

```

```

Example for POST

```

```

Response body for GET

[Contract Document Versions List Representation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_contract_document_versions_list.htm "Contract document versions record list.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| external​Review​Type | String | Type of external review. Possible values are:OnlineMicrosoft365OfflineMicrosoftWord | Optional | 60.0 |
| isExternal​Review​Import | Boolean | Indicates whether the checkout is for an external review import (true) or not (false). | Optional | 59.0 |
| pdf​Document​Id | String | ID for Contract PDF document. | Optional | 56.0 |
| templateId | String | Template ID with key prefix 2dt used to generate document. | Required | 56.0 |
| word​Document​Id | String | ID for Contract word document. | Optional | 56.0 |

Response body for POST

[Document Generate Representation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_generate.htm "Output Representation of document generation record.")

## Code Examples

```
/connect/clm/contract/${contractId}/contract-document-version
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/contract/${contractId}/contract-document-version
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/contract/${contractId}/contract-document-version?contractDocumentVersionId=${contractDocumentVersionId}
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/contract/{contractId}/contract-document-version
```

```
{
  "templateId": "2dtxx000000004rAAA",
  "isExternalReviewImport": false,
  "externalReviewType": "OnlineMicrosoft365"
}
```

## Related Topics

- Contract Document Versions List Representation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_contract_document_versions_list.htm)
- Document Generate Representation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_generate.htm)
