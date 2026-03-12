---
title: "CaptureRequest Class"
domain: apex-reference
topic: capturerequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.885Z
estimatedTokens: 845
namespace: CommercePayments
keywords: [CaptureRequest, Represents, capture, request., extends, BaseRequest, inherits, its, methods., Usage, Example, amount, authorizationId, accountId, paymentAuthorizationId]
---

# CaptureRequest Class

> Represents a capture request. This class extends the BaseRequest class and inherits all its
    methods.

**Namespace:** `CommercePayments`

# CaptureRequest Class

Represents a capture request. This class extends the BaseRequest class and inherits all its methods.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

The CaptureRequest class’s buildCaptureRequest method creates a CaptureRequest object to store payment information, such as value and currency, as JSON strings.

## Example

Builds a CaptureRequest object for a multicurrency org.

```

```

-   **[CaptureRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_commerce_payments_CaptureRequest_constructors)**

-   **[CaptureRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_commerce_payments_CaptureRequest_properties)**


## CaptureRequest Constructors

The following are constructors for CaptureRequest.

-   **[CaptureRequest(amount, authorizationId)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_commerce_payments_CaptureRequest_ctor)**
    This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### CaptureRequest(amount, authorizationId)

This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount to be debited or captured.

authorizationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Represents a payment authorization record.

## CaptureRequest Properties

The following are properties for CaptureRequest.

-   **[accountId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_commerce_payments_CaptureRequest_accountId)**
    Account ID value. References an account record.
-   **[amount](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_commerce_payments_CaptureRequest_amount)**
    Amount of currency that needs to be captured.
-   **[paymentAuthorizationId](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_commerce_payments_CaptureRequest_paymentAuthorizationId)**
    ID value that references a PaymentAuthorization.

### accountId

Account ID value. References an account record.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### amount

Amount of currency that needs to be captured.

#### Property Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### paymentAuthorizationId

ID value that references a PaymentAuthorization.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
private String buildCaptureRequest(commercepayments.CaptureRequest captureRequest) {
        Boolean IS_MULTICURRENCY_ORG = UserInfo.isMultiCurrencyOrganization();
        QueryUtils qBuilderForAuth = new QueryUtils(PaymentAuthorization.SObjectType);
        // Add required fields
        qBuilderForAuth.getSelectClause().addField('GatewayRefNumber', false);
        if (IS_MULTICURRENCY_ORG) {
            // addField also takes a boolean to enable translation (uses label instead of actual value)
            qBuilderForAuth.getSelectClause().addField('CurrencyIsoCode', false);
        }
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- CaptureRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm)
- CaptureRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm)
- CaptureRequest(amount, authorizationId) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- accountId (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm)
- amount (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm)
- paymentAuthorizationId (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm)
