---
title: "CardPaymentMethodRequest Class"
domain: apex-reference
topic: cardpaymentmethodrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.328Z
estimatedTokens: 3602
namespace: CommercePayments
keywords: [CardPaymentMethodRequest, data, card, payment, gateway, adapter, service, call, Usage, cardCategory, accountId, autoPay, cardHolderFirstName, cardHolderLastName, cardHolderName]
---

# CardPaymentMethodRequest Class

> Sends
      data related to a card payment method to a gateway adapter during a service
      call.

**Namespace:** `CommercePayments`

# CardPaymentMethodRequest Class

Sends data related to a card payment method to a gateway adapter during a service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

This class contains details about the card used as a payment method for authorization, sale, or tokenization transaction requests. The gateway adapter reads the fields of this class object while constructing a transaction JSON request to send to the payment gateway. The object of this class is available as the cardPaymentMethod field in the [SaleApiPaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_class_commercepayments_SaleApiPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a sale service call."), [AuthApiPaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_class_commercepayments_AuthApiPaymentMethodRequest "Sends information about a payment method to a gateway adapter during an authorization service call."), and [PaymentMethodTokenizationRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_class_commercepayments_PaymentMethodTokenizationRequest "Stores data about a request to tokenize a card payment method. The tokenization process occurs in the payment gateway. This process replaces sensitive customer data, such as a card number or CVV, with unique identification symbols. The symbols are used while the data is handled by Salesforce, the payment gateway, and the customer bank, allowing Salesforce to store the token without storing sensitive customer data.").

## Example

This code sample retrieves the cardPaymentMethodRequest object from the paymentMethod class.

```

```

-   **[CardPaymentMethodRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_constructors)**

-   **[CardPaymentMethodRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_properties)**

-   **[CardPaymentMethodRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_methods)**


## CardPaymentMethodRequest Constructors

The following are constructors for CardPaymentMethodRequest.

-   **[CardPaymentMethodRequest(cardCategory)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_ctor)**
    Sets the cardCategory value for the card payment method request.

### CardPaymentMethodRequest(cardCategory)

Sets the cardCategory value for the card payment method request.

#### Signature

global CardPaymentMethodRequest(commercepayments.CardCategory cardCategory)

#### Parameters

cardCategory

Type: [CardCategory](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_CardCategory.htm "Defines whether the payment method represents a credit card or a debit card.")

Defines whether the card payment method is a credit card or a debit card.

## CardPaymentMethodRequest Properties

The following are properties for CardPaymentMethodRequest.

-   **[accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_accountId)**
    Customer account for this payment method.
-   **[autoPay](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_autoPay)**
    Indicates whether a token is being requested so that the payment method can be used for recurring payments.
-   **[cardCategory](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_cardCategory)**
    Indicates whether a card payment method is for a credit card or debit card.
-   **[cardHolderFirstName](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_cardHolderFirstName)**
    The first name of the cardholder for the card payment method.
-   **[cardHolderLastName](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_cardHolderLastName)**
    The last name of the cardholder for the card payment method.
-   **[cardHolderName](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_cardHolderName)**
    Full name of the cardholder on the card payment method.
-   **[cardNumber](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_cardNumber)**
    System-defined unique ID for the card payment method.
-   **[cardType](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_cardType)**
    Defines the credit card bank. Possible values are AmericanExpress, DinersClub, JCB, Maestro, MasterCard, andVisa.
-   **[cvv](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_cvv)**
    The card security code for the credit or debit card on a card payment method.
-   **[email](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_email)**
    Email address of the cardholder for the credit or debit card on a card payment method.
-   **[expiryMonth](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_expiryMonth)**
    Expiration month for the credit or debit card on a card payment method.
-   **[expiryYear](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_expiryYear)**
    Expiration year of the credit or debit card for the card payment method.
-   **[inputCardType](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_inputCardType)**
    Input field for the card type. This field doesn’t store the card type directly, but instead populates CardBin, LastFour, and DisplayCardNumber based on the value entered in inputCardType.
-   **[startMonth](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_startMonth)**
    The credit or debit card becomes valid on the first day of the startMonth in the startYear
-   **[startYear](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_startYear)**
    Year during which the credit or debit card becomes valid.

### accountId

Customer account for this payment method.

#### Signature

global String accountId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### autoPay

Indicates whether a token is being requested so that the payment method can be used for recurring payments.

#### Signature

global Boolean autoPay {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### cardCategory

Indicates whether a card payment method is for a credit card or debit card.

#### Signature

global commercepayments.CardCategory cardCategory {get; set;}

#### Property Value

Type: [CardCategory](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_CardCategory.htm "Defines whether the payment method represents a credit card or a debit card.")

### cardHolderFirstName

The first name of the cardholder for the card payment method.

#### Signature

global String cardHolderFirstName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### cardHolderLastName

The last name of the cardholder for the card payment method.

#### Signature

global String cardHolderLastName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### cardHolderName

Full name of the cardholder on the card payment method.

#### Signature

global String cardHolderName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### cardNumber

System-defined unique ID for the card payment method.

#### Signature

global String cardNumber {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### cardType

Defines the credit card bank. Possible values are AmericanExpress, DinersClub, JCB, Maestro, MasterCard, andVisa.

#### Signature

global commercepayments.CardType cardType {get; set;}

#### Property Value

Type: CardType

### cvv

The card security code for the credit or debit card on a card payment method.

#### Signature

global String cvv {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### email

Email address of the cardholder for the credit or debit card on a card payment method.

#### Signature

global String email {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### expiryMonth

Expiration month for the credit or debit card on a card payment method.

#### Signature

global Integer expiryMonth {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### expiryYear

Expiration year of the credit or debit card for the card payment method.

#### Signature

global Integer expiryYear {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### inputCardType

Input field for the card type. This field doesn’t store the card type directly, but instead populates CardBin, LastFour, and DisplayCardNumber based on the value entered in inputCardType.

#### Signature

global String inputCardType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### startMonth

The credit or debit card becomes valid on the first day of the startMonth in the startYear

#### Signature

global Integer startMonth {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### startYear

Year during which the credit or debit card becomes valid.

#### Signature

global Integer startYear {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

## CardPaymentMethodRequest Methods

The following are methods for CardPaymentMethodRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_equals)**
    Maintains the integrity of lists of type CardPaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_hashCode)**
    Maintains the integrity of lists of type CardPaymentMethodRequest.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_commercepayments_CardPaymentMethodRequest_toString)**
    Converts a date to a string.

### equals(obj)

Maintains the integrity of lists of type CardPaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type CardPaymentMethodRequest.

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

```
commercepayments.CardPaymentMethodRequest cardPaymentMethod = paymentMethod.cardPaymentMethod;
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- SaleApiPaymentMethodRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm)
- AuthApiPaymentMethodRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm)
- PaymentMethodTokenizationRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm)
- CardPaymentMethodRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm)
- CardPaymentMethodRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm)
- CardPaymentMethodRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm)
- CardPaymentMethodRequest(cardCategory) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm)
- CardCategory (atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_CardCategory.htm)
- accountId (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm)
