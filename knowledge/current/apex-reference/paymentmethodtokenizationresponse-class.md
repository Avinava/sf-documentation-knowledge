---
title: "PaymentMethodTokenizationResponse Class"
domain: apex-reference
topic: paymentmethodtokenizationresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.019Z
estimatedTokens: 4105
namespace: CommercePayments
keywords: [PaymentMethodTokenizationResponse, Gateway, response, sent, payment, gateway, adapters, tokenization, request., includes, method’s, token, value., Usage, Example, setAmount, amount, setAsync, async, setBankName]
---

# PaymentMethodTokenizationResponse Class

> Gateway response sent by payment gateway adapters for the payment
      method tokenization request. The response includes the payment method’s token ID
    value.

**Namespace:** `CommercePayments`

# PaymentMethodTokenizationResponse Class

Gateway response sent by payment gateway adapters for the payment method tokenization request. The response includes the payment method’s token ID value.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

The constructor of this class takes no arguments. For example:

CommercePayments.PaymentMethodTokenizationResponse pmtr = new CommercePayments.PaymentMethodTokenizationResponse();

After the payment gateway processes a tokenization request, the fields of PaymentMethodTokenizationResponse receive and store information from the gateway's response. The gateway's response shows whether the tokenization request was successful, the token value, and any additional messages or information about the tokenization process. You can then pass an instance of PaymentMethodTokenizationResponse to an authorization response or a sale response. This class is mapped to a response class in the Java layer.

## Example

This constructor builds a new instance of the PaymentMethodTokenizationResponse class.

```

```

PaymentMethodTokenizationResponse contains only setter methods. Each setter accepts a value from the payment gateway and use it to set an attribute of PaymentMethodTokenizationResponse.

