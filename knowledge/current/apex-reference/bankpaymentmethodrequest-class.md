---
title: "BankPaymentMethodRequest Class"
domain: apex-reference
topic: bankpaymentmethodrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.235Z
estimatedTokens: 2999
namespace: CommercePayments
keywords: [BankPaymentMethodRequest, data, bank, payment, gateway, adapter, service, call, Usage, accountHolderFirstName, accountHolderLastName, accountHolderName, accountHolderType, accountId, accountNumber]
---

# BankPaymentMethodRequest Class

> Sends data related to a bank payment method to a gateway adapter
      during a service call.

**Namespace:** `CommercePayments`

# BankPaymentMethodRequest Class

Sends data related to a bank payment method to a gateway adapter during a service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Use the BankPaymentMethodRequest class to include bank payment details in a Tokenize request. The gateway adapter reads the fields from this class when constructing the tokenized JSON request for the payment gateway. You can create an instance of this class by calling bankPaymentMethod on the PaymentMethodTokenizationRequest class.

## Example

```

```

-   **[BankPaymentMethodRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_properties)**

-   **[BankPaymentMethodRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_methods)**


## BankPaymentMethodRequest Properties

The following are properties for BankPaymentMethodRequest.

-   **[accountHolderFirstName](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_accountHolderFirstName)**
    The first name of the account holder for the bank payment method.
-   **[accountHolderLastName](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_accountHolderLastName)**
    The last name of the account holder for the bank payment method.
-   **[accountHolderName](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_accountHolderName)**
    The name of the account holder for the bank payment method.
-   **[accountHolderType](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_accountHolderType)**
    The type of the account holder.
-   **[accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_accountId)**
    Salesforce Payments account ID associated with the bank payment method.
-   **[accountNumber](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_accountNumber)**
    The unique account number for the bank account.
-   **[accountType](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_accountType)**
    The type for the bank account.
-   **[autoPay](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_autoPay)**
    Indicates whether a token for recurring payments is being requested (true) or not (false). The token enables the payment method to be used for recurring payments.
-   **[bankCode](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_bankCode)**
    The routing number is a unique nine-digit code that identifies the bank.
-   **[bankType](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_bankType)**
    The bank type associated with the bank payment method.
-   **[comments](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_comments)**
    Additional details about the bank account.
-   **[email](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_email)**
    The email address of the bank account holder.
-   **[mandate](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_mandate)**
    Authorization from the account holder to debit their payment method.
-   **[nickName](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_nickName)**
    The nick name of the account holder.
-   **[standardEntryClassCode](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_standardEntryClassCode)**
    The three-letter code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.

### accountHolderFirstName

The first name of the account holder for the bank payment method.

#### Signature

public String accountHolderFirstName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### accountHolderLastName

The last name of the account holder for the bank payment method.

#### Signature

public String accountHolderLastName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### accountHolderName

The name of the account holder for the bank payment method.

#### Signature

public String accountHolderName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### accountHolderType

The type of the account holder.

#### Signature

public commercepayments.AccountHolderType accountHolderType {get; set;}

#### Property Value

Type: commercepayments.[AccountHolderType](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_AccountHolderType.htm "Specifies the type of the account holder.")

### accountId

Salesforce Payments account ID associated with the bank payment method.

#### Signature

public String accountId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### accountNumber

The unique account number for the bank account.

#### Signature

