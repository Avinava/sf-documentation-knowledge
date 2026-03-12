---
title: "Document Generate"
domain: clm-developer-guide
topic: document-generate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.446Z
estimatedTokens: 162
keywords: [Document, Generate, Output, Representation, generation, record]
---

# Document Generate

> Output Representation of document generation record.

# Document Generate

Output Representation of document generation record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contentDocuments | Document Response[] | List of generated content document details associated to the contract document version. | Big, 56.0 | 56.0 |
| contractDocument​VersionId | String | Record ID of contract document version. | Small, 56.0 | 56.0 |
| contractId | String | Record ID of contract. | Small, 56.0 | 56.0 |
| jobId | String | Job ID of generate document process en-queued after contract document version creation. | Small, 56.0 | 56.0 |

## Related Topics

- Document
                  Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_content_document.htm)
