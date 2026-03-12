---
title: "Salesforce Payments Resources"
domain: chatterapi
topic: salesforce-payments-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.148Z
estimatedTokens: 939
keywords: [Salesforce, Payments, Resources, including, content, rendered, version, sharing]
---

# Salesforce Payments Resources

> Information about Salesforce Payments, including content, rendered version, and
  sharing.

# Salesforce Payments Resources

Information about Salesforce Payments, including content, rendered version, and sharing.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

For the most updated Payments API documentation, see the [Salesforce Payments APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/references/comm-payments-ref?meta=Summary) and the [Salesforce Commerce Payments APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/references/comm-ccs-payments-ref?meta=Summary) in the B2B Commerce and D2C Commerce Developer Guide.

To access Salesforce Payments resources whose endpoints begin /commerce/payments, your org must have one or more of these licenses:

-   Salesforce Payments
-   Salesforce Order Management
-   B2B Commerce, or D2C Commerce

Available resources are:

| Resource | Description |
| --- | --- |
| /commerce/payments/authorizations | Authorizes a payment. |
| /commerce/payments/postAuths | Confirm that the merchant is ready to capture payment of an existing pre-authorized transaction. |
| /commerce/payments/authorizations/authorizationId​/captures | Captures a payment authorization. |
| /commerce/payments/authorizations/authorizationId​/reversals | Reverses a payment authorization. |
| /commerce/payments/payments/paymentId​/refund | Creates a refund for a payment. |
| /commerce/payments/payment-methods | Tokenizes a payment method. |
| /commerce/payments/sales | Executes a payment without a previous authorization. |

To access Salesforce Payments resources whose endpoints begin /payments, you need these licenses and permissions

-   Salesforce Payments Internal license
-   Salesforce Payments External User license
-   Payments Administrator permissions
-   Authenticated Payer permissions
-   Access to public API sites for guest users who want to make payments

Available resources:

| resource | description |
| --- | --- |
| /payments/merchant-accounts/merchantAccountId​/apple-pay-domains | Registers an Apple Pay domain with the payment gateway. |
| /payments/merchant-accounts/merchantAccountId​/apple-pay-domains | Retrieve a list of Apple Pay domains. |
| /payments/merchant-accounts/merchantAccountId/apple-pay-domains/applePayDomainId | Deletes an Apple Pay domain. |
| /payments/merchant-accounts/merchantAccountId​/saved-payment-methods | Creates a saved payment method. |
| /payments/merchant-accounts/merchantAccountId​/saved-payment-methods | Retrieves all saved payment methods. |
| /payments/merchant-accounts/merchantAccountId​/saved-payment-methods/savedPaymentMethodId | Creates a saved payment method associated with a given merchant account. |
| /payments/merchant-accounts/merchantAccountId​/saved-payment-methods/savedPaymentMethodId | Updates a saved payment method associated with a given merchant account. |
| /payments/merchant-accounts/merchantAccountId​/saved-payment-methods/savedPaymentMethodId | Deletes a saved payment method associated with a given merchant account. |
| /payments/merchant-accounts/merchantAccountId/saved-payment-methods/saveToken | Creates the saved payment method details obtained from the payment gateway. Updates the saved payment method details obtained from the payment gateway. Delete the saved payment method details record. |
| /payments/payment-method-sets​/paymentMethodSetId | Retrieves payment method sets. |
| /payments/payment-intents | Initiates payments. |
| /payments/payment-intents/paymentIntentId/timeline | Retrieves the payment activity timeline for a payment intent. |
| /payments/link-to-order/paymentLinkId | Create an order for a payment link. |
| /payments/payment-link-configs/paymentLinkId | Retrieve the payment link details. |

## Related Topics

- /payments/payment-intents/paymentIntentId/timeline (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_get_payment_activity_timeline.htm)