public String accountNumber {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### accountType

The type for the bank account.

#### Signature

public commercepayments.AccountType accountType {get; set;}

#### Property Value

Type: commercepayments.[AccountType](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_AccountType.htm "Specifies the account type.")

### autoPay

Indicates whether a token for recurring payments is being requested (true) or not (false). The token enables the payment method to be used for recurring payments.

#### Signature

public Boolean autoPay {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### bankCode

The routing number is a unique nine-digit code that identifies the bank.

#### Signature

public String bankCode {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### bankType

The bank type associated with the bank payment method.

#### Signature

public commercepayments.BankType bankType {get; set;}

#### Property Value

Type: commercepayments.[BankType](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_BankType.htm "Specifies the bank type.")

### comments

Additional details about the bank account.

#### Signature

public String comments {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### email

The email address of the bank account holder.

#### Signature

public String email {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### mandate

Authorization from the account holder to debit their payment method.

#### Signature

public String mandate {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### nickName

The nick name of the account holder.

#### Signature

public String nickName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### standardEntryClassCode

The three-letter code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.

#### Signature

public commercepayments.StandardEntryClassCode standardEntryClassCode {get; set;}

#### Property Value

Type: commercepayments.[StandardEntryClassCode](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_StandardEntryClassCode.htm "Specifies the three-letter code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.")

## BankPaymentMethodRequest Methods

The following are methods for BankPaymentMethodRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_equals)**
    Maintains the integrity of lists of type BankPaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_hashCode)**
    Maintains the integrity of lists of type BankPaymentMethodRequest.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_commercepayments_BankPaymentMethodRequest_toString)**
    Converts a date to a string.

### equals(obj)

Maintains the integrity of lists of type BankPaymentMethodRequest by determining the equality of external objects in a list. This method is dynamic and based on the equals method in Java.

#### Signature

public Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type BankPaymentMethodRequest.

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

```apex
private String buildTokenizationRequest(commercepayments.PaymentMethodTokenizationRequest tokenizeRequest) {
    commercepayments.BankPaymentMethodRequest bankPaymentMethod = tokenizeRequest.bankPaymentMethod;

    // Setup currency
    String currencyIso = UserInfo.getDefaultCurrency();

    String accountId;
    JSONGenerator jsonGeneratorInstance = JSON.createGenerator(true);
    jsonGeneratorInstance.writeStartObject();

    // Basic fields
    jsonGeneratorInstance.writeStringField('merchantAccount', '{!$Credential.Username}');
    jsonGeneratorInstance.writeStringField('reference', 'Tokenize_' + String.valueOf(Datetime.now().getTime()));

    // Payment method details (from encrypted form input)
    jsonGeneratorInstance.writeFieldName('paymentMethod');
    jsonGeneratorInstance.writeStartObject();

    if (bankPaymentMethod != null) {
        accountId = bankPaymentMethod.accountId;
        if (bankPaymentMethod.bankType.equals(commercepayments.BankType.Ach)) {
            currencyIso = 'USD';
            jsonGeneratorInstance.writeStringField('type', 'ach');
            jsonGeneratorInstance.writeStringField('bankAccountNumber', bankPaymentMethod.accountNumber);
            jsonGeneratorInstance.writeStringField('bankLocationId', bankPaymentMethod.bankCode);
            jsonGeneratorInstance.writeStringField('ownerName', bankPaymentMethod.accountHolderName);

        } else if (bankPaymentMethod.bankType.equals(commercepayments.BankType.SepaDebit)) {

            currencyIso = 'EUR';
            jsonGeneratorInstance.writeStringField('type', 'sepadirectdebit');
            jsonGeneratorInstance.writeStringField('iban', bankPaymentMethod.accountNumber);
            jsonGeneratorInstance.writeStringField('ownerName', bankPaymentMethod.accountHolderName);

        } else if (bankPaymentMethod.bankType.equals(commercepayments.BankType.Bacs)) {

            currencyIso = 'GBP';
            jsonGeneratorInstance.writeStringField('type', 'directdebit_GB');
            jsonGeneratorInstance.writeStringField('bankAccountNumber', bankPaymentMethod.accountNumber);
            jsonGeneratorInstance.writeStringField('bankLocationId', bankPaymentMethod.bankCode);
            jsonGeneratorInstance.writeStringField('holderName', bankPaymentMethod.accountHolderName);

        } else if (bankPaymentMethod.bankType.equals(commercepayments.BankType.Becs)) {

            currencyIso = 'AUD';
            jsonGeneratorInstance.writeStringField('type', 'directdebit_AU');
            jsonGeneratorInstance.writeStringField('bankAccountNumber', bankPaymentMethod.accountNumber);
            jsonGeneratorInstance.writeStringField('bsb', bankPaymentMethod.bankCode);
            jsonGeneratorInstance.writeStringField('ownerName', bankPaymentMethod.accountHolderName);

        } else {
            //Add support for other banks if required in future.
        }

        jsonGeneratorInstance.writeEndObject();
    }

    // Zero-dollar amount
    jsonGeneratorInstance.writeFieldName('amount');
    jsonGeneratorInstance.writeStartObject();
    jsonGeneratorInstance.writeNumberField('value', 0);
    jsonGeneratorInstance.writeStringField('currency', currencyIso);
    jsonGeneratorInstance.writeEndObject();

    // Save payment method for later
    jsonGeneratorInstance.writeStringField('shopperReference', accountId);
    jsonGeneratorInstance.writeBooleanField('storePaymentMethod', true);
    jsonGeneratorInstance.writeStringField('shopperInteraction', 'Ecommerce');
    jsonGeneratorInstance.writeStringField('recurringProcessingModel', 'UnscheduledCardOnFile');

    commercepayments.AddressRequest billingAddress = tokenizeRequest.address;

    if (billingAddress != null) {
        jsonGeneratorInstance.writeFieldName('billingAddress');
        jsonGeneratorInstance.writeStartObject();
        jsonGeneratorInstance.writeStringField('street', billingAddress.street);
        jsonGeneratorInstance.writeStringField('stateOrProvince', billingAddress.state);
        jsonGeneratorInstance.writeStringField('city', billingAddress.city);
        jsonGeneratorInstance.writeStringField('postalCode', billingAddress.postalCode);
        jsonGeneratorInstance.writeStringField('country', billingAddress.country);
        jsonGeneratorInstance.writeEndObject();

    }
    jsonGeneratorInstance.writeEndObject();
    return jsonGeneratorInstance.getAsString();
}
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- BankPaymentMethodRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm)
- BankPaymentMethodRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm)
- accountHolderFirstName (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm)
- accountHolderLastName (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm)
- accountHolderName (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm)
- accountHolderType (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm)
- accountId (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm)
- accountNumber (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm)
- accountType (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm)
