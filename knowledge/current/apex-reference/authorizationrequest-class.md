---
title: "AuthorizationRequest Class"
domain: apex-reference
topic: authorizationrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.183Z
estimatedTokens: 1922
namespace: CommercePayments
keywords: [AuthorizationRequest, authorization, gateway, adapter, service, call, extends, BaseRequest, inherits, Usage, amount, accountId, comments, currencyIsoCode, paymentMethod]
---

# AuthorizationRequest Class

> Sends information about an authorization request to a gateway adapter
            during a service call. This class extends the BaseRequest class and inherits all its methods.

**Namespace:** `CommercePayments`

# AuthorizationRequest Class

Sends information about an authorization request to a gateway adapter during a service call. This class extends the BaseRequest class and inherits all its methods.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

This class contains information about a transaction authorization request. The gateway adapter reads fields from this class while constructing an authorization JSON request to send to the payment gateway. An object of this class is available by calling getPaymentRequest() in the [PaymentGatewayContext Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_class_commerce_payments_PaymentGatewayContext "Wraps the information related to a payment request.").

## Example

Creating a buildAuthRequest class to store information about the authorization request.

```

```

-   **[AuthorizationRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_constructors)**

-   **[AuthorizationRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_properties)**

-   **[AuthorizationRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_methods)**


## AuthorizationRequest Constructors

The following are constructors for AuthorizationRequest.

-   **[AuthorizationRequest(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_ctor)**
    Constructor for building the amount in an authorization request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### AuthorizationRequest(amount)

Constructor for building the amount in an authorization request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global AuthorizationRequest(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the authorization.

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

## AuthorizationRequest Methods

The following are methods for AuthorizationRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_equals)**
    Maintains the integrity of lists of type AuthorizationRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_hashCode)**
    Maintains the integrity of lists of type AuthorizationRequest by determining the uniqueness of the external object in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_commercepayments_AuthorizationRequest_toString)**
    Converts a date to a string.

### equals(obj)

Maintains the integrity of lists of type AuthorizationRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type AuthorizationRequest by determining the uniqueness of the external object in a list.

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
private String buildAuthRequest(commercepayments.AuthorizationRequest authRequest) {
        // Multiply amount by 100.0 to convert to cents
        String requestBody = createRequestBody(String.ValueOf((authRequest.amount*100.0).intValue()), authRequest);
        return requestBody;

        private String createRequestBody(String amount, commercepayments.AuthorizationRequest authRequest) {
        JSONGenerator jsonGeneratorInstance = JSON.createGenerator(true);
        String currencyIso = authRequest.currencyIsoCode;
        commercepayments.AuthApiPaymentMethodRequest paymentMethod = authRequest.paymentMethod;
        commercepayments.GatewayErrorResponse error;
        // Write data to the JSON string.
        jsonGeneratorInstance.writeStartObject();
        jsonGeneratorInstance.writeStringField('merchantAccount', '{!$Credential.Username}');
        jsonGeneratorInstance.writeStringField('reference', authRequest.comments == null ? 'randomstring' : authRequest.comments);

        if(currencyIso == null) {
            currencyIso = UserInfo.getDefaultCurrency();
        }

        jsonGeneratorInstance.writeFieldName('amount');
        jsonGeneratorInstance.writeStartObject();
        jsonGeneratorInstance.writeStringField('value', amount);
        jsonGeneratorInstance.writeStringField('currency', currencyIso);
        jsonGeneratorInstance.writeEndObject();

        commercepayments.CardPaymentMethodRequest cardPaymentMethod;
        if(paymentMethod != null) {
            cardPaymentMethod = paymentMethod.cardPaymentMethod;
            if (cardPaymentMethod != null) {
                if (cardPaymentMethod.CardCategory != null) {
                    if (commercepayments.CardCategory.CreditCard == cardPaymentMethod.CardCategory) {
                        jsonGeneratorInstance.writeFieldName('card');
                        jsonGeneratorInstance.writeStartObject();
                        if (cardPaymentMethod.cvv != null)
                            jsonGeneratorInstance.writeStringField('cvc', String.ValueOf(cardPaymentMethod.cvv));
                        if (cardPaymentMethod.cardholdername != null)
                            jsonGeneratorInstance.writeStringField('holderName', cardPaymentMethod.cardholdername);
                        if (cardPaymentMethod.cardnumber != null)
                            jsonGeneratorInstance.writeStringField('number', cardPaymentMethod.cardnumber);
                        if (cardPaymentMethod.expiryMonth != null && cardPaymentMethod.expiryYear != null ) {
                            String expMonth = ((String.ValueOf(cardPaymentMethod.expiryMonth)).length() == 1 ? '0' : '') + String.ValueOf(cardPaymentMethod.expiryMonth);
                            jsonGeneratorInstance.writeStringField('expiryMonth', expMonth);
                            jsonGeneratorInstance.writeStringField('expiryYear', String.ValueOf(cardPaymentMethod.expiryYear));
                        }
                        jsonGeneratorInstance.writeEndObject();
                    } else {
                    //Support for other card type
                    }
                } else {
                    throw new SampleValidationException('Required Field Missing : CardCategory');
                }
            } else {
                throw new SampleValidationException('Required Field Missing : CardPaymentMethod');
            }
        } else {
            throw new SampleValidationException('Required Field Missing : PaymentMethod');
        }
        jsonGeneratorInstance.writeEndObject();
        return jsonGeneratorInstance.getAsString();
    }
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- PaymentGatewayContext Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm)
- AuthorizationRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm)
- AuthorizationRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm)
- AuthorizationRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm)
- AuthorizationRequest(amount) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- accountId (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm)
- amount (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm)
- comments (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm)