The most important method in PaymentMethodTokenizationResponse is setGatewayTokenEncrypted, which uses [Salesforce encryption](https://developer.salesforce.com/docs/atlas.en-us.260.0.securityImplGuide.meta/securityImplGuide/fields_about_encrypted_fields.htm) to set an encrypted token value for a payment method. The setGatewayTokenEncrypted method is available in Salesforce API v52.0 and later. We recommend using it to ensure your tokenized payment method values are encrypted and secure. While the setGatewayToken method (available in earlier API versions) also returns a payment method token, the tokenized value isn't encrypted.

If the instantiated class already has a gateway token, setGatewayTokenEncrypted throws an error.

```

```

A typical instantiation of PaymentMethodTokenizationResponse sets the encrypted gateway token alongside the other tokenization response values sent by the gateway.

```

```

After you've built a PaymentMethodTokenizationResponse object and set the encrypted gateway token, pass the object to the setPaymentMethodTokenizationResponse method of an authorization response or a sale response.

Authorization Response

```

```

Sale Response

```

```

-   **[PaymentMethodTokenizationResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_methods)**


## PaymentMethodTokenizationResponse Methods

The following are methods for PaymentMethodTokenizationResponse.

-   **[setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setAmount)**
    Sets the amount for payment tokenization. Can be positive, negative, or zero.
-   **[setAsync(async)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setAsync)**
    Indicates whether the gateway response is received asynchronously (true) or not (false). When set to true, the saved payment method remains in a pending state until the async notification is received.
-   **[setBankName(bankName)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setBankName)**
    Sets the bank name for payment tokenization.
-   **[setChecksum(checksum)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setChecksum)**
    Sets the unique hash of the payment method that the gateway returned.
-   **[setCustomerReference(customerReference)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setCustomerReference)**
    Sets the customer reference number that the gateway returned.
-   **[setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayAvsCode)**
    Sets the AVS (address verification system) result code information that the gateway returned. Maximum length of 64 characters.
-   **[setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayDate)**
    Sets the date that the tokenization occurred. Some gateways don’t send this value.
-   **[setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayMessage)**
    Sets error messages that the gateway returned for the tokenization request. Maximum length of 255 characters.
-   **[setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayReferenceDetails)**
    Sets any additional reference details that the gateway returned.
-   **[setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayReferenceNumber)**
    Sets the reference number that the gateway returned.
-   **[setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayResultCode)**
    Sets a gateway-specific result code. The code may be mapped to a Salesforce-specific result code. Maximum length of 64 characters.
-   **[setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayResultCodeDescription)**
    Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.
-   **[setGatewayToken(gatewayToken)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayToken)**
    Sets the gateway token value that the gateway returned.
-   **[setGatewayTokenDetails(gatewayTokenDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayTokenDetails)**
    Sets any additional information that the gateway returned about the payment token.
-   **[setGatewayTokenEncrypted(gatewayTokenEncrypted)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setGatewayTokenEncrypted)**
    Sets the value of the gatewayTokenEncrypted field on a CardPaymentMethod or DigitalWallet object.
-   **[setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_commercepayments_PaymentMethodTokenizationResponse_setSalesforceResultCodeInfo)**
    Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

### setAmount(amount)

Sets the amount for payment tokenization. Can be positive, negative, or zero.

#### Signature

public void setAmount(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: void

### setAsync(async)

Indicates whether the gateway response is received asynchronously (true) or not (false). When set to true, the saved payment method remains in a pending state until the async notification is received.

#### Signature

public void setAsync(Boolean async)

#### Parameters

async

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

### setBankName(bankName)

Sets the bank name for payment tokenization.

#### Signature

public void setBankName(String bankName)

#### Parameters

bankName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setChecksum(checksum)

Sets the unique hash of the payment method that the gateway returned.

#### Signature

public void setChecksum(String checksum)

#### Parameters

checksum

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setCustomerReference(customerReference)

Sets the customer reference number that the gateway returned.

#### Signature

public void setCustomerReference(String customerReference)

#### Parameters

customerReference

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayAvsCode(gatewayAvsCode)

Sets the AVS (address verification system) result code information that the gateway returned. Maximum length of 64 characters.

#### Signature

global void setGatewayAvsCode(String gatewayAvsCode)

#### Parameters

gatewayAvsCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Used to verify the address mapped to a payment method when the payments platform requests tokenization from the payment gateway.

#### Return Value

Type: void

### setGatewayDate(gatewayDate)

Sets the date that the tokenization occurred. Some gateways don’t send this value.

#### Signature

global void setGatewayDate(Datetime gatewayDate)

#### Parameters

gatewayDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets error messages that the gateway returned for the tokenization request. Maximum length of 255 characters.

#### Signature

global void setGatewayMessage(String gatewayMessage)

#### Parameters

gatewayMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayReferenceDetails(gatewayReferenceDetails)

Sets any additional reference details that the gateway returned.

#### Signature

public void setGatewayReferenceDetails(String gatewayReferenceDetails)

#### Parameters

gatewayReferenceDetails

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayReferenceNumber(gatewayReferenceNumber)

Sets the reference number that the gateway returned.

#### Signature

public void setGatewayReferenceNumber(String gatewayReferenceNumber)

#### Parameters

gatewayReferenceNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayResultCode(gatewayResultCode)

Sets a gateway-specific result code. The code may be mapped to a Salesforce-specific result code. Maximum length of 64 characters.

#### Signature

global void setGatewayResultCode(String gatewayResultCode)

#### Parameters

gatewayResultCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Gateway-specific result code. Must be used to map a Salesforce-specific result code.

#### Return Value

Type: void

### setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.

#### Signature

global void setGatewayResultCodeDescription(String gatewayResultCodeDescription)

#### Parameters

gatewayResultCodeDescription

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Provides additional information about the result code and why the gateway returned the specific code. Descriptions will vary between different gateways.

#### Return Value

Type: void

### setGatewayToken(gatewayToken)

Sets the gateway token value that the gateway returned.

#### Signature

global void setGatewayToken(String gatewayToken)

#### Parameters

gatewayToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The gateway token that the payment gateway sends following a tokenization request.

For the CardPaymentMethod and DigitalWallet objects, use the gatewyTokenEncrypted parameter, which encrypts the token value.

#### Return Value

Type: void

### setGatewayTokenDetails(gatewayTokenDetails)

Sets any additional information that the gateway returned about the payment token.

#### Signature

global void setGatewayTokenDetails(String gatewayTokenDetails)

#### Parameters

gatewayTokenDetails

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayTokenEncrypted(gatewayTokenEncrypted)

Sets the value of the gatewayTokenEncrypted field on a CardPaymentMethod or DigitalWallet object.

#### Signature

global void setGatewayTokenEncrypted(String gatewayTokenEncrypted)

#### Parameters

gatewayTokenEncrypted

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The gateway token that the payment gateway sends following a tokenization request. Salesforce Payments uses [Salesforce encryption](https://developer.salesforce.com/docs/atlas.en-us.260.0.securityImplGuide.meta/securityImplGuide/fields_about_encrypted_fields.htm) to encrypt the token value.

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

Type: [SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")

Description of the Salesforce result code value.

#### Return Value

Type: void

## Code Examples

```
commercepayments.PaymentMethodTokenizationResponse tokenizeResponse = new commercepayments.PaymentMethodTokenizationResponse();
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

```apex
public commercepayments.GatewayResponse createTokenizeResponse(commercepayments.PaymentMethodTokenizationRequest tokenizeRequest) {
         commercepayments.PaymentMethodTokenizationResponse tokenizeResponse = new commercepayments.PaymentMethodTokenizationResponse();
         tokenizeResponse.setGatewayTokenEncrypted(gatewayTokenEncrypted);
         tokenizeResponse.setGatewayTokenDetails(gatewayTokenDetails);
         tokenizeResponse.setGatewayAvsCode(gatewayAvsCode);
         tokenizeResponse.setGatewayMessage(gatewayMessage);
         tokenizeResponse.setGatewayResultCode(gatewayResultCode);
         tokenizeResponse.setGatewayResultCodeDescription(gatewayResultCodeDescription);
         tokenizeResponse.setSalesforceResultCodeInfo(SUCCESS_SALESFORCE_RESULT_CODE_INFO);
         tokenizeResponse.setGatewayDate(system.now());
         return tokenizeResponse;
     }
```

```apex
public commercepayments.GatewayResponse createAuthResponse(commercepayments.AuthorizationRequest authRequest) {
         commercepayments.AuthorizationResponse authResponse = new commercepayments.AuthorizationResponse();
         commercepayments.PaymentMethodTokenizationResponse paymentMethodTokenizationResponse = new commercepayments.PaymentMethodTokenizationResponse();
         if(authRequest.amount!=null )
         {
             authResponse.setAmount(authRequest.amount);
         }
         else
         {
             throw new SalesforceValidationException('Required Field Missing : Amount');
         }
 
         authResponse.setGatewayResultCode('00');
         authResponse.setGatewayResultCodeDescription('Transaction Normal');
         authResponse.setGatewayAuthCode('SF'+getRandomNumber(6));
         authResponse.setGatewayReferenceNumber(getRandomNumber(10));
         authResponse.setSalesforceResultCodeInfo(SUCCESS_SALESFORCE_RESULT_CODE_INFO);
         authResponse.setGatewayDate(system.now());
         paymentMethodTokenizationResponse.setGatewayTokenEncrypted(gatewayTokenEncrypted);
         authResponse.setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse);
         return authResponse;
     }
```

```apex
public commercepayments.GatewayResponse createSaleResponse(commercepayments.SaleRequest saleRequest) {
         commercepayments.SaleResponse saleResponse = new commercepayments.SaleResponse();
         commercepayments.PaymentMethodTokenizationResponse paymentMethodTokenizationResponse = new commercepayments.PaymentMethodTokenizationResponse();
         if(saleRequest.amount!=null )
         {
             saleResponse.setAmount(saleRequest.amount);
         }
         else
         {
              throw new SalesforceValidationException('Required Field Missing : Amount');
         }
 
         system.debug('Response - success');
         saleResponse.setGatewayDate(system.now());
         saleResponse.setGatewayResultCode('00');
         saleResponse.setGatewayResultCodeDescription('Transaction Normal');
         saleResponse.setGatewayReferenceNumber('SF'+getRandomNumber(6));
         saleResponse.setSalesforceResultCodeInfo(SUCCESS_SALESFORCE_RESULT_CODE_INFO);
         paymentMethodTokenizationResponse.setGatewayTokenEncrypted(gatewayTokenEncrypted);
         saleResponse.setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse);
         return saleResponse;
     }
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- PaymentMethodTokenizationResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
- setAmount(amount) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
- setAsync(async) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
- setBankName(bankName) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
- setChecksum(checksum) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
- setCustomerReference(customerReference) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
- setGatewayAvsCode(gatewayAvsCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
- setGatewayDate(gatewayDate) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
- setGatewayMessage(gatewayMessage) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm)
