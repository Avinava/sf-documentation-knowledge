---
title: "VPL_CSRFetchcaseforAccounts"
domain: media-developer-guide
topic: vplcsrfetchcaseforaccounts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.205Z
estimatedTokens: 96
keywords: [VPL_CSRFetchcaseforAccounts, Integration, Procedure, fetches, cases, registered, agent, console, particular, customer, VPL, _CSRFetchcaseforAccounts, Sample, Input, Output]
---

# VPL_CSRFetchcaseforAccounts

> This Integration Procedure fetches the cases registered in
    the agent console for a particular customer.

# VPL\_CSRFetchcaseforAccounts

This Integration Procedure fetches the cases registered in the agent console for a particular customer.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| InteractionId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Cases tab.


## Calls

-   Data Mapper: VPL-CSRCaseDetailsMedia

## Code Examples

```
{
    "InteractionId": "a1S4W000006A1fIUAS"
}
```

```
{
  "GetCaseSummary": [
    {
      "Status": "New",
      "Owner": "Manju J",
      "CreatedBy": "Manju J",
      "CaseNumber": "00001036",
      "CaseId": "5004W00001ZmZQuQAN",
      "CaseDateOpened": "2020/12/18"
    }
  ]
}
```
