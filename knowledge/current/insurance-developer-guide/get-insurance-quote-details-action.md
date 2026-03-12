---
title: "Get Insurance Quote Details Action"
domain: insurance-developer-guide
topic: get-insurance-quote-details-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.687Z
estimatedTokens: 240
keywords: [Insurance, Quote, Action, REST, HTTP, Inputs, Outputs]
---

# Get Insurance Quote Details Action

> Get the details of an insurance quote.

# Get Insurance Quote Details Action

Get the details of an insurance quote.

This action is available in API version 63.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getInsuranceQuoteDetails

Formats

JSON

HTTP Methods

GET, POST

Authentication

Bearer Token

## Inputs

| Input | Details |
| --- | --- |
| quoteId | TypeStringDescriptionRequired. ID of the insurance quote to get the details for. |
| filters | TypeStringDescriptionOptional. The filters used to filter the insurance quote or line items associated with the insurance quote. |

## Outputs

| Output | Details |
| --- | --- |
| contextId | TypeStringDescriptionContext ID of the insurance quote that's created. |
| contextJson | TypeMap<String, Object>DescriptionList of insurance context details. |

## Example

Sample Request

```

```

This is a sample request to call this invocable action from Apex code.

```

```

Sample Response

```

```

## Code Examples

```
{
  "inputs": 
  [
      {
        "quoteId": "0Q0xx0000004CXECA2"
      }
  ]
}
```

```apex
// Sample Apex call for getInsuranceQuoteDetails invocable action
public class GetInsuranceQuoteDetailsInvoke {
    private static final String ACTION_NAME = 'getInsuranceQuoteDetails';

    public static Boolean invokeMethod(Map<String, Object> inputs, Map<String, Object> output) {
        if (output == null) {
            output = new Map<String, Object>();
        }

        try {
            Invocable.Action action = Invocable.Action.createStandardAction(ACTION_NAME);

            // Optional inputs
            setInvocationParameter(action, inputs, 'quoteId', false);
            setInvocationParameter(action, inputs, 'filters', false);

            List<Invocable.Action.Result> results = action.invoke();
            if (results != null && !results.isEmpty() && results[0].isSuccess()) {
                output.put('output', results[0].getOutputParameters());
                output.put('success', true);
                return true;
            }

            output.put('success', false);
            if (results != null && !results.isEmpty()) {
                output.put('errors', results[0].getErrors());
            }
            return false;
        } catch (Exception e) {
            output.put('success', false);
            output.put('errorMessage', e.getMessage());
            return false;
        }
    }

    private static void setInvocationParameter(
        Invocable.Action action,
        Map<String, Object> payload,
        String attribute,
        Boolean serializeJson
    ) {
        if (payload != null && payload.containsKey(attribute) && payload.get(attribute) != null) {
            if (serializeJson) {
                action.setInvocationParameter(attribute, JSON.serialize(payload.get(attribute)));
            } else {
                action.setInvocationParameter(attribute, payload.get(attribute));
            }
        }
    }
}
```

```
[
  {
    "actionName": "getInsuranceQuoteDetails",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "contextId": "0000000i18tq18g00291753491555889e8ef669a59f0453fade5acbe4595a3d6",
      "contextJson": {
        "SalesTransaction": [
          {
            "Status": "Draft",
            "Account": null,
            "BillingCity": null,
            "Subtotal": 1350,
            "businessObjectType": "Quote",
            "SalesTransactionName": "Multi Auto",
            "TotalAmount": 1350,
            "ShippingStreet": null,
            "SalesTransactionItem": [
              {
                "ProrationPolicy": "0muxx000000004sAAA",
                "ProductName": "Medical Payments",
                "ProductCode": "STA-3",
                "ProductSellingModel": "0jPxx000000004sEAA",
                "SpecificationType": "Coverage",
                "TaxTreatment": "1ttxx000000004rAAA",
                "SalesTransactionItemParent": "0Q0xx0000004CE1CAM",
                "Quantity": 1,
                "Product": "01txx0000006i7KAAQ",
                "businessObjectType": "QuoteLineItem",
                "PricebookEntry": "01uxx0000008ybrAAA",
                "PricingTermCount": 1,
                "StartDate": "2023-10-19T00:00:00Z",
                "NetUnitPrice": 750,
                "UnitPrice": 750,
                "id": "0QLxx0000004CIpGAM"
              },
              {
                "ProrationPolicy": null,
                "ProductName": "Collision",
                "ProductCode": "STA-2",
                "ProductSellingModel": "0jPxx000000004tEAA",
                "SpecificationType": "Coverage",
                "TaxTreatment": "1ttxx000000004rAAA",
                "SalesTransactionItemParent": "0Q0xx0000004CE1CAM",
                "Quantity": 1,
                "Product": "01txx0000006i7JAAQ",
                "businessObjectType": "QuoteLineItem",
                "PricebookEntry": "01uxx0000008ybsAAA",
                "PricingTermCount": 1,
                "StartDate": null,
                "NetUnitPrice": 500,
                "UnitPrice": 500,
                "id": "0QLxx0000004CIqGAM"
              }
            ],
            "BillingCountry": null,
            "BillingStreet": null,
            "Pricebook": "01sxx0000005pyfAAA",
            "Opportunity": null,
            "ShippingPostalCode": null,
            "SalesTransactionSource": "0Q0xx0000004CE1CAM",
            "ShippingCountry": null,
            "ShippingCity": null,
            "ShippingState": null,
            "BillingPostalCode": null,
            "id": "0Q0xx0000004CE1CAM",
            "Contract": null,
            "BillingState": null
          }
        ]
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
