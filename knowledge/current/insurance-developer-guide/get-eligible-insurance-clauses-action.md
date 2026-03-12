---
title: "Get Eligible Insurance Clauses Action"
domain: insurance-developer-guide
topic: get-eligible-insurance-clauses-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.612Z
estimatedTokens: 384
keywords: [Eligible, Insurance, Clauses, Action, quote, context, specify, either, instance, key, line, item, REST, HTTP, Inputs]
---

# Get Eligible Insurance Clauses Action

> Get eligible insurance clauses based on quote ID
            and context ID. You must specify either a quote ID or a context ID, and either an
            instance key or a quote line item ID to get the eligible insurance
        clauses.

# Get Eligible Insurance Clauses Action

Get eligible insurance clauses based on quote ID and context ID. You must specify either a quote ID or a context ID, and either an instance key or a quote line item ID to get the eligible insurance clauses.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getEligibleInsuranceClauses

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
| quoteId | TypestringDescriptionRequired if contextId isn't specified.ID of the insurance quote to get eligible clauses. |
| quoteLineItemId | TypestringDescriptionRequired if instanceKey isn't specified.ID of the quote line items to get eligible clauses. |

## Outputs

| Output | Details |
| --- | --- |
| eligibleClauses | TypestringDescriptionDetails of insurance product clauses. |
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
      "contextId": "0000000i18tq18g0025175944829641764efd423f7dc44b98dd1e829086efc59",
      "instanceKey": [
        "a3Nxx000000CmikEAC"
      ],
      "quoteId": "0Q0xx000000Dm3jCAC",
      "quoteLineItemId": "0QLxx000000E5d1OAC"
    }
  ]
}
```

```apex
// Sample Apex call for getEligibleInsuranceClauses invocable action
public class GetEligibleInsuranceClausesInvoke {
    private static final String ACTION_NAME = 'getEligibleInsuranceClauses';

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
    "actionName": "getEligibleInsuranceClauses",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "getEligibleClausesOutputRep": {
        "errors": [],
        "insuranceProductClauses": [
          {
            "category": "Manual",
            "clauseName": "mxtestIC",
            "description": "two variable",
            "effectiveDate": "2025-10-01",
            "expirationDate": "2025-12-31",
            "insuranceProductClauseId": "...",
            "type": "Clause"
          }
        ],
        "success": true
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
