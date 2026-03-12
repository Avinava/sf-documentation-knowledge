---
title: "Customer Account Merge Output"
domain: life-sciences-dev-guide
topic: customer-account-merge-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.842Z
estimatedTokens: 201
keywords: [Customer, Account, Merge, Output, representation, successful, operation]
---

# Customer Account Merge Output

> Output representation of the response for a successful account merge
        operation.

# Customer Account Merge Output

Output representation of the response for a successful account merge operation.

JSON example

{ "code": "", "success": true, "message": "", "mergedAccountIds": \[ { "accountId": "001xx000002kl8xxFV" }, { "accountId": "001xx000003mn9xxGW" } \] }

| Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Code that represents the status of the operation. | Small, 65.0 | 65.0 |
| merged​AccountIds | String[] | List of the Consolidated Account IDs that were successfully merged. | Small, 65.0 | 65.0 |
| message | String | Message related to the status of the operation. | Small, 65.0 | 65.0 |
| success | Boolean | Indicates whether the entire merge operation was successful. | Small, 65.0 | 65.0 |
