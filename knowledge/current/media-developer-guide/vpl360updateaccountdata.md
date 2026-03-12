---
title: "VPL360UpdateAccountData"
domain: media-developer-guide
topic: vpl360updateaccountdata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.192Z
estimatedTokens: 169
keywords: [VPL360UpdateAccountData, Omnistudio, Data, Mapper, loads, updates, account, contact, IDs, updated, records, Sample, Input, Output]
---

# VPL360UpdateAccountData

> This Omnistudio Data Mapper loads or updates the account and
    contact details, and returns the IDs of the updated records.

# VPL360UpdateAccountData

This Omnistudio Data Mapper loads or updates the account and contact details, and returns the IDs of the updated records.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| accountId | Required |
| billing | Required |
| city | Required |
| contactId | Required |
| country | Required |
| customerName | Required |
| phone | Required |
| postalCode | Required |
| shipping | Required |
| state | Required |
| street | Required |

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
  "billing": {
    "city": "abc",
    "country": "abc",
    "postalCode": 123123,
    "state": "abc",
    "street": "abc"
  },
  "contactId": "0034W00002KWZBwQAP",
  "phone": 1231231231,
  "shipping": {
    "city": "abc",
    "country": "abc",
    "customerName": "abc",
    "postalCode": 123123,
    "state": "abc",
    "street": "abc"
  }
}
```

```
1- Contact: 0034W00002KWZBwQAP
2- Account: 0014W00002BvqD1QAJ
```
