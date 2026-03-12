---
title: "Update Insurance Quote Action"
domain: insurance-developer-guide
topic: update-insurance-quote-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.750Z
estimatedTokens: 525
keywords: [Insurance, Quote, Action, adding, updating, deleting, nodes, optionally, executing, pricing, rules, REST, HTTP, Inputs, Outputs]
---

# Update Insurance Quote Action

> Update an existing insurance quote by adding, updating, or deleting
            nodes and optionally executing pricing and rules.

# Update Insurance Quote Action

Update an existing insurance quote by adding, updating, or deleting nodes and optionally executing pricing and rules.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/updateInsuranceQuote

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| addedNodes | TypestringDescriptionJSON string that contains the set of nodes that must be added to the quote. |
| additionalFields | TypestringDescriptionJSON string that contains additional fields that must be updated in the quote context. |
| contextId | TypestringDescriptionID of the context that's used to issue the quote update. |
| deletedNodes | TypestringDescriptionJSON string that contains the set of nodes that must be deleted from the quote. |
| pricingProcedureApiName | TypestringDescriptionAPI name of the pricing procedure that's used to price the product. |
| quoteId | TypestringDescriptionRequired.ID of the insurance quote that must be updated. |
| quoteOptions | TypeApex-definedDescriptionAn Apex runtime_industries_insurance.UpdateInsuranceQuoteOptions record that contains the configuration and execution options to update the quote. |
| updatedNodes | TypestringDescriptionJSON string that contains the set of nodes that must be updated in the quote. |

## Outputs

| Output | Details |
| --- | --- |
| contextId | TypestringDescriptionID of the context that's used to issue the quote update. |
| errorsList | TypestringDescriptionList of errors that occurred during the update operation. |
| isSuccess | TypebooleanDescriptionIndicates whether the update operation is successful (true) or not (false). |
| quoteId | TypestringDescriptionRequired.ID of the insurance quote that's updated. |

## Example

POST

This sample request is for the Update Insurance Quote action.

```

```

This is a sample request to call this invocable action from Apex code.

```

```

This sample response is for the Update Insurance Quote action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "quoteId": "0Q0xx000000001xAAA",
      "contextId": "11oxx000001G0lUAAS",
      "pricingProcedureApiName": "StandardPricing",
      "addedNodes": "[{"productCode":"autoBundle","instanceKeys":["multiAuto","autoBundle"],"attributes":{"VehicleYear":"2024","VehicleMake":"Toyota"},"items":[{"productCode":"auto","instanceKeys":["multiAuto","autoBundle","auto"],"attributes":{"VehicleType":"Sedan"}}]}]",
      "updatedNodes": "[{"productCode":"driver","instanceKeys":["multiAuto","autoBundle","driverTom"],"attributes":{"DriverAge":"35","LicenseNumber":"D1234567"}}]",
      "deletedNodes": "[{"productCode":"coverage","instanceKeys":["multiAuto","autoBundle","auto","collision"]}]",
      "additionalFields": "{"customField1":"value1","customField2":"value2"}",
      "quoteOptions": {
        "executePricing": true,
        "executeConfigurationRules": true,
        "executeQualificationRules": false,
        "validateProductCatalog": true,
        "saveQuote": false
      }
    }
  ]
}
```

```apex
// Sample Apex call for updateInsuranceQuote invocable action
public class UpdateInsuranceQuoteInvoke {
    private static final String ACTION_NAME = 'updateInsuranceQuote';

    public static Boolean invokeMethod(Map<String, Object> inputs, Map<String, Object> output) {
        if (output == null) {
            output = new Map<String, Object>();
        }

        try {
            Invocable.Action action = Invocable.Action.createStandardAction(ACTION_NAME);

            // Required input
            setInvocationParameter(action, inputs, 'quoteId', false);

            // Optional inputs
            setInvocationParameter(action, inputs, 'contextId', false);
            setInvocationParameter(action, inputs, 'addedNodes', true);
            setInvocationParameter(action, inputs, 'updatedNodes', true);
            setInvocationParameter(action, inputs, 'deletedNodes', true);
            setInvocationParameter(action, inputs, 'additionalFields', true);

            // quoteOptions is required by the IA contract
            if (inputs != null && inputs.containsKey('quoteOptions')) {
                Map<String, Object> optionsFromInput =
                    (Map<String, Object>) inputs.get('quoteOptions');
                if (optionsFromInput != null) {
                    runtime_industries_insurance.UpdateInsuranceQuoteOptions quoteOptions =
                        new runtime_industries_insurance.UpdateInsuranceQuoteOptions();
                    if (optionsFromInput.containsKey('executePricing')) {
                        quoteOptions.executePricing =
                            (Boolean) optionsFromInput.get('executePricing');
                    }
                    if (optionsFromInput.containsKey('validateProductCatalog')) {
                        quoteOptions.validateProductCatalog =
                            (Boolean) optionsFromInput.get('validateProductCatalog');
                    }
                    if (optionsFromInput.containsKey('executeConfigurationRules')) {
                        quoteOptions.executeConfigurationRules =
                            (Boolean) optionsFromInput.get('executeConfigurationRules');
                    }
                    if (optionsFromInput.containsKey('executeQualificationRules')) {
                        quoteOptions.executeQualificationRules =
                            (Boolean) optionsFromInput.get('executeQualificationRules');
                    }
                    if (optionsFromInput.containsKey('saveQuote')) {
                        quoteOptions.saveQuote =
                            (Boolean) optionsFromInput.get('saveQuote');
                    }
                    action.setInvocationParameter('quoteOptions', quoteOptions);
                }
            }

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
    "actionName": "repriceInsuranceProduct",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "isSuccess": true,
      "quoteId": "0Q0xx000000001xAAA",
      "contextId": "11oxx000001G0lUAAS",
      "errorsList": "[]"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
