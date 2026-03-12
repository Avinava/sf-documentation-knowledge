---
title: "External Document Review (GET)"
domain: clm-developer-guide
topic: external-document-review-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.348Z
estimatedTokens: 168
keywords: [External, Document, Review, Retrieve, latest, contract, version]
---

# External Document Review (GET)

> Retrieve external document for review using latest contract document
    version.

# External Document Review (GET)

Retrieve external document for review using latest contract document version.

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
| contract​Document​VersionId | String | Record ID for the contract document version. | Required | 61.0 |

Response body for GET

[External Document Review CC](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_external_document_review_c_c.htm "Output representation for external document version review.")

## Code Examples

```
/connect/clm/cc/external-document
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/clm/cc/external-document?contractDocumentVersion=11nxx000001hOozAAE
```

## Related Topics

- External Document Review CC (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_external_document_review_c_c.htm)
