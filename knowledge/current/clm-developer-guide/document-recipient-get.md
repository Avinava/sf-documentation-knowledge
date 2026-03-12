---
title: "Document Recipient (GET)"
domain: clm-developer-guide
topic: document-recipient-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.285Z
estimatedTokens: 181
keywords: [Document, Recipient, Fetch, status, contract, versions, monitor, e-signature, progress, identify, decline, reasons]
---

# Document Recipient (GET)

> Fetch recipient status for contract document
      versions to monitor e-signature progress and identify decline reasons.

# Document Recipient (GET)

Fetch recipient status for contract document versions to monitor e-signature progress and identify decline reasons.

Resource

```

```

Example

```

```

Available version

61.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contract​Document​VersionId | String | Record ID of the contract document version. | Required | 61.0 |

Response body for GET

[Document Recipient Status](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_recipient_status_c_c.htm "Output representation of recipient status and sequence information for the signers.")

## Code Examples

```
/connect/clm/cc/documentRecipient
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/clm/cc/documentRecipient?contractDocumentVersion=11nxx000001hOozAAE
```

## Related Topics

- Document Recipient Status (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_recipient_status_c_c.htm)
