---
title: "Get Insurance Rating Input Action"
domain: insurance-developer-guide
topic: get-insurance-rating-input-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.642Z
estimatedTokens: 378
keywords: [Insurance, Rating, Input, Action, data, products, support, pricing, calculations, coverage, analysis, REST, HTTP, Inputs, Outputs]
---

# Get Insurance Rating Input Action

> Get the rating input data for the insurance products to support the
            pricing calculations and coverage analysis.

# Get Insurance Rating Input Action

Get the rating input data for the insurance products to support the pricing calculations and coverage analysis.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getInsuranceRatingInput

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| additionalFields | TypestringDescriptionJSON string of additional fields to include in the rating context. |
| effectiveDate | TypedateDescriptionEffective date for the rating calculation. |
| productIds | TypestringDescriptionRequired.IDs of the products to generate the rating input for. |
| ratingDate | TypedateDescriptionDate to use for rating calculations. |
| rootProductCodes | TypestringDescriptionList of root product codes. |
| salesTransactionTypeId | TypestringDescriptionID of the sales transaction type. |
| transactionType | TypestringDescriptionName of the transaction type. |

## Outputs

| Output | Details |
| --- | --- |
| getRatingInputOutputRep | TypeApex-definedDescriptionAn Apex ConnectApi__GetRatingInputOutputRep record that contains the details of the rating input for insurance products. |

## Example

POST

This sample request is for the Get Insurance Rating Input action.

```

```

This is a sample request to call this invocable action from Apex code.

```

```

This sample response is for the Get Insurance Rating Input action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "additionalFields": {
        "QuoteAccount": "001ZM000002ZNnBYAW"
      },
      "effectiveDate": "2024-01-01",
      "productIds": [
        "01tRM0000000001"
      ],
      "ratingDate": "2024-01-01",
      "rootProductCodes": [
        "ProductCode1"
      ],
      "salesTransactionTypeId": "0k5RM0000000001",
      "transactionType": "NewBusiness"
    }
  ]
}
```

```apex
// Sample implementation to call insurance get rating input invocable action in Apex
public class InsuranceGetRatingInputApexService implements Callable {
    
    private static final String GET_RATING_INPUT_METHOD = 'getRatingInput';
    
    /**
     * @description Implementation of Callable interface for OmniStudio
     * @param action Method name to invoke
     * @param args Map containing input, output, and options
     * @return Object result of the method invocation
     */
    public Object call(String action, Map<String, Object> args) {
        System.debug('InsuranceGetRatingInputApexService: call ' + action);
        
        Map<String, Object> input = (Map<String, Object>) args.get('input');
        Map<String, Object> output = (Map<String, Object>) args.get('output');
        Map<String, Object> options = (Map<String, Object>) args.get('options');

        return invokeMethod(action, input, output, options);
    }     
        // Invoke methods, and if the method is not supported, it will be ignored.
    public Boolean invokeMethod(
        String methodName,
        Map<String, Object> inputs,
        Map<String, Object> output,
        Map<String, Object> options
    ) {
        Boolean response = false;
        
        System.debug('Insurance Get Rating Input Apex Service - Method: ' + methodName);
        
        try {
            if (GET_RATING_INPUT_METHOD.equals(methodName)) {
                response = getRatingInput(inputs, output, options);
            } else {
                throw new UnsupportedOperationException('this method name is incorrect or not supported');
            }
        } catch (Exception e) {
            response = false;
            output.put('success', false);
            output.put('errorMessage', 'Exception occurred: ' + e.getMessage());
            System.debug(LoggingLevel.ERROR, 'Exception in invokeMethod: ' + methodName + ', Error: ' + e.getMessage());
            System.debug(LoggingLevel.ERROR, 'Stack trace: ' + e.getStackTraceString());
        }
        System.debug('Output from invoke:' + output);
        return response;
    }
    
