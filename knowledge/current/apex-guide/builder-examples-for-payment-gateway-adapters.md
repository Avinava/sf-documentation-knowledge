---
title: "Builder Examples for Payment Gateway Adapters"
domain: apex-guide
topic: builder-examples-for-payment-gateway-adapters
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:32.826Z
estimatedTokens: 100
keywords: [Builder, Examples, Payment, Gateway, Adapters, final, sections, adapter, define, how, creates, requests, responses, implementation, classes]
---

# Builder Examples for Payment Gateway Adapters

> The final sections of a payment gateway adapter should define how the adapter creates
        requests and responses. The implementation of these classes can vary widely based on your
        gateway and platform requirements. We’ve provided several generics examples for
        review.

# Builder Examples for Payment Gateway Adapters

The final sections of a payment gateway adapter should define how the adapter creates requests and responses. The implementation of these classes can vary widely based on your gateway and platform requirements. We’ve provided several generics examples for review.

## Example

buildCaptureRequest

```

```

## Example

createCaptureResponse

```

```

## Code Examples

```apex
private String buildCaptureRequest(commercepayments.CaptureRequest captureRequest) {
   Boolean IS_MULTICURRENCY_ORG = UserInfo.isMultiCurrencyOrganization();
    QueryUtils qBuilderForAuth = new QueryUtils(PaymentAuthorization.SObjectType);
    qBuilderForAuth.getSelectClause().addField('GatewayRefNumber', false);
    qBuilderForAuth.setWhereClause(' WHERE Id =' + '\'' + captureRequest.paymentAuthorizationId + '\'');
    PaymentAuthorization authObject = (PaymentAuthorization)Database.query(qBuilderForAuth.buildSOQL())[0];

    JSONGenerator jsonGeneratorInstance = JSON.createGenerator(true);
    jsonGeneratorInstance.writeStartObject();
    jsonGeneratorInstance.writeStringField('merchantAccount', '{!$Credential.Username}');
    jsonGeneratorInstance.writeStringField('originalReference', authObject.GatewayRefNumber);

    jsonGeneratorInstance.writeFieldName('modificationAmount');
    jsonGeneratorInstance.writeStartObject();
    jsonGeneratorInstance.writeStringField('value', String.ValueOf((captureRequest.amount * 100.0).intValue()));
    jsonGeneratorInstance.writeEndObject();

    jsonGeneratorInstance.writeEndObject();
    return jsonGeneratorInstance.getAsString();
}
```

```apex
private commercepayments.GatewayResponse createCaptureResponse(HttpResponse response) {
    Map<String, Object> mapOfResponseValues = (Map
                        <String, Object>) JSON.deserializeUntyped(response.getBody());
    Integer statusCode = response.getStatusCode();
    String responceValue = (String)mapOfResponseValues.get('response');
    if(statusCode == 200) {
        system.debug('Response - success - Capture received');
       commercepayments.CaptureResponse captureResponse = new commercepayments.CaptureResponse();
        captureResponse.setAsync(true); // Very important to treat this as an asynchronous transaction
        captureResponse.setGatewayReferenceNumber((String)mapOfResponseValues.get('pspReference'));
        captureResponse.setSalesforceResultCodeInfo(new commercepayments.SalesforceResultCodeInfo(commercepayments.SalesforceResultCode.Success));
        return captureResponse;
    } else {
        system.debug('Response - error - Capture not received by Gateway');
        String message = (String)mapOfResponseValues.get('message');
        commercepayments.GatewayErrorResponse error = new commercepayments.GatewayErrorResponse(String.valueOf(statusCode), message);
        return error;
    }
}
```
