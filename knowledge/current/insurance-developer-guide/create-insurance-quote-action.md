---
title: "Create Insurance Quote Action"
domain: insurance-developer-guide
topic: create-insurance-quote-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.569Z
estimatedTokens: 636
keywords: [Insurance, Quote, Action, context, user, inputs, represent, REST, HTTP, Outputs]
---

# Create Insurance Quote Action

> Create an Insurance quote by using a context ID or a set of user inputs that represent
  quote details.

# Create Insurance Quote Action

Create an Insurance quote by using a context ID or a set of user inputs that represent quote details.

This action is available in API version 63.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createInsuranceQuote

Formats

JSON

HTTP Methods

GET, POST

Authentication

Bearer Token

## Inputs

If you specify quoteInputs (but not contextId) in the request body, you must provide quoteName, priceBookId, and effectiveDate as input parameters.

If you specify contextId (but not quoteInputs) in the request body, you must provide these:

-   either quoteName or SalesTransactionName within additionalFields, and
-   either priceBookId or PriceBook within additionalFields

| Input | Details |
| --- | --- |
| accountId | TypeStringDescriptionID of the account that's associated with the quote being created. |
| additionalFields | TypeStringDescriptionOptional. Map of additional fields that must be updated in the quote context. |
| contextId | TypeStringDescriptionRequired if quoteInputs isn't specified.Context ID that's used to issue the quote. |
| effectiveDate | TypeDateDescriptionDate that the quote becomes effective. |
| expirationDate | TypeDateDescriptionOptional. Expiration date of the quote. |
| opportunityId | TypeStringDescriptionOptional. ID of the opportunity that's associated with the quote. |
| pricebookId | TypeStringDescriptionRequired if either quoteInputs or contextId is specified.ID of the pricebook that's associated with the quote. |
| pricingProcedureApiName | TypeStringDescriptionOptional. API name of the pricing procedure used to price the product. |
| quoteInputs | TypeStringDescriptionRequired if contextId isn't specified.Set of user inputs on products that represent the quote details. |
| quoteOptions | TypeApex-definedDescriptionAn Apex runtime_industries_insurance.CreateInsuranceQuoteOptions record that contains details to create the quote. |
| quoteName | TypeStringDescriptionName of the quote that must be created. |
| ratingDate | TypeDateDescriptionOptional. Date to find the active pricing procedure. |

## Outputs

| Output | Details |
| --- | --- |
| contextId | TypeStringDescriptionContext ID of the insurance quote that's created. |
| quoteId | TypeStringDescriptionID of the insurance quote that's created. |

## Example

Sample request where quoteInputs is specified in the request body.

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
  "inputs":[
    {
      "quoteName": "Auto Insurance Quote",
      "priceBookId" : "01sxx0000005pyfAAA",
      "accountId": "001xx000003GYwrAAG",
      "effectiveDate": "2024-10-11",
      "opportunityId": "006xx000001a2tbAAA",
      "quoteOptions": {
         "productSellingModel": "One Time",
         "saveQuote": true
      },
      "quoteInputs": "[{"productCode":"autoRoot","instanceKeys":["AutoRoot"],"items":[{"productCode":"autoBundle","instanceKeys":["AutoRoot","AutoBundle"],"attributes":{"avMake":"BMW"},"relatedRecords":[{"relatedRecordId":"001xx000003GYwrAAG","relatedRecordObjName":"Account"}]},{"productCode":"autoDriver","instanceKeys":["AutoRoot","AutoBundle","AutoDriver"],"relatedRecords":[{"relatedRecordId":"003xx000004WhKhAAK","relatedRecordObjName":"Contact"}]},{"productCode":"autoRental","instanceKeys":["AutoRoot","AutoBundle","AutoRental"]},{"productCode":"autoCollision","instanceKeys":["AutoRoot","AutoBundle","autoCollision"],"attributes":{"CollisionBasePremium":250,"autoCollDedClmCov":250}}]}]"
    }
  ]
}
```

```apex
// Sample Apex call for createInsuranceQuote invocable action
public class CreateInsuranceQuoteInvoke {
    private static final String ACTION_NAME = 'createInsuranceQuote';

    public static Boolean invokeMethod(Map<String, Object> inputs, Map<String, Object> output) {
        if (output == null) {
            output = new Map<String, Object>();
        }

        try {
            Invocable.Action action = Invocable.Action.createStandardAction(ACTION_NAME);

            // Required inputs (serialize where needed)
            setInvocationParameter(action, inputs, 'quoteInputs', true);
            setInvocationParameter(action, inputs, 'quoteName', false);
            setInvocationParameter(action, inputs, 'priceBookId', false);
            setInvocationParameter(action, inputs, 'accountId', false);
            setInvocationParameter(action, inputs, 'effectiveDate', false);

            // Optional inputs
            setInvocationParameter(action, inputs, 'contextId', false);
            setInvocationParameter(action, inputs, 'expirationDate', false);
            setInvocationParameter(action, inputs, 'additionalFields', true);
            setInvocationParameter(action, inputs, 'opportunityId', false);

            // quoteOptions is optional but supported
            if (inputs != null && inputs.containsKey('quoteOptions')) {
                Map<String, Object> optionsFromInput =
                    (Map<String, Object>) inputs.get('quoteOptions');
                if (optionsFromInput != null) {
                    runtime_industries_insurance.CreateInsuranceQuoteOptions quoteOptions =
                        new runtime_industries_insurance.CreateInsuranceQuoteOptions();
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
                    if (optionsFromInput.containsKey('productSellingModel')) {
                        quoteOptions.productSellingModel =
                            (String) optionsFromInput.get('productSellingModel');
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
    "actionName": "createInsuranceQuote",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "contextId": "0000000i18tq18g00291753491065771466a599fe8a2440890b4f3d8b4ef40b5",
      "quoteId": "0Q0SG000000OOUD0A4"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
