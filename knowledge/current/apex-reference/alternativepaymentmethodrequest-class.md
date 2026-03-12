---
title: "AlternativePaymentMethodRequest Class"
domain: apex-reference
topic: alternativepaymentmethodrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.725Z
estimatedTokens: 1858
namespace: CommercePayments
keywords: [AlternativePaymentMethodRequest, contains, information, alternative, payment, required, gateway, process, request., Example, gatewayToken, accountId, email, gatewayTokenDetails, name, equals, obj, hashCode, toString]
---

# AlternativePaymentMethodRequest Class

> The class contains information about the alternative payment method that are required for
    a gateway to process the request.

**Namespace:** `CommercePayments`

# AlternativePaymentMethodRequest Class

The class contains information about the alternative payment method that are required for a gateway to process the request.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Example

```

```

-   **[AlternativePaymentMethodRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_constructors)**

-   **[AlternativePaymentMethodRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_properties)**

-   **[AlternativePaymentMethodRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_methods)**


## AlternativePaymentMethodRequest Constructors

The following are constructors for AlternativePaymentMethodRequest.

-   **[AlternativePaymentMethodRequest(gatewayToken)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_ctor)**
    Creates a new instance of the CommercePayments.AlternativePaymentMethodRequest class.

### AlternativePaymentMethodRequest(gatewayToken)

Creates a new instance of the CommercePayments.AlternativePaymentMethodRequest class.

#### Signature

public AlternativePaymentMethodRequest(String gatewayToken)

#### Parameters

gatewayToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A unique, alphanumeric ID, called a token, that a payment gateway generates when it first processes a payment. The token replaces the actual payment data so that the data is kept secure. This token is stored as encrypted text, and can be used for recurring payments.

## AlternativePaymentMethodRequest Properties

The following are properties for AlternativePaymentMethodRequest.

-   **[accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_accountId)**
    Salesforce account ID to which this payment method is linked.
-   **[email](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_email)**
    Email address of the card holder.
-   **[gatewayToken](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_gatewayToken)**
    A unique, alphanumeric ID, that a payment gateway generates when it first processes a payment.
-   **[gatewayTokenDetails](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_gatewayTokenDetails)**
    Information about the gateway token.
-   **[name](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_name)**
    Name that you assign to the PaymentMethod object.

### accountId

Salesforce account ID to which this payment method is linked.

#### Signature

public String accountId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### email

Email address of the card holder.

#### Signature

public String email {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### gatewayToken

A unique, alphanumeric ID, that a payment gateway generates when it first processes a payment.

The token replaces the actual payment data so that the data is kept secure. This token is stored as encrypted text, and can be used for recurring payments.

#### Signature

public String gatewayToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### gatewayTokenDetails

Information about the gateway token.

#### Signature

public String gatewayTokenDetails {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### name

Name that you assign to the PaymentMethod object.

#### Signature

public String name {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## AlternativePaymentMethodRequest Methods

The following are methods for AlternativePaymentMethodRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_equals)**
    Maintains the integrity of lists of type AlternativePaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_hashCode)**
    Maintains the integrity of lists of type AlternativePaymentMethodRequest by determining the uniqueness of the external object records in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_commercepayments_AlternativePaymentMethodRequest_toString)**
    Converts a date to a string.

### equals(obj)

Maintains the integrity of lists of type AlternativePaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.

#### Signature

public Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type AlternativePaymentMethodRequest by determining the uniqueness of the external object records in a list.

#### Signature

public Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a date to a string.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```
commercepayments.PostAuthApiPaymentMethodRequest apiPaymentMethod =(commercepayments.PostAuthApiPaymentMethodRequest) postAuthRequest.paymentMethod;
commercepayments.AlternativePaymentMethodRequest alternativePaymentMethod= (commercepayments.AlternativePaymentMethodRequest) apiPaymentMethod.alternativePaymentMethod;
String gatewayToken = (String)alternativePaymentMethod.gatewayToken;
String gatewayTokenDetails = (String)alternativePaymentMethod.gatewayTokenDetails;
String name = (String)alternativePaymentMethod.name;
String accountId = (String)alternativePaymentMethod.accountId;
String email = (String)alternativePaymentMethod.email;
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- AlternativePaymentMethodRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm)
- AlternativePaymentMethodRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm)
- AlternativePaymentMethodRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm)
- AlternativePaymentMethodRequest(gatewayToken) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- accountId (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm)
- email (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm)
- gatewayToken (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm)
- gatewayTokenDetails (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm)
