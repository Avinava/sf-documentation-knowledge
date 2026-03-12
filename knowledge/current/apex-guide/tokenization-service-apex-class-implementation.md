---
title: "Tokenization Service Apex Class Implementation"
domain: apex-guide
topic: tokenization-service-apex-class-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.827Z
estimatedTokens: 1068
keywords: [Tokenization, Service, Apex, Implementation, tokenization, service, hide, sensitive, customer, payment, data., uses, PaymentMethodTokenizationRequest, PaymentMethodTokenizationResponse, CardPaymentMethodRequest., Implement, classes, gateway, adapter., Encryption]
---

# Tokenization Service Apex Class Implementation

> Use the tokenization service to hide sensitive customer payment method data. The
  Tokenization service uses PaymentMethodTokenizationRequest, PaymentMethodTokenizationResponse, and CardPaymentMethodRequest. Implement these classes in your payment gateway
  adapter.

# Tokenization Service Apex Class Implementation

Use the tokenization service to hide sensitive customer payment method data. The Tokenization service uses PaymentMethodTokenizationRequest, PaymentMethodTokenizationResponse, and CardPaymentMethodRequest. Implement these classes in your payment gateway adapter.

| Available in: Salesforce Spring '21 and later |
| --- |


## Encryption for Tokenized Payment Methods

CommercePayments uses Salesforce field encryption to securely store gateway token values on customer payment method entities such as DigitalWallet, CardPaymentMethod, and AlternativePaymentMethod.

CardPaymentMethod and DigitalWallet contain the GatewayTokenEncrypted field, available in API v52.0 and later, and the GatewayToken field, available in API v48.0 and later. Both fields store gateway token values. However, GatewayTokenEncrypted uses Salesforce [Classic Encryption for Custom Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.securityImplGuide.meta/securityImplGuide/fields_about_encrypted_fields.htm) to securely encrypt the token. GatewayToken doesn't use encryption. To ensure secure tokenization, we recommend using GatewayTokenEncrypted on your DigitalWallets and CardPaymentMethods. The AlternativePaymentMethod object uses a GatewayToken field for token storage, however, this field is encrypted on AlternativePaymentMethods.

In API version 52.0 and later, CardPaymentMethods and DigitalWallets can’t store values for GatewayTokenEncryption and GatewayToken at the same time on the same record. If you try to assign one while the other exists, Salesforce throws an error.

Your payment gateway adapter uses the PaymentMethodTokenizationRequest and PaymentMethodTokenizationResponse classes to retrieve a gateway token from the payment gateway, encrypt it in Salesforce, and store the value on a payment method entity. Let's see how we can configure these classes in our payment gateway adapter.

## Implementing Tokenization Classes in Your Gateway Adapter

The following code is used within your PaymentGatewayAdapter Apex class.

Gateway tokens are created and encrypted when the GatewayResponse class's processRequest method receives a tokenization request. If the request type is Tokenize, GatewayResponse calls the createTokenizeResponse method and passes an instance of the PaymentMethodTokenizationRequest class. The passed PaymentMethodTokenizationRequest object contains the address and cardPaymentMethod information that the payment gateway needs to manage the tokenization process. For example:

```

```

Configure the createTokenizeResponse method to accept an instance of PaymentMethodTokenizationRequest and then build an instance of [PaymentMethodTokenizationResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_class_commercepayments_PaymentMethodTokenizationResponse) based on the values that it receives from the payment gateway. The tokenizeResponse contains the results of the gateway's tokenization process, and if successful, the tokenized value. In this example, we call the setGatewayTokenEncrypted method to set the tokenized value in our tokenization response.

```

```

The setGatewayTokenEncrypted method is available in Salesforce API v52.0 and later. It uses Salesforce classic encryption to set the encrypted token value that you can store in GatewayTokenEncrypted on a CardPaymentMethod or DigitalWallet, or in GatewayToken on an AlternativePaymentMethod. We recommend using setGatewayTokenEncrypted to ensure your tokenized payment method values are encrypted and secure.

```

```

If the instantiated class already has a gateway token, setGatewayTokenEncrypted throws an error.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

While the PaymentMethodTokenizationResponse's [setGatewayToken](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayToken) method (available in API v48.0 and later) also returns a payment method token, the tokenized value isn't encrypted.

## Code Examples

```apex
global commercepayments.GatewayResponse processRequest(commercepayments.paymentGatewayContext gatewayContext) {
         commercepayments.RequestType requestType = gatewayContext.getPaymentRequestType();
         commercepayments.GatewayResponse response;
         try
         {
             if (requestType == commercepayments.RequestType.Tokenize) {
                     response = createTokenizeResponse((commercepayments.PaymentMethodTokenizationRequest)gatewayContext.getPaymentRequest());
             }
             //Add other else if statements for different request types as needed.
             return response;
         }
         catch(SalesforceValidationException e)
         {
              commercepayments.GatewayErrorResponse error = new commercepayments.GatewayErrorResponse('400', e.getMessage());
              return error;
         }
     }
```

```apex
public commercepayments.GatewayResponse createTokenizeResponse(commercepayments.PaymentMethodTokenizationRequest tokenizeRequest) {
         commercepayments.PaymentMethodTokenizationResponse tokenizeResponse = new commercepayments.PaymentMethodTokenizationResponse();
         tokenizeResponse.setGatewayTokenEncrypted(encryptedValue);
         tokenizeResponse.setGatewayTokenDetails(tokenDetails);
         tokenizeResponse.setGatewayAvsCode(avsCode);
         tokenizeResponse.setGatewayMessage(gatewayMessage);
         tokenizeResponse.setGatewayResultCode(resultcode);
         tokenizeResponse.setGatewayResultCodeDescription(resultCodeDescription);
         tokenizeResponse.setSalesforceResultCodeInfo(resultCodeInfo);
         tokenizeResponse.setGatewayDate(system.now());
         return tokenizeResponse;
     }
```

```apex
/** @description Method to set Gateway token to persist in Encrypted Text */
     global void setGatewayTokenEncrypted(String gatewayTokenEncrypted) {
         if (gatewayTokenSet)  {
             throwTokenError();
         }
         this.delegate.setGatewayTokenEncrypted(gatewayTokenEncrypted);
         gatewayTokenEncryptedSet = true;
     }
```
