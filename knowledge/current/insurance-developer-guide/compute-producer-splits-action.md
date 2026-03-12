---
title: "Compute Producer Splits Action"
domain: insurance-developer-guide
topic: compute-producer-splits-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.504Z
estimatedTokens: 295
keywords: [Compute, Producer, Splits, Action, producers, associated, Insurance, Policy, Commission, Statement, Line, Item, Special, Access, Rules]
---

# Compute Producer Splits Action

> Compute the producer splits for the producers associated with an Insurance Policy, for a
  Commission Statement Line Item.

# Compute Producer Splits Action

Compute the producer splits for the producers associated with an Insurance Policy, for a Commission Statement Line Item.

This action is available in API version 63.0 and later.

## Special Access Rules

The Compute Producer Splits action is available in Enterprise, Unlimited, and Developer Editions where where Financial Service Cloud and Insurance Brokerage are enabled. To use this action, you need Insurance Commission Management and Insurance Brokerage User permission sets.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/computeProducerSplits

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| commissionStatementLineItemId | TypeStringDescriptionID of the commission statement line item record. |

## Outputs

| Output | Details |
| --- | --- |
| producerCommissions | TypesObjectDescriptionCollection of producer commission records that are computed. |

## Example

POST

This sample request is for the Compute Producer Splits action.

```

```

This is the sample response for the Compute Producer Splits action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "commissionStatementLineItemId": "1Atxx0000004DeaCAE"
    }
  ]
}
```

```
[
  {
    "actionName": "computeProducerSplits",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "producerCommissions": [
        {
          "attributes": {
            "type": "ProducerCommission"
          },
          "CommissionStatementLineItemId": "1Atxx0000004C92CAE",
          "ProducerSplitAssignmentId": "1AIxx0000004C92GAE",
          "CommissionAmount": 4000,
          "InsurancePolicyId": "0YTxx0000000001GAA",
          "ProducerId": "0Yxxx0000000001CAA",
          "ProducerSplitArngLineItemId": "1BHxx0000004C92GAE",
          "Name": "CSLI-0000000001-Amol-Commission"
        }
      ]
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
