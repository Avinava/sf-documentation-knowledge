---
title: "Suspend Billing Action"
domain: revenue-cloud
topic: suspend-billing-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:35:39.639Z
estimatedTokens: 381
keywords: [Inputs, Outputs, Suspend, Billing, Action, resume, account, handle, disputes, REST, HTTP]
---

> Suspend or resume the billing of an account to handle billing
            disputes.

# Suspend Billing Action

Suspend or resume the billing of an account to handle billing disputes.

Specify the account ID and a date when billing must be suspended. Optionally, specify the date when billing must be resumed. The action suspends billing for the account from the suspension date and, if provided, resumes billing on the resumption date.

This action is available in API version 66.0 and later.

## Special Access Rules

The Suspend Billing Action is available in Enterprise, Developer, and Unlimited Editions where Dispute Management is enabled in Billing.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/blngSvcSuspendBilling

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| accountId | TypestringDescriptionID of the account for which billing must be suspended. |
| resumptionDate | TypedateDescriptionDate when the billing must be resumed. |
| suspensionDate | TypedateDescriptionDate when the billing must be suspended. |

## Outputs

| Output | Details |
| --- | --- |
| additional​Information | TypestringDescriptionAny additional information to be included in the response. |
| isSuccess | TypebooleanDescriptionIndicates whether the billing related to the specified account was suspended (true) or not (false). The default value is false. |

## Example

POST

This sample request is for the Suspend Billing action.

```

```

This sample response is for the Suspend Billing action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "accountId": "001xx000003GYexAAG",
      "suspensionDate": "2025-03-01",
      "resumptionDate": "2025-03-15"
    }
  ]
}
```

```
[
  {
    "actionName": "blngSvcSuspendBilling",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "isSuccess": true,
      "additionalInformation": "{"status":"Billing suspended successfully"}"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
