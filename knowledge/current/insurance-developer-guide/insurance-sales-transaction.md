---
title: "Insurance Sales Transaction"
domain: insurance-developer-guide
topic: insurance-sales-transaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.684Z
estimatedTokens: 178
keywords: [Insurance, Sales, Transaction, Output, representation]
---

# Insurance Sales Transaction

> Output representation for the insurance sales transaction.

# Insurance Sales Transaction

Output representation for the insurance sales transaction.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| appUsageAssignments | Insurance App Usage Assignment[] | Application context for a sales transaction record. | Small, 66.0 | 66.0 |
| fields | Map<String, Object> | A key-value map that represents sales transaction record. | Small, 66.0 | 66.0 |
| salesTransactionItems | Insurance Sales Transaction Items[] | List of individual line items that are associated with the sales transaction. In the default context definition, a sales transaction item represents a quote line item. | Small, 66.0 | 66.0 |

## Related Topics

- Insurance App Usage Assignment (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_app_usage_assignment_output.htm)
- Insurance Sales Transaction Items (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_s_t_i_output.htm)
