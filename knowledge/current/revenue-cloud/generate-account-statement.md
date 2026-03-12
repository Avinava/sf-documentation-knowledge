---
title: "Generate Account Statement"
domain: revenue-cloud
topic: generate-account-statement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.780Z
estimatedTokens: 706
keywords: [Generate, Account, Statement, Generates, comprehensive, account, statement, specified, transaction, history, balance, information., Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Generate Account Statement

> Generates a comprehensive account statement for a specified account
            with transaction history and balance information.

# Generate Account Statement

Generates a comprehensive account statement for a specified account with transaction history and balance information.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/generateStatementOfAccount

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| accountId | TypestringDescriptionRequired. ID of the account for which to generate the statement of account. |
| associatedAccountIds | TypestringDescriptionList of associated account IDs from hierarchy to include in the statement. You can specify a maximum of 50 accounts. |
| correlationId | TypestringDescriptionCorrelation ID that tracks messages related to the request. These messages are logged in Splunk by the different services involved in the request. If this ID isn’t specified, a random Universally Unique Identifier (UUID) is created. |
| documentTemplateId | TypestringDescriptionDocument template ID to use for PDF generation. If you don’t specify a value, the default account statement template is used. |
| shouldShowOpenBalancesOnly | TypebooleanDescriptionIndicates whether to show only accounts with non-zero balances (true) or complete transaction history within date range (false). |
| sortBy | TypestringDescriptionRequired. Criteria for sorting transactions. Valid values are:DateDue DateAmountBalanceThe default value is Date. |
| sortingOrder | TypestringDescriptionSort order for transactions. Valid values are:AscendingDescendingThe default value is Desc. |
| startDate | TypedateDescriptionRequired. The date from when the transaction history is to be considered in YYYY MM DD format. This parameter value is required when the shouldShowOpenBalancesOnly parameter value is false. The date must be within the last 90 days and can't be in the future. |
| transactionTypes | TypestringDescriptionList of transaction types to include in the statement. If you don’t specify a value or if it’s empty, all transaction types are included. Valid values are:AllInvoiceCreditMemoPaymentDebitMemoRefund |

## Outputs

| Output | Details |
| --- | --- |
| accountId | TypestringDescriptionID of the account for which to generate the account statement. |
| requestIdentifier | TypestringDescriptionUnique request identifier for tracking the async operation. |
| statusUrl | TypestringDescriptionURL that tracks the status of the request and retrieves the generated document. |
| templateId | TypestringDescriptionDocument template ID that’s used for PDF generation. |

## Example

POST

This example shows a sample request for the Generate Account Statement action.

```

```

This example shows a sample response for the Generate Account Statement action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "accountId": "001000000000001AAA",
      "shouldShowOpenBalancesOnly": false,
      "startDate": "2025-01-01",
      "transactionTypes": [
        "All"
      ],
      "sortBy": "Date",
      "sortingOrder": "Descending",
      "associatedAccountIds": [
        "001000000000002AAA",
        "001000000000003AAA"
      ],
      "documentTemplateId": "a0T000000000001AAA"
    }
  ]
}
```

```
{
  "accountId": "001AAC0001O5W9pYBF",
  "errors": [],
  "requestIdentifier": "3267407f-0c96-4b8a-a8e0-bb7a71c91a2f",
  "statusUrl": "16PAAC000008AIM",
  "success": true,
  "templateId": "2dtAAC000002oiIYBQ"
}
```
