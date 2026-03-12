---
title: "Generate Account Statement (POST)"
domain: revenue-cloud
topic: generate-account-statement-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.636Z
estimatedTokens: 543
keywords: [Generate, Account, Statement, POST, comprehensive, financial, statements, transaction, history, balance]
---

# Generate Account Statement (POST)

> Generate comprehensive financial statements with transaction history
      and balance information.

# Generate Account Statement (POST)

Generate comprehensive financial statements with transaction history and balance information.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| associatedAccountIds | String[] | List of associated account IDs from hierarchy to include in the statement. You can specify up to 50 accounts. | Optional | 66.0 |
| correlationId | String | Correlation ID for tracking the request across systems. | Optional | 66.0 |
| documentTemplateId | String | Document template ID to use for PDF generation. If you don’t specify a value, the system auto-resolves by using the default template. | Optional | 66.0 |
| shouldShowOpenBalancesOnly | Boolean | Indicates whether to show open balances only (true) or not (false). If set to true, the API shows only accounts with non-zero balances. If set to false, this API shows complete transaction history within the date range from the start date. | Optional | 66.0 |
| sortBy | String | Criteria for sorting transactions. Valid values are:DateDueDateAmountBalanceThe default value is Date. | Optional | 66.0 |
| sortingOrder | String | Sort order for transactions. Valid values are:AscendingDescendingThe default value is Descending. | Optional | 66.0 |
| startDate | String | Start date for the transaction history. The required format is YYYY-MM-DD. The system processes records up to 90 days from this date. | Required | 66.0 |
| transactionTypes | String[] | List of transaction types to include in the statement. If you don’t specify a value or the value is empty, all transaction types are included. Valid values are:AllCreditMemoDebitMemoInvoicePaymentRefund | Optional | 66.0 |

Response body for POST

[Account Statement Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_statement_of_account_output.htm "Output representation of the details of the generated statement of account with async tracking details.")

## Code Examples

```
/revenue/billing/accounts/accountId/statement
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/billing/accounts/accountId/statement
```

```
{
  "shouldShowOpenBalancesOnly": false,
  "startDate": "2025-09-01",
  "transactionTypes": {
    "transactionTypes": [
      "Invoice"
    ]
  },
  "sortBy": "DueDate",
  "sortingOrder": "Ascending",
  "associatedAccountIds": {
    "associatedAccountIds": [
      "001xx000003DGb5AAG",
      "001xx000003DGb6AAG"
    ]
  },
  "documentTemplateId": "0TRxx000000002YGAQ",
  "correlationId": "monthly-statement-sept-2025"
}
```

## Related Topics

- Account Statement
              Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_statement_of_account_output.htm)
