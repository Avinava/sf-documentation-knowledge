---
title: "Generate Insurance Clauses Action"
domain: insurance-developer-guide
topic: generate-insurance-clauses-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.601Z
estimatedTokens: 423
keywords: [Generate, Insurance, Clauses, Action, quote, context, specify, either, REST, HTTP, Inputs, Outputs]
---

# Generate Insurance Clauses Action

> Generate insurance clauses based on the specified
            quote and context information. You must specify either quote ID or context ID to
            generate insurance clauses.

# Generate Insurance Clauses Action

Generate insurance clauses based on the specified quote and context information. You must specify either quote ID or context ID to generate insurance clauses.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/generateInsuranceClauses

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contextId | TypestringDescriptionRequired if quoteId isn't specified.Context ID of the insurance quote. |
| instanceKeys | TypestringDescriptionRequired if quoteLineItemId isn't specified.Unique keys that identify the products to which quote line items belong. |
| optionFlags | TypeApex-definedDescriptionAn Apex runtime_industries_insurance.GenerateInsuranceClausesOptions record that contains the configuration and execution options to generate the insurance clauses. |
| quoteId | TypestringDescriptionRequired if contextId isn't specified.ID of the insurance quote for adding eligible clauses. |
| quoteLineItemIds | TypestringDescriptionRequired if quoteLineItemId isn't specified.IDs of the quote line item for the quote. |

## Outputs

| Output | Details |
| --- | --- |
| asyncBulkRequestId | TypestringDescriptionID of the asynchronous bulk request. |
| errorsList | TypestringDescriptionErrors that are encountered during the operation. |
| isSuccess | TypebooleanDescriptionIndicates whether the operation is successful (true) or not (false). |

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
  "inputs": [
    {
      "quoteId": "0Q0xx0000000001AAA",
      "contextId": "0000000i18tq18g0025175944829641764efd423f7dc44b98dd1e829086efc59",
      "quoteLineItemIds": [
        "0QLxx0000000003CCC"
      ],
      "instanceKeys": [
        {
          "instanceKey": [
            "Auto",
            "Liability"
          ]
        }
      ],
      "optionFlags": {
        "generateClausesAsync": true,
        "generateManualClauses": false,
        "saveContext": true
      }
    }
  ]
}
```

```apex
// Sample Apex call for generateInsuranceClauses invocable action
public class GenerateInsuranceClausesInvoke {
    private static final String ACTION_NAME = 'generateInsuranceClauses';

    public static Boolean invokeMethod(Map<String, Object> inputs, Map<String, Object> output) {
        if (output == null) {
            output = new Map<String, Object>();
        }

        try {
            Invocable.Action action = Invocable.Action.createStandardAction(ACTION_NAME);

            // Either quoteId or contextId is required
            setInvocationParameter(action, inputs, 'quoteId', false);
            setInvocationParameter(action, inputs, 'contextId', false);

            // Optional inputs
            setInvocationParameter(action, inputs, 'quoteLineItemIds', false);
            setInvocationParameter(action, inputs, 'instanceKeys', false);

            // Optional optionFlags map
            if (inputs != null && inputs.containsKey('optionFlags')) {
                Map<String, Object> generateClauseOptions =
                    (Map<String, Object>) inputs.get('optionFlags');
                if (generateClauseOptions != null) {
                    runtime_industries_insurance.GenerateInsuranceClausesOptions apexOptions =
                        new runtime_industries_insurance.GenerateInsuranceClausesOptions();
                    if (generateClauseOptions.containsKey('saveContext')) {
                        apexOptions.SaveContext =
                            (Boolean) generateClauseOptions.get('saveContext');
                    }
                    if (generateClauseOptions.containsKey('generateManualClauses')) {
                        apexOptions.GenerateManualClauses =
                            (Boolean) generateClauseOptions.get('generateManualClauses');
                    }
                    if (generateClauseOptions.containsKey('generateClausesAsync')) {
                        apexOptions.generateClausesAsync =
                            (Boolean) generateClauseOptions.get('generateClausesAsync');
                    }
                    action.setInvocationParameter('optionFlags', apexOptions);
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
    "actionName": "generateInsuranceClauses",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "isSuccess": true,
      "asyncBulkRequestId": "750xx0000000001AAA",
      "errorsList": []
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
