---
title: "AlternativePaymentMethodResponse Class"
domain: apex-reference
topic: alternativepaymentmethodresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.158Z
estimatedTokens: 1264
namespace: CommercePayments
keywords: [AlternativePaymentMethodResponse, alternative, payment, setAccountId, accountId, setComments, comments, setEmail, email, setGatewayToken, gatewayToken, setGatewayTokenDetails, gatewayTokenDetails, setName]
---

# AlternativePaymentMethodResponse Class

> The class contains the response details of the alternative payment method.

**Namespace:** `CommercePayments`

# AlternativePaymentMethodResponse Class

The class contains the response details of the alternative payment method.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Example

```

```

-   **[AlternativePaymentMethodResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_commercepayments_AlternativePaymentMethodResponse_methods)**


## AlternativePaymentMethodResponse Methods

The following are methods for AlternativePaymentMethodResponse.

-   **[setAccountId(accountId)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_commercepayments_AlternativePaymentMethodResponse_setAccountId)**
    Sets the ID of the Salesforce payments account to which the payment method is linked.
-   **[setComments(comments)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_commercepayments_AlternativePaymentMethodResponse_setComments)**
    Sets the notes about the payment method added by users.
-   **[setEmail(email)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_commercepayments_AlternativePaymentMethodResponse_setEmail)**
    Sets the email ID of the card holder.
-   **[setGatewayToken(gatewayToken)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_commercepayments_AlternativePaymentMethodResponse_setGatewayToken)**
    Sets the token ID that a payment gateway generates when it first processes a payment.
-   **[setGatewayTokenDetails(gatewayTokenDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_commercepayments_AlternativePaymentMethodResponse_setGatewayTokenDetails)**
    Sets the details about the payment gateway token.
-   **[setName(name)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_commercepayments_AlternativePaymentMethodResponse_setName)**
    Sets the name that is assigned to the PaymentMethod object.

### setAccountId(accountId)

Sets the ID of the Salesforce payments account to which the payment method is linked.

#### Signature

public void setAccountId(Id accountId)

#### Parameters

accountId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

Salesforce payments account ID.

#### Return Value

Type: void

### setComments(comments)

Sets the notes about the payment method added by users.

#### Signature

public void setComments(String comments)

#### Parameters

comments

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Notes about the payment method added by users, maximum 1000 characters.

#### Return Value

Type: void

### setEmail(email)

Sets the email ID of the card holder.

#### Signature

public void setEmail(String email)

#### Parameters

email

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Email ID of the card holder.

#### Return Value

Type: void

### setGatewayToken(gatewayToken)

Sets the token ID that a payment gateway generates when it first processes a payment.

#### Signature

public void setGatewayToken(String gatewayToken)

#### Parameters

gatewayToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A unique, alphanumeric ID, called a token, that a payment gateway generates when it first processes a payment. The token replaces the actual payment data so that the data is kept secure. This token is stored as encrypted text, and can be used for recurring payments.

#### Return Value

Type: void

### setGatewayTokenDetails(gatewayTokenDetails)

Sets the details about the payment gateway token.

#### Signature

public void setGatewayTokenDetails(String gatewayTokenDetails)

#### Parameters

gatewayTokenDetails

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Detailed information about the gateway token.

#### Return Value

Type: void

### setName(name)

Sets the name that is assigned to the PaymentMethod object.

#### Signature

public void setName(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name that you assign to the payment method object.

#### Return Value

Type: void

## Code Examples

```
commercepayments.AlternativePaymentMethodResponse response = new commercepayments.AlternativePaymentMethodResponse();
response.setEmail('alternativePaymentMethod');
response.setEmail('foo@foo.com');
response.setGatewayToken('NMoPoIOnTZSaRaWcV7gUUXe');
response.setGatewayTokenDetails('gateway token details');
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- AlternativePaymentMethodResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm)
- setAccountId(accountId) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm)
- setComments(comments) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm)
- setEmail(email) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm)
- setGatewayToken(gatewayToken) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm)
- setGatewayTokenDetails(gatewayTokenDetails) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm)
- setName(name) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
