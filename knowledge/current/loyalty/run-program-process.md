---
title: "Run Program Process"
domain: loyalty
topic: run-program-process
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.037Z
estimatedTokens: 554
keywords: [Run, Program, Process, action, custom, actions, associated, loyalty, processes, trigger, active, corresponding, invocable, REST, HTTP]
---

# Run Program Process

> This action lists custom actions associated with all the available
      loyalty program processes. You can trigger an active loyalty program process using its
      corresponding custom invocable action.

# Run Program Process

This action lists custom actions associated with all the available loyalty program processes. You can trigger an active loyalty program process using its corresponding custom invocable action.

This action is available in API version 56.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v56.0/actions/custom/runProgramProcess/<actionName>

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

<actionname> is the name of the custom action associated with an active loyalty program process. The custom action name consists of the name of the loyalty program that the process belongs to followed by a delimiter, and then the name of the process. The delimiter is SLI. The program name, the delimiter, and the process name are seperated by underscores. If your loyalty program and process names have spaces, the spaces are replaced with underscores.

If the name of your loyalty program is InnerCircle and process name is Issue Voucher, then the action name is InnerCircle\_SLI\_Issue\_Voucher. If the name of your loyalty program is Inner Circle and process name is IssueVoucher, then the action name is Inner\_Circle\_SLI\_IssueVoucher.

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

Vary depending on the Loyalty Program Process setup action.

## Outputs

Standard invocable action result parameters, such as isSuccess and errors along with other parameters that vary depending on the inputs.

| Output | Details |
| --- | --- |
| errors | TypeList<String>DescriptionA list of error messages if the operation fails. |
| isSuccess | TypeBooleanDescriptionIndicates whether the operation is successful or not. |

## Examples

This section has the sample request and response for triggering the Credit Points Program Process.

Sample Resource

/services/data/v56.0/actions/custom/runProgramProcess/NTO\_SLI\_CreditPoints

Sample request

Here’s an example POST request that has the inputs, such as, Loyalty Program member ID, points to credit, and other transaction details:

```

```

Sample response

Here’s an example response of a successful credit points program operation:

```

```

## Code Examples

```
{
  "inputs": [
    {
      "TransactionJournal": {
        "ActivityDate": "2022-11-27T00:00:00Z",
        "BookingDate": "2022-10-23",
        "EndDate": "2022-10-23T00:00:00Z",
        "ExternalTransactionNumber": "1",
        "InvoiceDate": "2022-10-23",
        "JournalTypeName": "Accrual",
        "JournalSubTypeName": "xyz",
        "LoyaltyProgramId": "0lpRM0000004D53YAE",
        "MemberId": "0lMRM0000004Eqv2AE",
        "TransactionAmount": 45,
        "Status": "Processed"
      },
      "PointsToCredit": "100"
    }
  ]
}
```

```
{
  "actionName": "NTO_SLI_CreditPoints",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "PointsCredited": 100
  }
}
```
