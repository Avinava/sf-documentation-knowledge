---
title: "Transaction Journal Result"
domain: loyalty
topic: transaction-journal-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.687Z
estimatedTokens: 228
keywords: [Transaction, Journal, Result, Output, representation, journals]
---

# Transaction Journal Result

> Output representation of the transaction journals
    result.

# Transaction Journal Result

Output representation of the transaction journals result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorMessage | String | Specifies the error message if the process has no rules or if no process qualifies for the transaction journal. | Small, 55.0 | 55.0 |
| executionSummary | Summary | Represents the execution summary of the transaction journals. | Small, 55.0 | 55.0 |
| processId | String | The ID of the loyalty program process used to process the transaction journals. | Small, 55.0 | 55.0 |
| processName | String | The name of the loyalty program process used to process the transaction journals. | Small, 55.0 | 55.0 |
| processRules | Loyalty Program Process Rule[] | The list of rules defined in the loyalty program process used to process the transaction journals. | Small, 55.0 | 55.0 |

## Related Topics

- Summary (atlas.en-us.loyalty.meta/loyalty/connect_responses_summary.htm)
- Loyalty
                  Program Process Rule (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_program_process_rule.htm)
