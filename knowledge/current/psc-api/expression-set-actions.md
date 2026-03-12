---
title: "Expression Set Actions"
domain: psc-api
topic: expression-set-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.384Z
estimatedTokens: 436
keywords: [Expression, Actions, Invoke, active, user-defined, rule, accepts, input, output, configured, function, REST, HTTP, Inputs, Outputs]
---

# Expression Set Actions

> Invoke an active expression set. An expression set is a user-defined
      rule that accepts an input and returns the output based on the configured
    function.

# Expression Set Actions

Invoke an active expression set. An expression set is a user-defined rule that accepts an input and returns the output based on the configured function.

The configured function of an expression set can be a simple decision matrix lookup, a calculation based on a mathematical formula, a condition, or another expression set.

When a Flow is invoked using Batch management (for example, for processing 200 records), the calls to expression sets are automatically bulkified, which allows the execution of multiple inputs in a single request.

These actions are available in API version 55.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v55.0/actions/custom/runExpressionSet/{ApiName}

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

The API name of an expression set is unique within your Salesforce instance.

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

Vary depending on the selected expression set.

## Outputs

Vary depending on the inputs of the selected expression set.

## Usage

This section has the sample request and response for invoking an expression set with these steps.

1.  Find the tax percentage and the premium corresponding to specific age and salary using a decision matrix lookup.
2.  Check the age criterion to calculate the total tax.
3.  Calculate the total tax to be paid based on the age group, salary, and the tax percentage.

Sample request

Here’s an example POST request that has the inputs, such as, age and salary:

```

```

Sample response

Here’s an example response that has the premium and tax values based on the inputs provided in the example request:

```

```

## Code Examples

```
{
  "inputs": [
    {
      "Age": "25.00",
      "Salary": "50000.00"
    },
    {
      "Age": "30.00",
      "Salary": "70000.00"
    },
    {
      "Age": "40.00",
      "Salary": "90000.00"
    }
  ]
}
```

```
[
  {
    "actionName": "TaxPremiumES",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "TaxPremium__Premium": 1000,
      "TaxPremium__Tax": 10,
      "TaxToBePaid": 1050,
      "condition_output__2": "false",
      "condition_output__1": "true"
    }
  },
  {
    "actionName": "TaxPremiumES",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "TaxPremium__Premium": 1500,
      "TaxPremium__Tax": 12,
      "TaxToBePaid": 1512,
      "condition_output__2": "true",
      "condition_output__1": "false"
    }
  },
  {
    "actionName": "TaxPremiumES",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "TaxPremium__Premium": 2000,
      "TaxPremium__Tax": 15,
      "TaxToBePaid": 2015,
      "condition_output__2": "false",
      "condition_output__1": "true"
    }
  }
]
```
