---
title: "AuthorizationReversalRequest Properties"
domain: apex-reference
topic: authorizationreversalrequest-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.863Z
keywords: [AuthorizationReversalRequest, Properties, References, customer, account, transaction, where, authorization, reversal, performed., accountId, Signature, Property, Value, amount, paymentAuthorizationId]
---

# AuthorizationReversalRequest Properties

> References the customer account for the transaction where the
      authorization reversal was performed.

## AuthorizationReversalRequest Properties

The following are properties for AuthorizationReversalRequest.

-   **[accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_accountId)**  
    References the customer account for the transaction where the authorization reversal was performed.
-   **[amount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_amount)**  
    The total amount of the authorization reversal request. Can be positive or negative.
-   **[paymentAuthorizationId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_paymentAuthorizationId)**  
    References the payment authorization to be reversed.

### accountId

References the customer account for the transaction where the authorization reversal was performed.

#### Signature

global String accountId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### amount

The total amount of the authorization reversal request. Can be positive or negative.

#### Signature

global Double amount {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### paymentAuthorizationId

References the payment authorization to be reversed.

#### Signature

global String paymentAuthorizationId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")