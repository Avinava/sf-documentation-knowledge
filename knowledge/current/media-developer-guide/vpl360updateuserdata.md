---
title: "VPL360_UpdateUserData"
domain: media-developer-guide
topic: vpl360updateuserdata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.936Z
estimatedTokens: 135
keywords: [VPL360_UpdateUserData, Omnistudio, Data, Mapper, loads, updates, user, IDs, updated, records, VPL360, _UpdateUserData, Sample, Input, Output]
---

# VPL360_UpdateUserData

> This Omnistudio Data Mapper loads or updates user details
    and returns the IDs of the updated records.

# VPL360\_UpdateUserData

This Omnistudio Data Mapper loads or updates user details and returns the IDs of the updated records.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| accountId | Required |
| contactId | Required |
| email | Required |
| firstName | Required |
| lastName | Required |
| userId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Self care Account Update

    -   LWC: vplS360SelfCareAccountDetails.js

        -   Integration Procedure: VPL360\_UpdateAccountDetails

## Code Examples

```
{
  "accountId": "0014W00002BvqD1QAJ",
  "contactId": "0034W00002KWZBwQAP",
  "email": "jhn@test.com",
  "firstName": "Jhonny",
  "lastName": "Villiers",
  "userId": "0054W00000DUQ68"
}
```

```
1- Contact: 0034W00002KWZBwQAP
2- Account: 0014W00002BvqD1QAJ
3- User: 0054W00000DUQ68QAH
```
