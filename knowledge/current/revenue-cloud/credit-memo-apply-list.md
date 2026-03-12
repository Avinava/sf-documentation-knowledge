---
title: "Credit Memo Apply List"
domain: revenue-cloud
topic: credit-memo-apply-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.338Z
estimatedTokens: 88
keywords: [Credit, Memo, Apply, Output, representation, applied, results]
---

# Credit Memo Apply List

> Output representation of the list of applied credit memo results.

# Credit Memo Apply List

Output representation of the list of applied credit memo results.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applyCredit​Results | Credit Memo Apply[] | Output list of the applied credit memo results. | Big, 62.0 | 62.0 |

## Code Examples

```
{
  "applyCreditResults" : [ {
    "appliedToId" : "3ttxx000000003FAAQ",
    "errors" : null,
    "id" : "4sFxx00000002ppEAA",
    "success" : true
  }, {
    "appliedToId" : "3ttxx0000000001AAA",
    "errors" : null,
    "id" : "4sFxx00000002pqEAA",
    "success" : true
  } ]
}
```

## Related Topics

- Credit Memo Apply (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_apply_output.htm)
