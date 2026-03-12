---
title: "Commerce Webstore Checkout Payments"
domain: chatterapi
topic: commerce-webstore-checkout-payments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.335Z
estimatedTokens: 767
keywords: [Commerce, Webstore, Checkout, Payments, Payment, store]
---

# Commerce Webstore Checkout Payments

> Payment for a Commerce store checkout.

# Commerce Webstore Checkout Payments

Payment for a Commerce store checkout.

To access this resource, you need a B2B or D2C Commerce license and the system permissions included in either the Buyer (B2B stores only) or Shopper (D2C stores only) [preconfigured permission set](https://help.salesforce.com/s/articleView?id=commerce.comm_preconfigured_perm_sets.htm&type=5&language=en_US).

In API version 63.0 and later, the Commerce Webstore Checkout Payments API is reenterable. If a payment already exists for a cart, a POST request handles the existing payment as follows.

-   If the payment is a PaymentAuthorization, the authorization is reversed.
-   If the payment is captured, a refund is issued.
-   If the payment is a simple purchase order, the purchase order number is replaced. Reentrance for simple purchase orders is supported in API version 64.0 and later.

You can update the billing address with a reentrant request. However, you can't change the payment type. For example, if a payment authorization or capture was performed, you can't make a new request with a requestType of SimplePurchaseOrder.

Resource

```

```

Values for activeOrCheckoutId are:

-   checkoutId—ID of the checkout.
-   active—Active checkout.

Available version

55.0

HTTP methods

POST

Request body for POST

Root XML tag

<checkoutPaymentInput>

JSON example for authorized payment

```

```

JSON example for post authorized payment

```

```

JSON example for simple purchase order

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billing​Address | Checkout Address Input | Billing address for the checkout. Don't include a value for shipToPhoneNumber on the Checkout Address Input. This field is ingored in the payment request. | Optional | 55.0 |
| payment​Token | String | Payment token value has a different meaning depending on the request type.If the request type is Auth, the value is a card payment method ID.If the request type is SimplePurchaseOrder, the value is a purchase order number.If the request type is PostAuth, the value is a string that identifies the payment transaction so it can be validated by the payment gateway adapter’s PostAuth handler. | Required if requestType is Auth, PostAuth, or SimplePurchaseOrder | 55.0 |
| payments​Data | String | Additional data from a payment request for custom checkout implementations. Supports up to four key-value pairs. paymentsData is only applicable to requests with a requestType of Auth or PostAuth. Simple purchase orders don’t support paymentsData. | Optional | 55.0 |
| request​Type | String | Type of payment request. Valid values are:Auth—Payment authorization request.PostAuth— Record a payment transaction that happened outside of the Salesforce platformSimplePurchaseOrder— Use a purchase order as a form of payment | Required | 55.0 |

Response body for POST

[Checkout Payment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_payment.htm "Payment response for a Commerce store checkout.")

## Code Examples

```
/commerce/webstores/webstoreId/checkouts/activeOrCheckoutId/payments
```

```
{
   "requestType":"Auth",
   "paymentToken":"cardPaymentMethodId",
   "billingAddress":{
      "name":"John Doe",
      "street":"123 Acme Drive",
      "city":"Los Angeles",
      "region":"CA",
      "country":"US",
      "postalCode":"90001"
  }
}
```

```
{
   "requestType":"PostAuth",
   "paymentToken": 'pi_0swefj329r4ljsdfk',
   "billingAddress":{
      "name":"John Doe",
      "street":"123 Acme Drive",
      "city":"Los Angeles",
      "region":"CA",
      "country":"US",
      "postalCode":"90001"
   }
 }
```

```
{
   "requestType": "SimplePurchaseOrder",
   "paymentToken": "000348957393223",
   "billingAddress":{
      "name":"John Doe",
      "street":"123 Acme Drive",
      "city":"Los Angeles",
      "region":"CA",
      "country":"US",
      "postalCode":"90001"
  }
}
```

## Related Topics

- Checkout Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_address_input.htm)
- Checkout Payment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_payment.htm)
