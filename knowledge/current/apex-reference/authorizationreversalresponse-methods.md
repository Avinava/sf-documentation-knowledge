---
title: "AuthorizationReversalResponse Methods"
domain: apex-reference
topic: authorizationreversalresponse-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.873Z
keywords: [AuthorizationReversalResponse, Methods, Contains, amount, authorization, reversal., Must, non-zero, value., setAmount, Signature, Parameters, Return, Value, setGatewayAvsCode, gatewayAvsCode, setGatewayDate, gatewayDate, setGatewayMessage, gatewayMessage]
---

# AuthorizationReversalResponse Methods

> Contains the amount of the authorization reversal. Must be a non-zero
      value.

## AuthorizationReversalResponse Methods

The following are methods for AuthorizationReversalResponse.

-   **[setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_commercepayments_AuthorizationReversalResponse_setAmount)**  
    Contains the amount of the authorization reversal. Must be a non-zero value.
-   **[setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_commercepayments_AuthorizationReversalResponse_setGatewayAvsCode)**  
    Sets the AVS (Address Verification System) result code that the gateway returned. Maximum length of 64 characters.
-   **[setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_commercepayments_AuthorizationReversalResponse_setGatewayDate)**  
    Sets the date that the authorization reversal request occurred in the payment gateway. Some gateways don't send this value.
-   **[setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_commercepayments_AuthorizationReversalResponse_setGatewayMessage)**  
    Sets error messages that the gateway returned for the authorization reversal request. Maximum length of 255 characters.
-   **[setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_commercepayments_AuthorizationReversalResponse_setGatewayReferenceDetails)**  
    Stores data that you can use for subsequent authorizations. You can use any data that isn’t normalized in financial entities. This field has a maximum length of 1000 characters and can store data as JSON or XML.
-   **[setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_commercepayments_AuthorizationReversalResponse_setGatewayReferenceNumber)**  
    Sets a unique gateway reference number for the transaction that the gateway returned. Maximum length of 255 characters.
-   **[setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_commercepayments_AuthorizationReversalResponse_setGatewayResultCode)**  
    Sets a gateway-specific result code. The code can be mapped to a Salesforce-specific result code. Maximum length of 64 characters.
-   **[setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_commercepayments_AuthorizationReversalResponse_setGatewayResultCodeDescription)**  
    Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.
-   **[setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_commercepayments_AuthorizationReversalResponse_setSalesforceResultCodeInfo)**  
    Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

### setAmount(amount)

Contains the amount of the authorization reversal. Must be a non-zero value.

#### Signature

global void setAmount(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Return Value

Type: void

### setGatewayAvsCode(gatewayAvsCode)

Sets the AVS (Address Verification System) result code that the gateway returned. Maximum length of 64 characters.

#### Signature

global void setGatewayAvsCode(String gatewayAvsCode)

#### Parameters

gatewayAvsCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Used to verify the address mapped to a payment method when the payments platform requests tokenization from the payment gateway.

#### Return Value

Type: void

### setGatewayDate(gatewayDate)

Sets the date that the authorization reversal request occurred in the payment gateway. Some gateways don't send this value.

#### Signature

global void setGatewayDate(Datetime gatewayDate)

#### Parameters

gatewayDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets error messages that the gateway returned for the authorization reversal request. Maximum length of 255 characters.

#### Signature

global void setGatewayMessage(String gatewayMessage)

#### Parameters

gatewayMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayReferenceDetails(gatewayReferenceDetails)

Stores data that you can use for subsequent authorizations. You can use any data that isn’t normalized in financial entities. This field has a maximum length of 1000 characters and can store data as JSON or XML.

#### Signature

global void setGatewayReferenceDetails(String gatewayReferenceDetails)

#### Parameters

gatewayReferenceDetails

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayReferenceNumber(gatewayReferenceNumber)

Sets a unique gateway reference number for the transaction that the gateway returned. Maximum length of 255 characters.

#### Signature

global void setGatewayReferenceNumber(String gatewayReferenceNumber)

#### Parameters

gatewayReferenceNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Unique reference ID created by the payment gateway.

#### Return Value

Type: void

### setGatewayResultCode(gatewayResultCode)

Sets a gateway-specific result code. The code can be mapped to a Salesforce-specific result code. Maximum length of 64 characters.

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

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

Type: SalesforceResultCodeInfo

Description of the Salesforce result code value.

#### Return Value

Type: void