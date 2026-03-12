---
title: "Manage Gift Transaction Designations Action"
domain: edu-cloud-dev-guide
topic: manage-gift-transaction-designations-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.672Z
estimatedTokens: 259
keywords: [Manage, Gift, Transaction, Designations, Action, Creates, manages, Designation, records, REST, HTTP, Inputs, Outputs]
---

# Manage Gift Transaction Designations Action

> Creates and manages Gift Transaction Designation records for a gift
      transaction.

# Manage Gift Transaction Designations Action

Creates and manages Gift Transaction Designation records for a gift transaction.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/manageGiftTrxnDesignations

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| giftTransactionDesignations | TypesObjectDescriptionRequired.A collection of Gift Transaction Designation record IDs that are to be modified or deleted. |
| recordId | TypeIDDescriptionRequired.The record for which the Gift Transaction Designation record is created. For example, Gift Transaction. |

## Outputs

None.

## Example

Here’s a request for the Manage Gift Transaction Designations action.

```

```

Here’s a response for the Manage Gift Transaction Designations action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "giftTransactionDesignations": [
        {
          "GiftDesignationId": "6gdRM0000004CDAYA2",
          "Percent": 100,
          "Amount": 76
        }
      ]
    }
  ],
  "recordId": "6trRM00000003PJYAY"
}
```

```
[
  {
    "actionName": "manageGiftTrxnDesignations",
    "errors": null,
    "isSuccess": true,
    "outputValues": null,
    "version": 1
  }
]
```
