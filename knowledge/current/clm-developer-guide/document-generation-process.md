---
title: "Document Generation Process"
domain: clm-developer-guide
topic: document-generation-process
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.264Z
estimatedTokens: 172
keywords: [Document, Generation, Process, status, contract, version]
---

# Document Generation Process

> Get the status of document generation process for a given contract
      document version ID.

# Document Generation Process

Get the status of document generation process for a given contract document version ID.

Resource

```

```

Available version

56.0

HTTP methods

GET

Example for GET

```

```

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contractDocument​VersionId | String | ID of the contract document version. | Required | 56.0 |

Response body for GET

[Document Generation ​Process Status Representation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_generation_process_status.htm "Status of the document generation process.")

## Code Examples

```
/connect/clm/document-generation-process/status
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/document-generation-process/status?contractDocumentVersionId=<contractDocumentVersionId>
```

## Related Topics

- Document Generation ​Process Status
            Representation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_generation_process_status.htm)
