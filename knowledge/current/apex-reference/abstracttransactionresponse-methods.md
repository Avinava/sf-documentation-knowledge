---
title: "AbstractTransactionResponse Methods"
domain: apex-reference
topic: abstracttransactionresponse-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.801Z
keywords: [AbstractTransactionResponse, Methods, Sets, transaction, amount., Must, non-negative, value., setAmount, amount, Signature, Parameters, Return, Value, setGatewayAvsCode, gatewayAvsCode, setGatewayDate, gatewayDate, setGatewayMessage, gatewayMessage]
---

# AbstractTransactionResponse Methods

> Sets the transaction amount. Must be a non-negative
    value.

## AbstractTransactionResponse Methods

The following are methods for AbstractTransactionResponse.

-   **[setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setAmount)**  
    Sets the transaction amount. Must be a non-negative value.
-   **[setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayAvsCode)**  
    Sets the AVS (address verification system) result code that the gateway returned. Maximum length of 64 characters.
-   **[setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayDate)**  
    Sets the date that the notification occurred. Some gateways don’t send this value.
-   **[setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayMessage)**  
    Sets error messages that the gateway returned for the notification request. Maximum length of 255 characters.
-   **[setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayReferenceDetails)**  
    Sets the payment gateway’s reference details.
-   **[setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayReferenceNumber)**  
    Sets the payment gateway’s reference number.
-   **[setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayResultCode)**  
    Sets a gateway-specific result code. You can map the result code to a Salesforce-specific result code. Maximum length of 64 characters.
-   **[setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setGatewayResultCodeDescription)**  
    Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.
-   **[setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_commercepayments_AbstractTransactionResponse_setSalesforceResultCodeInfo)**  
    Sets the Salesforce-specific result code information.

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

### setGatewayAvsCode(gatewayAvsCode)

Sets the AVS (address verification system) result code that the gateway returned. Maximum length of 64 characters.

#### Signature

global void setGatewayAvsCode(String gatewayAvsCode)

#### Parameters

gatewayAvsCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Used to verify the address mapped to a payment method when the payments platform requests tokenization from the payment gateway.

#### Return Value

Type: void

### setGatewayDate(gatewayDate)

Sets the date that the notification occurred. Some gateways don’t send this value.

#### Signature

global void setGatewayDate(Datetime gatewayDate)

#### Parameters

gatewayDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The date that the transaction occurred.

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets error messages that the gateway returned for the notification request. Maximum length of 255 characters.

#### Signature

global void setGatewayMessage(String gatewayMessage)

#### Parameters

gatewayMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The message that the gateway returned with the transaction request. Contains additional information about the transaction.

#### Return Value

Type: void

### setGatewayReferenceDetails(gatewayReferenceDetails)

Sets the payment gateway’s reference details.

#### Signature

global void setGatewayReferenceDetails(String gatewayReferenceDetails)

#### Parameters

gatewayReferenceDetails

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Provides information about the gateway communication.

#### Return Value

Type: void

### setGatewayReferenceNumber(gatewayReferenceNumber)

Sets the payment gateway’s reference number.

#### Signature

global void setGatewayReferenceNumber(String gatewayReferenceNumber)

#### Parameters

gatewayReferenceNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Unique transaction ID created by the payment gateway.

#### Return Value

Type: void

### setGatewayResultCode(gatewayResultCode)

Sets a gateway-specific result code. You can map the result code to a Salesforce-specific result code. Maximum length of 64 characters.

#### Signature

global void setGatewayResultCode(String gatewayResultCode)

#### Parameters

gatewayResultCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Gateway-specific result code. Must be mapped to a Salesforce-specific result code.

#### Return Value

Type: void

### setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.

#### Signature

global void setGatewayResultCodeDescription(String gatewayResultCodeDescription)

#### Parameters

gatewayResultCodeDescription

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Provides additional information about the result code and why the gateway returned the specific code. Descriptions vary between different gateways.

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

Type: [commercepayments.SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")

Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Return Value

Type: void