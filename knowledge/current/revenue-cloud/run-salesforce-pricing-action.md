---
title: "Run Salesforce Pricing Action"
domain: revenue-cloud
topic: run-salesforce-pricing-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.141Z
estimatedTokens: 671
keywords: [Run, Salesforce, Pricing, Action, Invoke, Connect, API, providing, context, procedure, price, waterfall, Special, Access, Rules]
---

# Run Salesforce Pricing Action

> Invoke the Pricing Connect API by providing the context, pricing
			procedure, and price waterfall details.

# Run Salesforce Pricing Action

Invoke the Pricing Connect API by providing the context, pricing procedure, and price waterfall details.

This action is available in API version 60.0 and later. You can use this action with Flows only. To use this action with an API tool such as Postman, see [Run Salesforce Headless Pricing Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_run_salesforce_headless_pricing.htm "HTML (New Window)").

## Special Access Rules

The Run Salesforce Pricing action is available in Developer, Enterprise, and Unlimited Editions where Salesforce Pricing is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/runSalesforcePricing

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contextInstanceId | TypestringDescriptionRequired.ID of the context data that’s used to build the pricing procedure. Get the context instance ID by invoking the Context Service API. See Context Service (POST). |
| discoveryProcedure | TypestringDescriptionName of the discovery procedure that’s used to execute the discovery process of the pricing data. |
| effectiveDate | TypestringDescriptionDate when the pricing rules, as specified in the pricing procedure, are applied.The effectiveDate parameter determines which pricing procedure to execute when multiple active versions of pricing procedures are available with different date ranges. |
| isDeveloperName | TypebooleanDescriptionIndicates whether the input value in a procedure must use the API name of the pricing (true) or the field name (false). |
| isSkipWaterfall | TypebooleanDescriptionIndicates whether the price waterfall data must be generated (true) or not (false). |
| pricingProcedureName | TypestringDescriptionRequired.Name of the pricing procedure record that’s used to execute the pricing process. |
| skipDiscovery | TypebooleanDescriptionIndicates whether to skip executing the discovery procedure (true) or not (false). |

## Outputs

| Output | Details |
| --- | --- |
| executionId | TypestringDescriptionID of the executed pricing data. |

## Example

POST

This sample request is for the Run Salesforce Pricing action.

```

```

This sample response is for the Run Salesforce Pricing action.

```

```

#### See Also

-   [Salesforce Help: Invoke Salesforce Pricing in a Flow](https://help.salesforce.com/s/articleView?id=ind.pricing_invoke_salesforce_pricing_flow.htm&type=5&language=en_US "Salesforce Help: Invoke Salesforce Pricing in a Flow - HTML (New Window)")

## Code Examples

```
{
  "inputs": [
    {
      "contextInstanceId": "32f2c894-ba5e-41c0-91e4-2ab5826f579b",
      "pricingProcedureName": "PricingAction",
      "isSkipWaterfall": false,
      "skipDiscovery": false,
      "isDeveloperName": true,
      "effectiveDate": "2023-11-16T12:20:00.000Z",
      "discoveryProcedure": "ES1"
    }
  ]
}
```

```
{
  "actionName": "runSalesforcePricing",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "executionId": "2QTurzG2NRQ5bgrjvvqyh"
  },
  "version": 1
}
```
