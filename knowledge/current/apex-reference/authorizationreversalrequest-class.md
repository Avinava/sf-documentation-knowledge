---
title: "AuthorizationReversalRequest Class"
domain: apex-reference
topic: authorizationreversalrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.208Z
estimatedTokens: 1693
namespace: CommercePayments
keywords: [AuthorizationReversalRequest, authorization, reversal, gateway, adapter, service, call, amount, authorizationId, accountId, paymentAuthorizationId, equals, obj, hashCode, toString]
---

# AuthorizationReversalRequest Class

> Sends information about an authorization reversal request to a gateway
      adapter during a service call.

**Namespace:** `CommercePayments`

# AuthorizationReversalRequest Class

Sends information about an authorization reversal request to a gateway adapter during a service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Example

Add your reversal classes to your payment gateway adapter. We recommend adding AuthorizationReversal as a possible requestType value when calling processRequest on the gateway’s response.

```

```

Then, add a class that sets the amount of the authorization reversal request, as well as gateway information and the Salesforce result code.

```

```

-   **[AuthorizationReversalRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_constructors)**

-   **[AuthorizationReversalRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_properties)**

-   **[AuthorizationReversalRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_methods)**


## AuthorizationReversalRequest Constructors

The following are constructors for AuthorizationReversalRequest.

-   **[AuthorizationReversalRequest(amount, authorizationId)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_ctor)**
    Constructor for building the amount in an authorization reversal request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### AuthorizationReversalRequest(amount, authorizationId)

Constructor for building the amount in an authorization reversal request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global AuthorizationReversalRequest(Double amount, String authorizationId)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the authorization reversal request.

authorizationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The authorization request to be reversed.

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

## AuthorizationReversalRequest Methods

The following are methods for AuthorizationReversalRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_equals)**
    Maintains the integrity of lists of type AuthorizationReversalRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_hashCode)**
    Maintains the integrity of lists of type AuthorizationReversalRequest by determining the uniqueness of the external object in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_commercepayments_AuthorizationReversalRequest_toString)**
    Converts a date to a string.

### equals(obj)

Maintains the integrity of lists of type AuthorizationReversalRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type AuthorizationReversalRequest by determining the uniqueness of the external object in a list.

#### Signature

global Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a date to a string.

#### Signature

global String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
global commercepayments.GatewayResponse processRequest(commercepayments.paymentGatewayContext gatewayContext) {
        commercepayments.RequestType requestType = gatewayContext.getPaymentRequestType();
        commercepayments.GatewayResponse response;
        
        try {
        //add other requestType values here
        //..
        else if (requestType == commercepayments.RequestType.AuthorizationReversal) {
                response = createAuthReversalResponse((commercepayments.AuthorizationReversalRequest)gatewayContext.getPaymentRequest());}
        
        return response;
```

```apex
global commercepayments.GatewayResponse createAuthReversalResponse(commercepayments.AuthorizationReversalRequest authReversalRequest) {
        commercepayments.AuthorizationReversalResponse authReversalResponse = new commercepayments.AuthorizationReversalResponse();
        if(authReversalRequest.amount!=null )
        {
            authReversalResponse.setAmount(authReversalRequest.amount);
        }
        else
        {
             throw new SalesforceValidationException('Required Field Missing : Amount');             
        }
   
        system.debug('Response - success');
        authReversalResponse.setGatewayDate(system.now());
        authReversalResponse.setGatewayResultCode('00');
        authReversalResponse.setGatewayResultCodeDescription('Transaction Normal');
        authReversalResponse.setGatewayReferenceNumber('SF'+getRandomNumber(6));
        authReversalResponse.setSalesforceResultCodeInfo(SUCCESS_SALESFORCE_RESULT_CODE_INFO);
        return authReversalResponse;
    }
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- AuthorizationReversalRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm)
- AuthorizationReversalRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm)
- AuthorizationReversalRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm)
- AuthorizationReversalRequest(amount, authorizationId) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- accountId (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm)
- amount (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm)
- paymentAuthorizationId (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm)
