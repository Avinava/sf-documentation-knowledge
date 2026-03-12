---
title: "Billing Arrangement Line"
domain: revenue-cloud
topic: billing-arrangement-line
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.374Z
estimatedTokens: 229
keywords: [Billing, Arrangement, Line, Output, representation, contains, details, specific, line, item, within, billing, arrangement, defining, how, charges, split, account.]
---

# Billing Arrangement Line

> Output representation that contains the details of a specific line item within a billing
    arrangement, defining how charges are split for an account.

# Billing Arrangement Line

Output representation that contains the details of a specific line item within a billing arrangement, defining how charges are split for an account.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account associated with the billing line. | Big, 66.0 | 66.0 |
| billing​AccountId | String | ID of the billing account responsible for this portion of the bill. | Big, 66.0 | 66.0 |
| billingArrangement​LineId | String | Unique ID of the billing arrangement line. | Big, 66.0 | 66.0 |
| isRemainder​AdjustmentAccount | Boolean | Indicates whether the specific line is designated as the adjustment account for any remainder (true) or not (false). | Big, 66.0 | 66.0 |
| percentage | Double | Percentage of the charge allocated to this line. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "billingArrangementLineId": "1blxx000000006TAAQ",
  "accountId": "accId1",
  "billingAccountId": "bAccId1",
  "isRemainderAdjustmentAccount": false,
  "percentage": 60.00
}
```
