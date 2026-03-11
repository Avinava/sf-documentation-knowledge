---
title: "CardPaymentMethodRequest Properties"
domain: apex-reference
topic: cardpaymentmethodrequest-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.000Z
keywords: [CardPaymentMethodRequest, Properties, Customer, account, payment, method., accountId, Signature, Property, Value, autoPay, cardCategory, cardHolderFirstName, cardHolderLastName, cardHolderName, cardNumber, cardType, cvv, email, expiryMonth]
---

# CardPaymentMethodRequest Properties

> Customer account for this payment method.

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