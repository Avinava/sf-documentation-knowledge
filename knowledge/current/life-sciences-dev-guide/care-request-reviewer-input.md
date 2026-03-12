---
title: "Care Request Reviewer Input"
domain: life-sciences-dev-guide
topic: care-request-reviewer-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.224Z
estimatedTokens: 265
keywords: [Care, Reviewer, Input, general, item, drug, diagnosis, associated]
---

# Care Request Reviewer Input

> The general details of the care request, care request item, care
      request drug, or care diagnosis associated with the care request reviewer.

# Care Request Reviewer Input

The general details of the care request, care request item, care request drug, or care diagnosis associated with the care request reviewer.

Root XML tag

<careRequestReviewer>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentDocument | Content Document Input | The details of the content document. | No | 57.0 |
| id | String | The ID of the care request reviewer. | Yes | 52.0 |
| reviewDate | String | The date when the care request was reviewed. | No | 52.0 |
| reviewer | String | The name of the user who reviewed the care request. | Yes | 52.0 |
| reviewerNotes | String | The notes related to the review. | No | 52.0 |
| reviewerType | String | The type of the reviewer who reviewed the care request.Possible values are:Medical Director ReviewRegistered Nurse ReviewPhysician ReviewPeer Review | No | 52.0 |
| status | String | The status of the care request.Possible values are:ApprovedDeniedIn process | No | 52.0 |

## Code Examples

```
"careRequestReviewers": [{
   "reviewer": "0cmx0000000JP7WAAW",
   "reviewerType": "Registered Nurse Review",
   "status": "In process",
   "reviewDate": "2021-04-20T13:09:04.359Z",
   "reviewerNotes": "Care Request Review is In Process"
}]
```

## Related Topics

- Content Document Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_content_document_input.htm)
