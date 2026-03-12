---
title: "Summary"
domain: loyalty
topic: summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.670Z
estimatedTokens: 153
keywords: [Summary, Output, representation, execution, transaction, journals]
---

# Summary

> Output representation of the execution summary of the transaction
      journals.

# Summary

Output representation of the execution summary of the transaction journals.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| pointsSummary | Points Summary[] | A summary of points that are debited from or credited to the points balance or the escrow points balance of the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |
| vouchersIssued​Count | Integer | The number of vouchers that are issued to the loyalty program member associated with the transaction journal. | Small, 55.0 | 55.0 |

## Related Topics

- Points
                Summary (atlas.en-us.loyalty.meta/loyalty/connect_responses_points_summary.htm)
