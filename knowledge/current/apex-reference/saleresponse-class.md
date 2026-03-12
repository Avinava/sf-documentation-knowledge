---
title: "SaleResponse Class"
domain: apex-reference
topic: saleresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.509Z
estimatedTokens: 3326
namespace: CommercePayments
keywords: [SaleResponse, sent, payment, gateway, adapters, sales, service, Usage, setAmount, amount, setAsync, async, setGatewayAvsCode, gatewayAvsCode, setGatewayDate]
---

# SaleResponse Class

> Response sent by payment gateway adapters for a sales
    service.

**Namespace:** `CommercePayments`

# SaleResponse Class

Response sent by payment gateway adapters for a sales service.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

The constructor of this class takes no arguments. For example:

CommercePayments.SaleResponse slr CommercePayments.SaleResponse();

This class contains details about a customer card that was used as a payment method for Authorization, Sale, or Tokenization request. The gateway adapter reads the fields of this class while constructing a transaction JSON request, which it then sends to the payment gateway. The object of this class is made available by the cardPaymentMethod field in [SaleApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_class_commercepayments_SaleApiPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a sale service call.") and [AuthApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_class_commercepayments_AuthApiPaymentMethodRequest "Sends information about a payment method to a gateway adapter during an authorization service call.").

## Example

This code sample builds a SaleResponse object.

```

```

-   **[SaleResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_methods)**


## SaleResponse Methods

The following are methods for SaleResponse.

-   **[setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setAmount)**
    Sets the transaction amount. Must be a non-negative value.
-   **[setAsync(async)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setAsync)**
    Indicates whether the gateway response is received asynchronously (true) or not (false). When set to true, the sale payment record remains in a pending state until the async notification is received.
-   **[setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setGatewayAvsCode)**
    Sets the AVS (address verification system) result code information that the gateway returned. Maximum length of 64 characters.
-   **[setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setGatewayDate)**
    Sets the date that the sale occurred. Some gateways don’t send this value.
-   **[setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setGatewayMessage)**
    Sets error messages that the gateway returned for the sale request. Maximum length of 255 characters.
-   **[setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setGatewayReferenceDetails)**
    Sets additional data that you can use for subsequent sales. You can use any data that isn’t normalized in financial entities. This field has a maximum length of 1000 characters and can store data as JSON or XML.
-   **[setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setGatewayReferenceNumber)**
    Sets the unique gateway reference number for the transaction that the gateway returned. Maximum length of 255 characters.
-   **[setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setGatewayResultCode)**
    Sets a gateway-specific result code. The code may be mapped to a Salesforce-specific result code. Maximum length of 64 characters.
-   **[setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setGatewayResultCodeDescription)**
    Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.
-   **[setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_AuthorizationResponse_setPaymentMethodTokenizationResponse)**
    Sets information from the gateway about the tokenized payment method.
-   **[setRetryCategory(retryCategory)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setRetryCategory)**
    Sets the retry category returned by the payment gateway for the failed payment for a batch flow.
-   **[setRetryDecision(retryDecision)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setRetryDecision)**
    Sets the retry decision.
-   **[setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_commercepayments_SaleResponse_setSalesforceResultCodeInfo)**
    Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

### setAmount(amount)

Sets the transaction amount. Must be a non-negative value.

#### Signature

global void setAmount(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the transaction.

#### Return Value

Type: void

### setAsync(async)

Indicates whether the gateway response is received asynchronously (true) or not (false). When set to true, the sale payment record remains in a pending state until the async notification is received.

#### Signature

public void setAsync(Boolean async)

#### Parameters

async

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

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

Sets the date that the sale occurred. Some gateways don’t send this value.

#### Signature

global void setGatewayDate(Datetime gatewayDate)

#### Parameters

gatewayDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets error messages that the gateway returned for the sale request. Maximum length of 255 characters.

#### Signature

global void setGatewayMessage(String gatewayMessage)

#### Parameters

gatewayMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayReferenceDetails(gatewayReferenceDetails)

Sets additional data that you can use for subsequent sales. You can use any data that isn’t normalized in financial entities. This field has a maximum length of 1000 characters and can store data as JSON or XML.

#### Signature

global void setGatewayReferenceDetails(String gatewayReferenceDetails)

#### Parameters

gatewayReferenceDetails

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayReferenceNumber(gatewayReferenceNumber)

Sets the unique gateway reference number for the transaction that the gateway returned. Maximum length of 255 characters.

#### Signature

global void setGatewayReferenceNumber(String gatewayReferenceNumber)

#### Parameters

gatewayReferenceNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Unique authorization ID created by the payment gateway.

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

Description of the gateway’s result code. Use this field to learn more about why the gateway returned a certain result code.

#### Return Value

Type: void

### setPaymentMethodTokenizationResponse(paymentMethodTokenizationResponse)

Sets information from the gateway about the tokenized payment method.

#### Signature

global void setPaymentMethodTokenizationResponse(commercepayments.PaymentMethodTokenizationResponse paymentMethodTokenizationResponse)

#### Parameters

paymentMethodTokenizationResponse

Type: [PaymentMethodTokenizationResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_class_commercepayments_PaymentMethodTokenizationResponse "Gateway response sent by payment gateway adapters for the payment method tokenization request. The response includes the payment method’s token ID value.")

Gateway response sent by payment gateway adapters for the payment method tokenization request. The response includes the payment method’s token ID value.

#### Return Value

Type: void

### setRetryCategory(retryCategory)

Sets the retry category returned by the payment gateway for the failed payment for a batch flow.

#### Signature

public void setRetryCategory(commercepayments.RetryCategory retryCategory)

#### Parameters

retryCategory

Type: commercepayments.[RetryCategory](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_RetryCategory.htm "Specifies the retry category.")

Specifies the payment failure category used to determine retry eligibility.

#### Return Value

Type: void

### setRetryDecision(retryDecision)

Sets the retry decision.

#### Signature

public void setRetryDecision(commercepayments.RetryDecision retryDecision)

#### Parameters

retryDecision

Type: commercepayments.[RetryDecision](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_RetryDecision.htm "Specifies the retry decision.")

Determines whether the payment operation can be retried based on the retry category.

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

Type: [SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Return Value

Type: void

## Code Examples

```
commercepayments.SaleResponse saleResponse = new commercepayments.SaleResponse();
saleResponse.setGatewayReferenceDetails("refDetailString");
saleResponse.setGatewayResultCode("res_code");
saleResponse.setGatewayResultCodeDescription("");
saleResponse.setGatewayReferenceNumber("");
saleResponse.setSalesforceResultCodeInfo(getSalesforceResultCodeInfo(commercepayments.SalesforceResultCode.SUCCESS.name()));
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- SaleApiPaymentMethodRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm)
- AuthApiPaymentMethodRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm)
- SaleResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm)
- setAmount(amount) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm)
- setAsync(async) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm)
- setGatewayAvsCode(gatewayAvsCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm)
- setGatewayDate(gatewayDate) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm)
- setGatewayMessage(gatewayMessage) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm)
- setGatewayReferenceDetails(gatewayReferenceDetails) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm)
