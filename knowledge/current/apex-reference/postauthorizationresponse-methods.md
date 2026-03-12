---
title: "PostAuthorizationResponse Methods"
domain: apex-reference
topic: postauthorizationresponse-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:24.405Z
estimatedTokens: 1049
keywords: [PostAuthorizationResponse]
---

# PostAuthorizationResponse Methods

> Lists the methods for the PostAuthorizationResponse.

# PostAuthorizationResponse Methods

Lists the methods for the PostAuthorizationResponse.

The following are methods for PostAuthorizationResponse.

-   **[setAlternativePaymentMethodResponse(AlternativePaymentMethodResponsealternativePaymentMethod)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setAltPaymentMethodResponse.htm)**
    Sets details from the gateway about the authorized alternative payment method.
-   **[setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setAmount.htm)**
    Sets the amount for payment authorization. Can be positive, negative, or zero.
-   **[setAsync(async)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setAsync.htm)**
    Sets whether the payment capture or authorization is asynchronous (True) or synchronous (False). If True, then the payment or payment authorization record created has a status of Pending.
-   **[setAuthorizationExpirationDate(authExpDate)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setAuthorizationExpirationDate.htm)**
    Sets the expiration date of the authorization request.
-   **[setGatewayAuthCode(gatewayAuthCode)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayAuthCode.htm)**
    Sets the authorization code that the gateway returned. Maximum length of 64 characters.
-   **[setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayAvsCode.htm)**
    Sets the AVS (address verification system) result code information that the gateway returned. Maximum length of 64 characters.
-   **[setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayDate.htm)**
    Sets the date that the authorization occurred. Some gateways don’t send this value.
-   **[setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayMessage.htm)**
    Sets error messages that the gateway returned for the tokenization request. Maximum length of 255 characters.
-   **[setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayReferenceDetails.htm)**
    Sets any additional reference details that the gateway returned.
-   **[setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayReferenceNumber.htm)**
    Sets the reference number that the gateway returned.
-   **[setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayResultCode.htm)**
    Sets a gateway-specific result code. The code may be mapped to a Salesforce-specific result code. Maximum length of 64 characters.
-   **[setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayResultCodeDescription.htm)**
    Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.
-   **[setPaymentMethodDetails(paymentMethodDetails)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setPaymentMethodDetails.htm)**
    Sets details about the payment method.
-   **[setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setPaymentMethodResponse.htm)**
    Sets information from the gateway about the tokenized payment method.
-   **[setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setSalesforceResultCodeInfo.htm)**
    Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

## Related Topics

- setAlternativePaymentMethodResponse(AlternativePaymentMethodResponsealternativePaymentMethod) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setAltPaymentMethodResponse.htm)
- setAmount(amount) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setAmount.htm)
- setAsync(async) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setAsync.htm)
- setAuthorizationExpirationDate(authExpDate) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setAuthorizationExpirationDate.htm)
- setGatewayAuthCode(gatewayAuthCode) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayAuthCode.htm)
- setGatewayAvsCode(gatewayAvsCode) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayAvsCode.htm)
- setGatewayDate(gatewayDate) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayDate.htm)
- setGatewayMessage(gatewayMessage) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayMessage.htm)
- setGatewayReferenceDetails(gatewayReferenceDetails) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayReferenceDetails.htm)
- setGatewayReferenceNumber(gatewayReferenceNumber) (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_setGatewayReferenceNumber.htm)
