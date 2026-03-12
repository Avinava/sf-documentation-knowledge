---
title: "GatewayProviderPaymentMethodType"
domain: metadata-api
topic: gatewayproviderpaymentmethodtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:39.712Z
estimatedTokens: 622
keywords: [GatewayProviderPaymentMethodType, entity, integrators, payment, providers, choose, active, receive, order's, data, rather, allowing, Salesforce, Order, Management]
---

# GatewayProviderPaymentMethodType

> Represents an entity that allows integrators and payment
      providers to choose an active payment to receive an order's payment data rather than allowing
      the Salesforce Order Management platform to select a default payment method. This object
    is available in API version 51 and later.

# GatewayProviderPaymentMethodType

Represents an entity that allows integrators and payment providers to choose an active payment to receive an order's payment data rather than allowing the Salesforce Order Management platform to select a default payment method. This object is available in API version 51 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Version

gatewayProviderPaymentMethodType components are available in API version 51 and later.

## Special Access Rules

## Fields

| Field Name | Description |
| --- | --- |
| comment | Field TypetextareaDescriptionAdditional details about the gateway provider payment method type record. Max length is 1000 characters. |
| gtwyProvPaymentMethodType | Field TypestringDescriptionLinks the Salesforce payment method to the payment method used in the Salesforce Order Management storefront. Your payment gateway integration uses this field when finding a payment method to link to a payment.The value of GtwyProviderPaymentMethodType must match the payment method value sent to the order's Payment Instrument in Salesforce Order Management.Here are examples of payment method values that Salesforce could receive from Salesforce Order Management.CREDIT_CARDBASIC_CREDITCreditCardGooglePayApplePay |
| masterLabel | Field TypestringDescriptionRequired. The gateway provider payment method type name that appears in the user interface. |
| paymentGatewayProvider | Field TypereferenceDescriptionSpecifies the payment gateway provider that Salesforce Order Management should use when processing payments. One payment gateway provider can be related to multiple payment method types. |
| paymentMethodType | Field TypepicklistDescriptionSpecifies the type of payment method used on an order in Salesforce Order Management.Possible values are:AlternativePaymentMethodCardPaymentMethodDigitalWallet |
| recordType | Field TypereferenceDescriptionID of the record type entity related to the gateway provider payment method type.This is a relationship field. |

## Declarative Metadata Sample Definition

The following is an example of a GatewayProviderPaymentMethodType component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<GatewayProviderPaymentMethodType xmlns="http://soap.sforce.com/2006/04/metadata">
    <gtwyProviderPaymentMethodType>Klarna</gtwyProviderPaymentMethodType>
    <masterLabel>Test</masterLabel>
    <paymentGatewayProvider>adyen__Adyen</paymentGatewayProvider>
    <paymentMethodType>AlternativePaymentMethod</paymentMethodType>
    <recordType>AlternativePaymentMethod.Klarna</recordType>
</GatewayProviderPaymentMethodType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>GatewayProviderPaymentMethodType</name>
    </types>
    <version>51.0</version>
</Package>
```
