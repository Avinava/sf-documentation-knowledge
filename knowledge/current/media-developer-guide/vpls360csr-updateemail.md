---
title: "vpls360Csr-UpdateEmail"
domain: media-developer-guide
topic: vpls360csr-updateemail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.316Z
estimatedTokens: 127
keywords: [vpls360Csr-UpdateEmail, Omnistudio, Data, Mapper, loads, updates, email, address, user, IDs, updated, records, Sample, Input, Output]
---

# vpls360Csr-UpdateEmail

> This Omnistudio Data Mapper loads or updates the email
    address of a user, and returns the IDs for the updated records.

# vpls360Csr-UpdateEmail

This Omnistudio Data Mapper loads or updates the email address of a user, and returns the IDs for the updated records.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ContactId | Required |
| Email | Required |
| EmailDetails | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console Personal Details

    -   Omniscript: vpls360csr\_UpdatePersonalDetails

        -   Integration Procedure: vpls360csr\_UpdatePersonalDetails

## Code Examples

```
{
  "ContactId": "0034W00002H1vyAQAR",
  "EmailDetails": {
    "Email": "WalterWinner@BB.com"
  }
}
```

```
1- User: 0054W00000DGUoNQAX
2- Contact: 0034W00002H1vyAQAR
```
