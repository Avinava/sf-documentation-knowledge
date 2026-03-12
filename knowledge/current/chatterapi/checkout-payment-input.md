---
title: "Checkout Payment Input"
domain: chatterapi
topic: checkout-payment-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.278Z
estimatedTokens: 415
keywords: [Checkout, Payment, Input, Commerce, store]
---

# Checkout Payment Input

> Payment input for a Commerce store checkout.

# Checkout Payment Input

Payment input for a Commerce store checkout.

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

## Code Examples

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