    private Boolean getRatingInput(Map<String, Object> inputs, Map<String, Object> output, Map<String, Object> options) {
        
        Map<String, Object> getRatingInputPayload = inputs;
        // Handle null input
        if (getRatingInputPayload == null) {
            output.put('success', false);
            output.put('errorMessage', 'ratingInput is required in the payload for rating');
            output.put('errorType', 'VALIDATION_ERROR');
            return false;
        }
        System.debug('Create Rating Input: ' + JSON.serialize(getRatingInputPayload));
        
        try {
            System.debug('Calling Invocable Action: getInsuranceRatingInput');

            // Create and configure the invocable action
            Invocable.Action action = Invocable.Action.createStandardAction('getInsuranceRatingInput');
            
            // productIds is required
            setInvocationParameter(action, getRatingInputPayload, 'productIds', true);

            // salesTransactionTypeId is optional    
            setInvocationParameter(action, getRatingInputPayload, 'salesTransactionTypeId', false);
            
            // transactionType is optional    
            setInvocationParameter(action, getRatingInputPayload, 'transactionType', false);
            
            // effectiveDate is optional    
            setInvocationParameter(action, getRatingInputPayload, 'effectiveDate', false);
            
            // ratingDate is optional    
            setInvocationParameter(action, getRatingInputPayload, 'ratingDate', false);
            
            // rootProductCodes is optional
            setInvocationParameter(action, getRatingInputPayload, 'rootProductCodes', true);

            // additionalFields is optional, but to be serialized
            setInvocationParameter(action, getRatingInputPayload, 'additionalFields', true);
            
            // Execute the action
            List<Invocable.Action.Result> results = action.invoke();
            
            if (results != null && !results.isEmpty()) {
                Invocable.Action.Result result = results[0];
                System.debug('IA result: ' + JSON.serialize(result));

                if (result.isSuccess()) {
                    System.debug('Get Rating Input created successfully from Invocable Action');
                    output.put('output', result.getOutputParameters());
                    
                    // Extract key information from the result
                    Map<String, Object> outputParams = result.getOutputParameters();
                    if (outputParams != null) {
                        if (outputParams.containsKey('getRatingInputOutputRep')) {
                            output.put('getRatingInputOutputRep', outputParams.get('getRatingInputOutputRep'));
                        }
                        System.debug('Rating Input data extracted: ' + outputParams);
                    }
                    List<Invocable.Action.Error> actionErrors = result.getErrors();
                    if (actionErrors != null && !actionErrors.isEmpty()) {
                        output.put('success', false);
                        output.put('error', result.getErrors());
                        return false;
                    }
                    output.put('success', true);
                    return true;
                    
                } else {
                    // Action failed - get error details
                    List<Invocable.Action.Error> actionErrors = result.getErrors();
                    String errorMessage = 'Get Rating Input Invocable Action failed';
                    
                    if (actionErrors != null && !actionErrors.isEmpty()) {
                        List<String> errorMessages = new List<String>();
                        List<Map<String, Object>> errorDetailsList = new List<Map<String, Object>>();
                        
                        for (Invocable.Action.Error actionError : actionErrors) {
                            errorMessages.add(actionError.getMessage());
                            errorDetailsList.add(new Map<String, Object>{
                                'message' => actionError.getMessage(),
                                'code' => actionError.getCode()
                            });
                        }
                        errorMessage = String.join(errorMessages, '; ');
                        output.put('actionErrors', errorDetailsList);
                    }
                    output.put('success', false);
                    output.put('errorMessage', errorMessage);

                    System.debug(LoggingLevel.ERROR, 'Get Rating Input Invocable Action failed: ' + errorMessage);
                    return false;
                }
                
            } else {
                output.put('success', false);
                output.put('errorMessage', 'Get Rating Input Invocable Action returned null or empty results');
                System.debug(LoggingLevel.WARN, 'Get Rating Input Invocable Action returned null/empty results');
            }
            return false;
            
        } catch (Exception e) {
            output.put('success', false);
            output.put('error', e.getMessage());
            return false;
        }
    } 
    
    private void setInvocationParameter(Invocable.Action action, Map<String, Object> quotePayload, String inputAttribute, boolean serializeJSON) {
        if (quotePayload.containsKey(inputAttribute) && quotePayload.get(inputAttribute) != null) {
            System.debug('InsuranceGetRatingInputApexService::' + inputAttribute + ': ' + JSON.serialize(quotePayload.get(inputAttribute)));
            if (serializeJSON) {
                action.setInvocationParameter(inputAttribute, JSON.serialize(quotePayload.get(inputAttribute)));
            } else {
                action.setInvocationParameter(inputAttribute, quotePayload.get(inputAttribute));
            }
        } else {
            System.debug('Payload does not contain attribute: ' + inputAttribute);
        }
    }
}
```

```
[
  {
    "actionName": "getInsuranceRatingInput",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outputValues": {
      "isSuccess": true,
      "getRatingInputOutputRep": {
        "ratingInputs": [
          {
            "additionalFields": {},
            "attributes": {},
            "instanceKeys": [
              "Key1"
            ],
            "productCode": "ProductCode1"
          }
        ],
        "success": true,
        "message": "successful"
      },
      "errorsList": []
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
