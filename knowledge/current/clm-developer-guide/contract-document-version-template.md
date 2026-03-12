---
title: "Contract Document Version Template"
domain: clm-developer-guide
topic: contract-document-version-template
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.370Z
estimatedTokens: 278
keywords: [Contract, Document, Version, Template, Change]
---

# Contract Document Version Template

> Change the template in a contract document version.

# Contract Document Version Template

Change the template in a contract document version.

Resource

```

```

Available version

56.0

HTTP methods

PATCH

Example for PATCH

```

```

Request body for PATCH

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

Response body for PATCH

[Document Generate Representation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_generate.htm "Output Representation of document generation record.")

## Code Examples

```
/connect/clm/contract-document-version/${contractDocumentVersionId}
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/contract-document-version/${contractDocumentVersionId}
```

```
{
  "templateId": "2dtxx000000004rAAA",
  "isExternalReviewImport": false,
  "externalReviewType": "OnlineMicrosoft365"
}
```

## Related Topics

- Document Generate Representation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_generate.htm)
