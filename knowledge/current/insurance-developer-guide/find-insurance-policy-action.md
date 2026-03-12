---
title: "Find Insurance Policy Action"
domain: insurance-developer-guide
topic: find-insurance-policy-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.593Z
estimatedTokens: 374
keywords: [Insurance, Policy, Action, associated, commission, statement, line, item, matches, criteria, status, record, Special, Access, Rules]
---

# Find Insurance Policy Action

> Get the insurance policy associated with a commission statement line item that matches
  the specified criteria, and update the status of the commission statement line item
  record.

# Find Insurance Policy Action

Get the insurance policy associated with a commission statement line item that matches the specified criteria, and update the status of the commission statement line item record.

This action is available in API version 63.0 and later.

## Special Access Rules

The Find Insurance Policy action is available in Enterprise, Unlimited, and Developer Editions where where Financial Service Cloud and Insurance Brokerage are enabled. To use this action, you need Insurance Commission Management and Insurance Brokerage User permission sets.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/findInsurancePolicy

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
| matchingCriteriaPattern | TypeStringDescriptionString that identifies the corresponding insurance policy. |
| failureStatus | TypeStringDescriptionIndicates the status of the commission statement line item when the item's processing fails. |

## Outputs

| Output | Details |
| --- | --- |
| commissionStatementLineItem | TypesObjectDescriptionCommission statement line item record populated with the insurance policy ID. |

## Example

POST

This sample request is for the Find Insurance Policy action.

```

```

This is the sample response for the Find Insurance Policy action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "commissionStatementLineItemId": "1Atxx0000004DeaCAE",
	"matchingCriteriaPattern":"InsurancePolicyNumber:PolicyName AND InsurancePolicyEffectiveDate:EffectiveFromDate AND LineOfCoverage:LineOfCoverage AND ClientAccountName:NameInsured.Name"
    }
  ]
}
```

```
{
  "actionName": "findInsurancePolicy",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "commissionStatementLineItem": {
      "attributes": {
        "type": "CommissionStatementLineItem",
        "url": "/services/data/v64.0/sobjects/CommissionStatementLineItem/1Atxx0000004C92CAE"
      },
      "InsurancePolicyEffectiveDate": "2025-02-01",
      "LineOfCoverage": "Medical",
      "ReferenceRecordId": "0YTxx0000000001GAA",
      "InsurancePolicyNumber": "test",
      "Id": "1Atxx0000004C92CAE",
      "ClientAccountName": "test"
    }
  },
  "sortOrder": -1,
  "version": 1
 }
```
