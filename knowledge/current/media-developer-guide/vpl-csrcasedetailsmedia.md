---
title: "VPL-CSRCaseDetailsMedia"
domain: media-developer-guide
topic: vpl-csrcasedetailsmedia
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.202Z
estimatedTokens: 95
keywords: [VPL-CSRCaseDetailsMedia, Omnistudio, Data, Mapper, extracts, cases, registered, account, interaction, Sample, Input, Output]
---

# VPL-CSRCaseDetailsMedia

> This Omnistudio
    Data Mapper extracts the cases registered for the specified account or interaction
    ID.

# VPL-CSRCaseDetailsMedia

This Omnistudio Data Mapper extracts the cases registered for the specified account or interaction ID.

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

-   Workflow: Agent console. Cases Tab

    -   Integration Procedure: VPL\_CSRFetchcaseforAccounts

## Code Examples

```
{
    "InteractionId": "a1S4W000006A1ZyUAK"
}
```

```
{
  "Case": [
    {
      "Status": "New",
      "Owner": "Manju J",
      "CreatedBy": "Manju J",
      "CaseNumber": "00001037",
      "CaseId": "5004W00001ZmbhNQAR",
      "CaseDateOpened": "2020/12/21"
    },
    {
      "Status": "New",
      "Owner": "Manju J",
      "CreatedBy": "Manju J",
      "CaseNumber": "00001035",
      "CaseId": "5004W00001ZmZRXQA3",
      "CaseDateOpened": "2020/12/18"
    }
  ]
}
```
