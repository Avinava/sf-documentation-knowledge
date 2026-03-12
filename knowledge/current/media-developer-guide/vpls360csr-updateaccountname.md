---
title: "vpls360csr-UpdateAccountName"
domain: media-developer-guide
topic: vpls360csr-updateaccountname
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.308Z
estimatedTokens: 147
keywords: [vpls360csr-UpdateAccountName, Omnistudio, Data, Mapper, loads, updates, user, IDs, updated, records, Sample, Input, Output]
---

# vpls360csr-UpdateAccountName

> This Omnistudio Data Mapper loads or updates the first name
    and last name of a user, and returns the IDs for the updated records.

# vpls360csr-UpdateAccountName

This Omnistudio Data Mapper loads or updates the first name and last name of a user, and returns the IDs for the updated records.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ContactId | Required |
| FirstName | Required |
| LastName | Required |
| NameDetails | Required |
| Salutation | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console Personal Details

    -   Omniscript: vpls360csr\_UpdatePersonalDetails

        -   Integration Procedure: vpls360csr\_UpdatePersonalDetails


Data Map

## Code Examples

```
{
  "ContactId": "0034W00002H1vyAQAR",
  "NameDetails": {
    "FirstName": "WalterWin",
    "LastName": "White",
    "Salutation": "Mr."
  }
}
```

```
1- User: 0054W00000DGUoNQAX
2- Account: 0014W000029kBVyQAM
3- Contact: 0034W00002H1vyAQAR
```
