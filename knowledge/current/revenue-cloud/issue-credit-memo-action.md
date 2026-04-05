---
title: "Issue Credit Memo Action"
domain: revenue-cloud
topic: issue-credit-memo-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-05T00:23:11.423Z
estimatedTokens: 418
keywords: [Issue, Credit, Memo, Action, memos, disputed, invoices, resolve, billing, disputes, Special, Access, Rules, REST, HTTP]
---

# Issue Credit Memo Action

> Issue credit memos for disputed invoices to resolve billing
            disputes.

# Issue Credit Memo Action

Issue credit memos for disputed invoices to resolve billing disputes.

Specify the credit request list to automate the creation of credit memos during the dispute resolution process. The credit request list includes the invoice ID, the total credit amount, an optional description, and a detailed list of specific invoice lines with their corresponding credit amounts.

This action is available in API version 66.0 and later.

## Special Access Rules

The Issue Credit Memo Action is available in Enterprise, Developer, and Unlimited Editions where Dispute Management is enabled in Billing.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/blngDsptIssueCreditMemo

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| creditRequest​List | TypeApex-definedDescriptionList of Apex-defined creditRequestInputRepresentations objects that contains the invoice ID, credit amount, description, and a list of creditLineRequestInputRepresentations objects. The creditLineRequestInputRepresentations objects include the invoice line ID, credit line amount, and a description. See CreditLineRequestInputRepresentations Apex class. |

## Outputs

| Output | Details |
| --- | --- |
| creditResponse | TypeApex-definedDescriptionAn Apex-defined creditResponseOutputRepresentations object that contains the status and any additional information.See CreditResponseOutputRepresentations Apex class. |

## Example

POST

This sample request is for the Issue Credit Memo action.

```

```

This sample response is for the Issue Credit Memo action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "creditRequestList": [
        {
          "invoiceId": "801xx000003GYexAAG",
          "creditAmount": 100,
          "description": "Credit for disputed charges",
          "creditLineRequestInputRepresentations": [
            {
              "invoiceLineId": "801xx000003GYeyAAG",
              "creditLineAmount": 50,
              "description": "Line-level credit"
            }
          ]
        }
      ]
    }
  ]
}
```

```
[
  {
    "actionName": "blngDsptIssueCreditMemo",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "creditResponse": {
        "success": true,
        "message": "Credit memo issued successfully"
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
