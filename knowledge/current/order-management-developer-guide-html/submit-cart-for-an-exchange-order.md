---
title: "Submit Cart for an Exchange Order"
domain: order-management-developer-guide-html
topic: submit-cart-for-an-exchange-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.111Z
estimatedTokens: 849
keywords: [Submit, Cart, Exchange, Order, you’ve, previewed, it’s, almost, time, There, few, considerations, keep, mind, creating]
---

# Submit Cart for an Exchange Order

> After you’ve previewed the cart, it’s almost time to submit the exchange. There are a
    few considerations to keep in mind while creating the submit for the exchange.

# Submit Cart for an Exchange Order

After you’ve previewed the cart, it’s almost time to submit the exchange. There are a few considerations to keep in mind while creating the submit for the exchange.

| Available in: Enterprise, Unlimited, and Developer Editions |
| --- |


Before creating your submit order, validate that orderSummaryId (MainOrderSummaryId), exchangeCartId, and referenceId:

-   Aren’t null or empty
-   Are valid Salesforce IDs
-   Represent a valid entity

The referenceId must be type ReturnOrder. Make sure the ReturnOrder’s StatusCategory is Activated or Pending.

Make sure the ReturnOrderId belongs to the MainOrderSummaryId.

The cart for an exchange needs at least one product and at least one delivery group. The cart must belong to the same account as the OrderSummary. Make sure the OrderSummary.Account equals the cart.Account.

## Input Fields for the Submit Cart to Exchange Order API Representation

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| mainOrderSummaryId | String | ID of the main Order Summary. | Required |
| exchangeCartId | String | ID of the cart used for adding items to the exchange order. | Required |
| referenceId | String | Polymorphic Reference ID, which must be related to the main Order Summary. Only Return Order ID is supported. | Required |
| paymentInfoList | PaymentInfoInputRepresentationList | List of payment information if additional funds are needed for the new exchange order.PaymentInfoInputRepresentationString paymentAuthorizationIdArray[String] paymentIdsString paymentMethodId(optional)String lastPaymentGatewayLogId(optional)String name(optional) | Optional |
| paymentInfoItems | Array[PaymentInfoInputRepresentation] | List of payment information if additional funds are needed for the new exchange order. | Optional |
| SequenceOrderPaymentSummaryInputList | Sequence | Ordered list of OrderPaymentSummaries and the reserved balance amounts to apply them to.Array[SequenceOrderPaymentSummaryInputRepresentation] sequencesString orderPaymentSummaryId (required)Number amount, which uses the total Order Payment Summary balance if it’s zero or not specified.Order Number: If the exchange is created in the order number specified, it creates an exchange with random guide as the order number | Optional |

## Example

The submit response might look like this example.

```

```

-   [← Previous](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_preview.htm "Preview Cart for an Exchange Order")

#### See Also

-   [API Framework for Exchanges with RMA Returns](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_playbook.htm "Expand your exchange capability by increasing the ways that a customer service representative (CSR) can help your customers exchange products. With these exchange capabilities, a CSR can exchange uneven products and can exchange products in an already-fulfilled order. To configure an exchange workflow in your org, you need the SalesforceOrderManagementGrowth license.")

-   [*Salesforce Help*: Exchanges with RMA Returns Overview](https://help.salesforce.com/s/articleView?id=commerce.om_exchanges_rma_overview.htm&type=5&language=en_US "Salesforce Help: Exchanges with RMA Returns Overview - HTML (New Window)")

## Code Examples

```
{
  "changeBalances": {
  "grandTotalAmount": -47.49,
  "totalAdjDeliveryAmtWithTax": 12.94
  "totalAdjDistAmountWithTax": 0,
  "totalAdjProductAmtWithTax": -60.44,
  "totalAdjustedDeliveryAmount": 11.99,
  "totalAdjustedDeliveryTaxAmount": 0.95,
  "totalAdjustedProductAmount": -55.96,
  "totalAdjustedProductTaxAmount": -4.48,
  "totalAdjustmentDistributedAmount": 0,
  "totalAdjustmentDistributedTaxAmount": 0,
  "totalAmount": -43.97,
  "totalExcessFundsAmount": 47.49,
  "totalFeeAmount": 0,
  "totalFeeTaxAmount": 0,
  "totalRefundableAmount": 47.49,
  "totalRequiredFundsAmount": 0,
  "totalTaxAmount": -3.52
  },
  "errors": [],
  "exchangeOrderSummaryId": "1OsSB000000UdYb",
  "orderSummaryId": "1OsSB000000UdWz0AK",
  "success": true
  }
```

## Related Topics

- ← Previous (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_preview.htm)
- API Framework for Exchanges with RMA Returns (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_playbook.htm)
