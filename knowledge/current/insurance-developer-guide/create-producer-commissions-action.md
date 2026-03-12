---
title: "Create Producer Commissions Action"
domain: insurance-developer-guide
topic: create-producer-commissions-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.560Z
estimatedTokens: 434
keywords: [Producer, Commissions, Action, records, producers, receive, insurance, policy, associated, commission, statement, line, item, record, status]
---

# Create Producer Commissions Action

> Create records for the commissions that producers receive for the insurance policy
  associated with the specified commission statement line item, and update the commission statement
  line item record status.

# Create Producer Commissions Action

Create records for the commissions that producers receive for the insurance policy associated with the specified commission statement line item, and update the commission statement line item record status.

This action is available in API version 63.0 and later.

## Special Access Rules

The Create Producer Commissions action is available in Enterprise, Unlimited, and Developer Editions where where Financial Service Cloud and Insurance Brokerage are enabled. To use this action, you need Insurance Commission Management and Insurance Brokerage User permission sets.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createProducerCommissions

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| producerCommissions | TypesObjectDescriptionA collection of computed producer commission records to be created. |
| commissionStatementLineItemId | TypeStringDescriptionID of the commission statement line item record. |
| successStatus | TypeStringDescriptionThe status that the associated commission statement line item is set to when the producer commission record is created. |
| failureStatus | TypeStringDescriptionThe status that the associated commission statement line item is set to when the producer commission record isn't created. |

## Outputs

| Output | Details |
| --- | --- |
| producerCommissionIds | TypeStringDescriptionA collection of IDs of the producer commission records that are created. |

## Example

POST

This sample request is for the Create Producer Commissions action.

```

```

This is the sample response for the Create Producer Commissions action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "commissionStatementLineItemId": "1Atxx0000004DeaCAE",
      "producerCommissions": [
        {
          "CommissionAmount": 3000,
          "InsurancePolicyId": "0YTxx00000002BVGAY",
          "ProducerId": "0Yxxx00000001IfCAI",
          "ProducerSplitArngLineItemId" : "1BHxx0000004CXEGA2",
          "CommissionStatementLineItemId": "1Atxx0000004DeaCAE",
          "Name": "Sanjeev"
        },
        {
          "InsurancePolicyId": "0YTxx00000002BVGAY",
          "ProducerId": "0Yxxx00000001KHCAY",
          "ProducerSplitArngLineItemId" : "1BHxx0000004CXEGA2",
          "CommissionStatementLineItemId": "1Atxx0000004DeaCAE",
          "Name": "Deepak"
        }
      ]
    }
  ]
}
```

```
[
  {
    "actionName": "createProducerCommissions",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "producerCommissionIds": [
        "0kAxx0000000001"
      ]
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
