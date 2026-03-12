---
title: "Care Request Reviewer Output"
domain: life-sciences-dev-guide
topic: care-request-reviewer-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.737Z
estimatedTokens: 240
keywords: [Care, Reviewer, Output, representation]
---

# Care Request Reviewer Output

> Output representation of the care request reviewer.

# Care Request Reviewer Output

Output representation of the care request reviewer.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contentDocument | Content Document Output | The details of the content document. | Big, 57.0 | 57.0 |
| id | String | The ID of the care request reviewer. | Big, 52.0 | 52.0 |
| reviewDate | String | The date when the care request was reviewed. | Big, 52.0 | 52.0 |
| reviewer | String | The name of the user who reviewed the care request. | Big, 52.0 | 52.0 |
| reviewerNotes | String | The notes related to the review. | Big, 52.0 | 52.0 |
| reviewerType | String | The type of the reviewer who reviewed the care request.Possible values are:Medical Director ReviewRegistered Nurse ReviewPhysician ReviewPeer Review | Big, 52.0 | 52.0 |
| status | String | The status of the care request.Possible values are:ApprovedDeniedIn process | Big, 52.0 | 52.0 |

## Related Topics

- Content
                  Document Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_content_document_output.htm)
