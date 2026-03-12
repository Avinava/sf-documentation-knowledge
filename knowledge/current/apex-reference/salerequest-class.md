---
title: "SaleRequest Class"
domain: apex-reference
topic: salerequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.111Z
estimatedTokens: 1986
namespace: CommercePayments
keywords: [SaleRequest, Stores, information, sales, request., Usage, Example, amount, accountId, comments, currencyIsoCode, paymentMethod, paymentMethodData, submittedByMerchant, equals, obj, hashCode, toString]
---

# SaleRequest Class

> Stores information about a sales request.

**Namespace:** `CommercePayments`

# SaleRequest Class

Stores information about a sales request.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

This class holds all the required details about a sale request. Gateway adapters read the fields of this class object while constructing a sale JSON request thatis sent to the payment gateway. The object of this class is made available through commercepayments.paymentGatewayContext by calling getPaymentRequest().

## Example

```

```

-   **[SaleRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_constructors)**

-   **[SaleRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_properties)**

-   **[SaleRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_methods)**


## SaleRequest Constructors

The following are constructors for SaleRequest.

-   **[SaleRequest(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_ctor)**
    Constructor for defining an amount for the sale request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### SaleRequest(amount)

Constructor for defining an amount for the sale request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global SaleRequest(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Amount of the sale request.

## SaleRequest Properties

The following are properties for SaleRequest.

-   **[accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_accountId)**
    Customer account ID for the sale request.
-   **[amount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_amount)**
    Amount of the sale request. Can be positive only.
-   **[comments](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_comments)**
    Additional information about the sale request.
-   **[currencyIsoCode](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_currencyIsoCode)**
    Currency code for the sale request.
-   **[paymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_paymentMethod)**
    Payment method used in the sale request.
-   **[paymentMethodData](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_paymentMethodData)**
    Payment method data used in the sale request.
-   **[submittedByMerchant](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_submittedByMerchant)**
    Indicates whether the sale request is submitted by the marchant (true) or not (false).

### accountId

Customer account ID for the sale request.

#### Signature

global String accountId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### amount

Amount of the sale request. Can be positive only.

#### Signature

global Double amount {get; set;}

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### comments

Additional information about the sale request.

#### Signature

global String comments {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### currencyIsoCode

Currency code for the sale request.

#### Signature

global String currencyIsoCode {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### paymentMethod

Payment method used in the sale request.

#### Signature

global commercepayments.SaleApiPaymentMethodRequest paymentMethod {get; set;}

#### Property Value

Type: [SaleApiPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_class_commercepayments_SaleApiPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a sale service call.")

### paymentMethodData

Payment method data used in the sale request.

This field is populated when SaleInput specifies a saved payment method. Accessible using paymentMethodData on SaleRequest. The map contains these fields from SavedPaymentMethod: GatewayToken, Type, GatewayReference, and StandardEntryCode for direct gateway interaction without querying the database.

#### Signature

public Map<String,String> paymentMethodData {get; set;}

#### Property Value

Type: Map<String,[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### submittedByMerchant

Indicates whether the sale request is submitted by the marchant (true) or not (false).

#### Signature

public Boolean submittedByMerchant {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## SaleRequest Methods

The following are methods for SaleRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_equals)**
    Compares this object with the specified object and returns true if both objects are equal; otherwise, returns false.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_hashCode)**
    Maintains the integrity of lists of type SaleRequest by determining the uniqueness of the external object records in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_toString)**
    Converts a date to a string.

### equals(obj)

Compares this object with the specified object and returns true if both objects are equal; otherwise, returns false.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type SaleRequest by determining the uniqueness of the external object records in a list.

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
private String buildSaleRequest(commercepayments.SaleRequest saleRequest) {
        String currencyIso = saleRequest.currencyIsoCode;
        commercepayments.SaleApiPaymentMethodRequest paymentMethod = saleRequest.paymentMethod;
        if (currencyIso == null) {
            currencyIso = UserInfo.getDefaultCurrency();
        }

        JSONGenerator jsonGeneratorInstance = JSON.createGenerator(true);
        jsonGeneratorInstance.writeStartObject();
        jsonGeneratorInstance.writeStringField('merchantAccount', '{!$Credential.Username}');
        jsonGeneratorInstance.writeStringField('reference', String.valueOf(Datetime.now().getTime()) + String.valueOf(Math.random()).substring(2, 8));
        jsonGeneratorInstance.writeFieldName('amount');
        jsonGeneratorInstance.writeStartObject();
        jsonGeneratorInstance.writeStringField('value', String.ValueOf((saleRequest.amount * 100.0).intValue()));
        jsonGeneratorInstance.writeStringField('currency', currencyIso);
        jsonGeneratorInstance.writeEndObject();

        jsonGeneratorInstance.writeFieldName('paymentMethod');
        jsonGeneratorInstance.writeStartObject();

        String shopperReference;
        String type = 'scheme';

        if (saleRequest.paymentMethodData != null) {
            String token = saleRequest.paymentMethodData.get('gatewayToken');
            String paymentMethodType = saleRequest.paymentMethodData.get('paymentMethodType');
            shopperReference = saleRequest.paymentMethodData.get('gatewayReference');

            if ('us_bank_account'.equals(paymentMethodType)) {
                type = 'ach';
            } else if ('sepa_debit'.equals(paymentMethodType)) {
                type = 'sepadirectdebit';
            } else if ('au_becs_debit'.equals(paymentMethodType)) {
                type = 'directdebit_AU';
            } else if ('bacs_debit'.equals(paymentMethodType)) {
                type = 'directdebit_GB';
            }

            jsonGeneratorInstance.writeStringField('type', type);
            jsonGeneratorInstance.writeStringField('storedPaymentMethodId', token);
        }

        jsonGeneratorInstance.writeEndObject();
        jsonGeneratorInstance.writeStringField('shopperInteraction', 'ContAuth');
        jsonGeneratorInstance.writeStringField('recurringProcessingModel', 'UnscheduledCardOnFile');
        jsonGeneratorInstance.writeStringField('shopperReference', shopperReference);

        jsonGeneratorInstance.writeNumberField('captureDelayHours', 0);
        jsonGeneratorInstance.writeEndObject();

        return jsonGeneratorInstance.getAsString();
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- SaleRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm)
- SaleRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm)
- SaleRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm)
- SaleRequest(amount) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- accountId (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm)
- amount (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm)
- comments (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm)
- currencyIsoCode (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm)
