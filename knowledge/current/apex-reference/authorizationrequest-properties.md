---
title: "AuthorizationRequest Properties"
domain: apex-reference
topic: authorizationrequest-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.841Z
keywords: [AuthorizationRequest, Properties, customer, account, where, authorization, performed., accountId, Signature, Property, Value, amount, comments, currencyIsoCode, paymentMethod]
---

# AuthorizationRequest Properties

> The customer account
      where
      the authorization is performed.

## AuthorizationRequest Properties

The following are properties for AuthorizationRequest.

-   **[accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_accountId)**  
    The customer account where the authorization is performed.
-   **[amount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_amount)**  
    The total amount of the authorization. Can be positive or negative.
-   **[comments](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_comments)**  
    Comments about the authorization. Users can enter comments to provide additional information.
-   **[currencyIsoCode](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_currencyIsoCode)**  
    The ISO currency code for the authorization request.
-   **[paymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_paymentMethod)**  
    The payment method used to process the authorization in the authorization request.

### accountId

The customer account where the authorization is performed.

#### Signature

global String accountId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### amount

The total amount of the authorization. Can be positive or negative.

#### Signature

global Double amount {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### comments

Comments about the authorization. Users can enter comments to provide additional information.

#### Signature

global String comments {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### currencyIsoCode

The ISO currency code for the authorization request.

#### Signature

global String currencyIsoCode {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### paymentMethod

The payment method used to process the authorization in the authorization request.

#### Signature

global AuthApiPaymentMethodRequest paymentMethod {get; set;}

#### Property Value

Type: [AuthApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_class_commercepayments_AuthApiPaymentMethodRequest "Sends information about a payment method to a gateway adapter during an authorization service call.")