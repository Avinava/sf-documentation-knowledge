---
title: "Merge Customer Account with Status Output"
domain: life-sciences-dev-guide
topic: merge-customer-account-with-status-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.845Z
estimatedTokens: 228
keywords: [Merge, Customer, Account, Status, Output]
---

# Merge Customer Account with Status Output

> The response body for the merge customer account with status request.

# Merge Customer Account with Status Output

The response body for the merge customer account with status request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | A code that represents the status of the operation. | Small, 65.0 | 65.0 |
| success | Boolean | Indicates whether the operation was successful. | Small, 65.0 | 65.0 |
| message | String | A message related to the status of the operation. | Small, 65.0 | 65.0 |
| jobId | String | ID of the asynchronous job created to process the requests. | Small, 65.0 | 65.0 |
| accepted | String[] | A list of the Consolidated Account IDs for which the merge request was successfully accepted for processing. | Small, 65.0 | 65.0 |
| rejected | RejectedMergeRequest[] | A list of merge requests that were rejected due to invalid input. |  | 65.0 |

## Code Examples

```
{
  "code": "",
  "success": true,
  "message": "",
  "jobId": "01pxx000001T7QxxAK",
  "accepted": [
    "a3Lxx000000MbzxxAC",
    "a3Lxx000000MbzxxBC"
  ],
  "rejected": [
    {
      "winningId": "001xx00001STZUxxTR",
      "winningExternalIdField": null,
      "losingId": "001xx00001SYtgxxUI",
      "losingExternalIdField": null,
      "errorMessage": "Unable to find the Account with salesforce id 001xx00001STZVxxAS."
    }
  ]
}
```

## Related Topics

- RejectedMergeRequest (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_response_rejected_merge_request_representation.htm)
