---
title: "Add Eligible Insurance Clauses Action"
domain: insurance-developer-guide
topic: add-eligible-insurance-clauses-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.485Z
estimatedTokens: 474
keywords: [Add, Eligible, Insurance, Clauses, Action, quote, context, specify, either, instance, key, line, item, along, product]
---

# Add Eligible Insurance Clauses Action

> Add eligible insurance clauses to a quote or
            context. You must specify either a quote ID or a context ID, and either an instance key
            or a quote line item ID along with insurance product clause details.

# Add Eligible Insurance Clauses Action

Add eligible insurance clauses to a quote or context. You must specify either a quote ID or a context ID, and either an instance key or a quote line item ID along with insurance product clause details.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/addEligibleInsuranceClauses

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
| instanceKey | TypestringDescriptionRequired if quoteLineItemId isn't specified.Unique key that identifies the product to which a quote line item belongs. |
| insuranceProductClauses | TypestringDescriptionRequired.JSON object with the details of the insurance product clauses to add. |
| optionFlags | TypeApex-definedDescriptionAn Apex runtime_industries_insurance.AddEligibleInsuranceClausesOptions record that contains the details to add eligible clauses to an insurance product. |
| quoteId | TypestringDescriptionRequired if contextId isn't specified.ID of the insurance quote to add eligible clauses. |
| quoteLineItemId | TypestringDescriptionRequired if instanceKey isn't specified.ID of the quote line items for adding eligible clauses. |

## Outputs

| Output | Details |
| --- | --- |
| errorsList | TypestringDescriptionErrors that are encountered during the operation. |
| isSuccess | TypebooleanDescriptionIndicates whether the operation is successful (true) or not (false). |
| quoteLineItemInsProductClauseIds | TypestringDescriptionIDs of the quote line item insurance product clauses. |

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
      "quoteLineItemId": "0QLxx0000000002BBB",
      "contextId": "0j5xx0000000003CCC",
      "instanceKey": [
        "Auto",
        "Liability"
      ],
      "insuranceProductClauses": [
        {
          "insuranceProductClauseId": "0j4xx0000000004DDD",
          "effectiveDate": "2025-01-01",
          "expirationDate": "2025-12-31"
        }
      ],
      "optionFlags": {
        "saveContext": true
      }
    }
  ]
}
```

```apex
public class AddEligibleInsuranceClausesInvoke {
    private static final String ACTION_NAME = 'addEligibleInsuranceClauses';

    public static Boolean invokeMethod(Map<String, Object> inputs, Map<String, Object> output) {
        if (output == null) {
            output = new Map<String, Object>();
        }

        try {
            Invocable.Action action = Invocable.Action.createStandardAction(ACTION_NAME);

            // Either quoteId or contextId is required
            setInvocationParameter(action, inputs, 'quoteId', false);
            setInvocationParameter(action, inputs, 'contextId', false);

            // Either quoteLineItemId or instanceKey is required
            setInvocationParameter(action, inputs, 'quoteLineItemId', false);
            setInvocationParameter(action, inputs, 'instanceKey', false);

            // insuranceProductClauses expects JSON
            setInvocationParameter(action, inputs, 'insuranceProductClauses', true);

            // Optional optionFlags map
            if (inputs != null && inputs.containsKey('optionFlags')) {
                Map<String, Object> addClauseOptions =
                    (Map<String, Object>) inputs.get('optionFlags');
                if (addClauseOptions != null) {
                    runtime_industries_insurance.AddEligibleInsuranceClausesOptions apexOptions =
                        new runtime_industries_insurance.AddEligibleInsuranceClausesOptions();
                    if (addClauseOptions.containsKey('saveContext')) {
                        apexOptions.SaveContext =
                            (Boolean) addClauseOptions.get('saveContext');
                    }
                    action.setInvocationParameter('addClauseOptions', apexOptions);
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
    "actionName": "addEligibleInsuranceClauses",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "isSuccess": true,
      "quoteLineItemInsProductClauseIds": [
        "a1Cxx0000000001AAA"
      ],
      "errorsList": []
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
