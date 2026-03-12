---
title: "External Document Review CC"
domain: clm-developer-guide
topic: external-document-review-cc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.506Z
estimatedTokens: 199
keywords: [External, Document, Review, Output, representation, version]
---

# External Document Review CC

> Output representation for external document version review.

# External Document Review CC

Output representation for external document version review.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| content​VersionId | String | Record ID of content version associated with an external document. | Small, 61.0 | 61.0 |
| contract​Document​VersionId | String | Record ID of the contract document version. | Small, 61.0 | 61.0 |
| external​DocumentId | String | Record ID of the external document. | Small, 61.0 | 61.0 |
| isReview​Completed​ByCurrentUser | Boolean | Indicates whether the current user has completed the review for the document (true) or not (false). | Small, 61.0 | 61.0 |
| url | String | URL of the external document. | Big, 61.0 | 61.0 |

## Code Examples

```
{
  "contentVersionId": "11RSB0000008rQX2AY",
  "externalDocumentId": "11nSB000001as69YAA",
  "contractDocumentVersionId": "a3k5g000000QyRSAA0",
  "url": "https://www.salesforce.com",
  "isReviewCompletedByCurrentUser": "true"
}
```
