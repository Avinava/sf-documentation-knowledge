---
title: "VPLS360_ticket"
domain: media-developer-guide
topic: vpls360ticket
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.255Z
estimatedTokens: 107
keywords: [VPLS360_ticket, Integration, Procedure, cases, associated, particular, account, VPLS360, _ticket, Sample, Input, Output, Calls]
---

# VPLS360_ticket

> This Integration Procedure shows details of the cases
    associated with a particular account.

# VPLS360\_ticket

This Integration Procedure shows details of the cases associated with a particular account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| userId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Support Page, Case Details

-   Components:

    -   LWC: vplS360SelfCareSupportDetails.js


## Calls

-   Data Mapper: FetchAccountMasterDetails

## Code Examples

```
{
    "userId": "0054W00000DUGcd"
}
```

```
{
  "Case": [
    {
      "Subject": "Testing",
      "Status": "New",
      "CreatedDate": "2020-12-21T06:53:59.000Z",
      "CaseNumber": "00001037"
    },
    {
      "Subject": "Unable to view channels",
      "Status": "New",
      "CreatedDate": "2020-12-18T13:24:55.000Z",
      "CaseNumber": "00001035"
    }
  ]
}
```
