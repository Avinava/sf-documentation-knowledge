---
title: "Pending Order Summaries"
domain: chatterapi
topic: pending-order-summaries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.580Z
estimatedTokens: 432
keywords: [Pending, Order, Summaries, summary, graphs, High, Scale, Orders, feature, active, B2C, Commerce, connection, isn’t, Created]
---

# Pending Order Summaries

> Create pending order summaries from order summary graphs. The High
      Scale Orders feature must be active, but a B2C Commerce connection isn’t required. Created
      pending order summaries are queued for automatic processing into order summaries, the same as
      pending order summaries ingested from B2C Commerce. The provided JSON example references
      person accounts, but business accounts are also supported.

# Pending Order Summaries

Create pending order summaries from order summary graphs. The High Scale Orders feature must be active, but a B2C Commerce connection isn’t required. Created pending order summaries are queued for automatic processing into order summaries, the same as pending order summaries ingested from B2C Commerce. The provided JSON example references person accounts, but business accounts are also supported.

Resource

```

```

Available version

57.0

HTTP methods

POST

Request body for POST

[Order Summary Graphs Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_graphs_input.htm "List of graphs containing order summary data.")

Root XML tag

<orderSummaryGraphs>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderSummaryGraphs | Order Summary Graph Input[] | List of graphs containing order summary data. | Required | 57.0 |

Response body for POST

[Order Summary Graphs Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_graphs_output.htm "Response from creating pending order summaries.")

#### See Also

-   [*Salesforce Order Management*: High-Scale Orders](https://help.salesforce.com/s/articleView?id=commerce.om_hi_scale.htm&type=5&language=en_US "Salesforce Order Management: High-Scale Orders - HTML (New Window)")

-   [*Salesforce Order Management*: High-Scale Deduplication](https://developer.salesforce.com/docs/atlas.en-us.260.0.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_high_scale_deduplication.htm "Salesforce Order Management: High-Scale Deduplication - HTML (New Window)")

## Code Examples

```
/commerce/order-summaries
```

```
{
  "orderSummaryGraphs": [
{
  "orderSummaryGraphId": "${ID}",
  "purchaseSupportDetails": [
    {
      "attributes": {
        "attributes": {
          "type": "Account"
        },
        "Name": "FTest Suite",
        "FirstName": "FTest",
        "LastName": "Suite",
        "Phone": "(111)-111-1111",
        "isPersonAccount": true
      },
      "referenceId": "refAccount"
    },
    {
      "referenceId": "refProduct2_1",
      "attributes": {
        "attributes": {
          "type": "Product2"
        },
        "Description": "WOMEN'S TORPEDO JACKET 1",
        "Name": "WOMEN'S TORPEDO JACKET 1",
        "StockKeepingUnit": "${ProductCode1}",
        "ProductCode": "${ProductCode1}",
        "IsActive": true
      }
    },
    {
      "referenceId": "refProduct2_2",
      "attributes": {
        "attributes": {
          "type": "Product2"
        },
        "Description": "Apple Watch",
        "Name": "Apple Watch",
        "StockKeepingUnit": "${ProductCode2}",
        "ProductCode": "${ProductCode2}",
        "IsActive": true
      }
    },
    {
      "referenceId": "refPricebookEntry_1",
      "attributes": {
        "attributes": {
          "type": "PricebookEntry"
        },
        "Pricebook2Id": "${StandardPricebookId}",
        "UnitPrice": 200,
        "IsActive": true,
        "Product2Id": "@{refProduct2_1.id}",
        "CurrencyIsoCode": "USD"
      }
    },
    {
      "referenceId": "refPricebookEntry_2",
      "attributes": {
        "attributes": {
          "type": "PricebookEntry"
        },
        "Pricebook2Id": "${StandardPricebookId}",
        "UnitPrice": 800,
        "IsActive": true,
        "Product2Id": "@{refProduct2_2.id}",
        "CurrencyIsoCode": "USD"
      }
    },
    {
      "referenceId": "refSalesChannel",
      "attributes": {
        "attributes": {
          "type": "SalesChannel"
        },
        "Description": "NTO",
        "SalesChannelName": "${SalesChannelName}"
      }
    },
    {
      "referenceId": "refPromotion_1",
      "attributes": {
        "attributes": {
          "type": "Promotion"
        },
        "Name": "${PromotionName1}",
        "DisplayName": "${PromotionName1}",
        "Description": "${PromotionName1}",
        "StartDate": "2022-05-24",
        "StartDateTime": "2021-09-06T23:58:59Z",
        "EndDateTime": "2025-09-06T23:58:59Z",
        "IsAutomatic": true,
        "IsCommercePromotion": true,
        "IsActive": true
      }
    },
    {
      "referenceId": "refPromotion_2",
      "attributes": {
        "attributes": {
          "type": "Promotion"
        },
        "Name": "${PromotionName2}",
        "DisplayName": "${PromotionName2}",
        "Description": "${PromotionName2}",
        "StartDate": "2022-05-24",
        "StartDateTime": "2021-09-06T23:58:59Z",
        "EndDateTime": "2025-09-06T23:58:59Z",
        "IsCommercePromotion": true,
        "IsActive": true
      }
    },
    {
      "referenceId": "refWebStore",
      "attributes": {
        "attributes": {
          "type": "WebStore"
        },
        "Name": "NTO USD",
        "Type": "B2CE",
        "ExternalReference": "${WebStoreExternalReference}",
        "DefaultTaxLocaleType": "Net"
      }
    },
    {
      "referenceId": "refOrderDeliveryMethod",
      "attributes": {
        "attributes": {
          "type": "OrderDeliveryMethod"
        },
        "Name": "Overnight",
        "Description": "FedEx",
        "ReferenceNumber": "${OrderDeliveryMethodReferenceNumber}",
        "ProductId": "@{refProduct2_2.id}",
        "IsActive": true
      }
    }
  ],
  "purchaseDetails": [
    {
      "attributes": {
        "attributes": {
          "type": "OrderSummary"
        },
        "OrderNumber": "${NUMBER}",
        "OrderLifeCycleType": "MANAGED",
        "BillingEmailAddress": "${EMAIL}",
        "BillingPhoneNumber": "${PHONE}",
        "OrderedDate": "${DATE}",
        "Description": "${TEXT}",
        "SalesChannelId": "@{refSalesChannel.id}",
        "SalesStoreId": "@{refWebStore.id}",
        "AccountId": "@{refAccount.id}",
        "ExternalReferenceIdentifier":"${ExternalReferenceIdentifier}",
        "Pricebook2Id": "${StandardPricebookId}",
        "${CustomAttribute.for[OrderSummary]}": "${TEXT}",
        "CurrencyIsoCode": "USD"
      },
      "referenceId": "refOrderSummary"
    },
    {
      "attributes": {
        "attributes": {
          "type": "CardPaymentMethod"
        },
        "${CustomAttribute.for[CardPaymentMethod]}": "${TEXT}",
        "GatewayToken": "dcdn23wj3vkb8sf1kho",
        "PaymentGatewayId": "${PaymentGatewayId}",
        "Status": "Active",
        "PaymentMethodStreet": "11122 HARBOUR SPRINGS CIR",
        "PaymentMethodCity": "BOCA RATON",
        "PaymentMethodPostalCode": "33428",
        "PaymentMethodState": "FL",
        "PaymentMethodCountry": "us",
        "InputCardNumber": "************1234",
        "CardType": "Visa",
        "CardHolderName": "Me and Me",
        "ExpiryYear": "2021",
        "ExpiryMonth": "1",
        "CardCategory": "CreditCard",
        "AccountId": "@{refAccount.id}",
        "ProcessingMode": "External"
      },
      "referenceId": "refCardPaymentMethod"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderPaymentSummary"
        },
        "${CustomAttribute.for[OrderPaymentSummary]}": "${TEXT}",
        "OrderSummaryId": "@{refOrderSummary.id}",
        "OwnerId": "${OwnerId}"
      },
      "referenceId": "refOrderPaymentSummary"
    },
    {
      "attributes": {
        "attributes": {
          "type": "PaymentAuthorization"
        },
        "${CustomAttribute.for[PaymentAuthorization]}": "${TEXT}",
        "PaymentGatewayId": "${PaymentGatewayId}",
        "Amount": 326.79,
        "ProcessingMode": "External",
        "Status": "Processed",
        "GatewayRefNumber": "0000010112",
        "AccountId": "@{refAccount.id}",
        "PaymentMethodId": "@{refCardPaymentMethod.id}",
        "OrderPaymentSummaryId": "@{refOrderPaymentSummary.id}"
      },
      "referenceId": "refPayment"
    },
    {
      "attributes": {
        "attributes": {
          "type": "PaymentGatewayLog"
        },
        "PaymentGatewayId": "${PaymentGatewayId}",
        "InteractionStatus": "Success",
        "InteractionType": "Authorization",
        "ReferencedEntityId": "@{refPayment.id}"
      },
      "referenceId": "refPaymentGatewayLog"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderDeliveryGroupSummary"
        },
        "${CustomAttribute.for[OrderDeliveryGroupSummary]}": "${TEXT}",
        "EmailAddress": "me@salesforce.com",
        "DeliverToCity": "BOCA RATON",
        "DeliverToCountry": "us",
        "DeliverToName": "Me and Me",
        "DeliverToPostalCode": "33428",
        "DeliverToState": "FL",
        "DeliverToStreet": "11122 HARBOUR SPRINGS CIR",
        "PhoneNumber": "3333333333",
        "OrderDeliveryMethodId": "@{refOrderDeliveryMethod.id}",
        "OrderSummaryId": "@{refOrderSummary.id}"
      },
      "referenceId": "refOrderDeliveryGroup"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemSummary"
        },
        "${CustomAttribute.for[OrderItemSummary,Order]}": "${TEXT}",
        "Description": "WOMEN'S TORPEDO JACKET 1",
        "Type": "Order Product",
        "Quantity": 1,
        "TotalLineAmount": 200,
        "LineNumber": 1,
        "UnitPrice": 200,
        "ListPrice": 200,
        "OrderSummaryId": "@{refOrderSummary.id}",
        "OrderDeliveryGroupSummaryId": "@{refOrderDeliveryGroup.id}",
        "Product2Id": "@{refProduct2_1.id}",
        "PricebookEntryId": "@{refPricebookEntry_1.id}"
      },
      "referenceId": "refOrderItem_1"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemSummary"
        },
        "${CustomAttribute.for[OrderItemSummary,Order]}": "${TEXT}",
        "Description": "WOMEN'S TORPEDO JACKET 2",
        "Type": "Order Product",
        "Quantity": 1,
        "TotalLineAmount": 800,
        "LineNumber": 1,
        "UnitPrice": 800,
        "ListPrice": 800,
        "OrderSummaryId": "@{refOrderSummary.id}",
        "OrderDeliveryGroupSummaryId": "@{refOrderDeliveryGroup.id}",
        "Product2Id": "@{refProduct2_2.id}",
        "PricebookEntryId": "@{refPricebookEntry_2.id}"
      },
      "referenceId": "refOrderItem_2"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemTaxLineItemSummary"
        },
        "${CustomAttribute.for[OrderItemTaxLineItemSummary]}": "${TEXT}",
        "Name": "2072100 - Tax",
        "Type": "Estimated",
        "Amount": 10,
        "Rate": 0.05,
        "TaxEffectiveDate": "2018-09-18T17:15:58.000Z",
        "OrderItemSummaryId": "@{refOrderItem_1.id}",
        "OrderSummaryId": "@{refOrderSummary.id}"
      },
      "referenceId": "refrefOrderItem_1_OrderItemTaxLineItem_1"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemTaxLineItemSummary"
        },
        "${CustomAttribute.for[OrderItemTaxLineItemSummary]}": "${TEXT}",
        "Name": "2072100 - Tax",
        "Type": "Estimated",
        "Amount": 40,
        "Rate": 0.05,
        "TaxEffectiveDate": "2018-09-18T17:15:58.000Z",
        "OrderItemSummaryId": "@{refOrderItem_2.id}",
        "OrderSummaryId": "@{refOrderSummary.id}"
      },
      "referenceId": "refrefOrderItem_2_OrderItemTaxLineItem_2"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderAdjustmentGroupSummary"
        },
        "Name": "20%offOrderAmountOver100",
        "Description": "20%offOrderAmountOver100",
        "Type": "Header",
        "OrderSummaryId": "@{refOrderSummary.id}",
        "AdjustmentCauseId": "@{refPromotion_1.id}"
      },
      "referenceId": "refOrderAdjustmentGroupSummary_1"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderAdjustmentGroupSummary"
        },
        "Name": "50offOrderAmountOver100",
        "Description": "50offOrderAmountOver100",
        "Type": "Header",
        "OrderSummaryId": "@{refOrderSummary.id}",
        "AdjustmentCauseId": "@{refPromotion_2.id}"
      },
      "referenceId": "refOrderAdjustmentGroupSummary_2"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemAdjustmentLineSummary"
        },
        "${CustomAttribute.for[OrderItemAdjustmentLineSummary]}": "${TEXT}",
        "Name": "2072100 - 20%offOrderAmountOver100",
        "Amount": -15.84,
        "OrderItemSummaryId": "@{refOrderItem_1.id}",
        "OrderSummaryId": "@{refOrderSummary.id}",
        "OrderAdjustmentGroupSummaryId": "@{refOrderAdjustmentGroupSummary_1.id}"
      },
      "referenceId": "refrefOrderItem_1_OrderItemAdjustmentLineItem_1"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemAdjustmentLineSummary"
        },
        "${CustomAttribute.for[OrderItemAdjustmentLineSummary]}": "${TEXT}",
        "Name": "2072100 - 20%offOrderAmountOver100",
        "Amount": -15.84,
        "OrderItemSummaryId": "@{refOrderItem_1.id}",
        "OrderSummaryId": "@{refOrderSummary.id}",
        "OrderAdjustmentGroupSummaryId": "@{refOrderAdjustmentGroupSummary_2.id}"
      },
      "referenceId": "refrefOrderItem_1_OrderItemAdjustmentLineItem_2"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemAdjustmentLineSummary"
        },
        "${CustomAttribute.for[OrderItemAdjustmentLineSummary]}": "${TEXT}",
        "Name": "2072100 - 20%offOrderAmountOver100",
        "Amount": -15.84,
        "OrderItemSummaryId": "@{refOrderItem_2.id}",
        "OrderSummaryId": "@{refOrderSummary.id}",
        "OrderAdjustmentGroupSummaryId": "@{refOrderAdjustmentGroupSummary_1.id}"
      },
      "referenceId": "refrefOrderItem_2_OrderItemAdjustmentLineItem_1"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemAdjustmentLineSummary"
        },
        "${CustomAttribute.for[OrderItemAdjustmentLineSummary]}": "${TEXT}",
        "Name": "2072100 - 20%offOrderAmountOver100",
        "Amount": -15.84,
        "OrderItemSummaryId": "@{refOrderItem_2.id}",
        "OrderSummaryId": "@{refOrderSummary.id}",
        "OrderAdjustmentGroupSummaryId": "@{refOrderAdjustmentGroupSummary_2.id}"
      },
      "referenceId": "refrefOrderItem_2_OrderItemAdjustmentLineItem_2"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemTaxLineItemSummary"
        },
        "${CustomAttribute.for[OrderItemTaxLineItemSummary]}": "${TEXT}",
        "Name": "2072100 - Adjustment Tax",
        "Type": "Estimated",
        "Amount": -0.79,
        "Rate": 0.05,
        "TaxEffectiveDate": "2021-02-12T23:53:01.471Z",
        "OrderItemSummaryId": "@{refOrderItem_1.id}",
        "OrderItemAdjustmentLineSummaryId": "@{refrefOrderItem_1_OrderItemAdjustmentLineItem_1.id}",
        "OrderSummaryId": "@{refOrderSummary.id}"
      },
      "referenceId": "refrefOrderItem_1_OrderItemAdjustmentLineItem_1_OrderItemTaxLineItem_1"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemTaxLineItemSummary"
        },
        "${CustomAttribute.for[OrderItemTaxLineItemSummary]}": "${TEXT}",
        "Name": "2072100 - Adjustment Tax",
        "Type": "Estimated",
        "Amount": -0.79,
        "Rate": 0.05,
        "TaxEffectiveDate": "2021-02-12T23:53:01.471Z",
        "OrderItemSummaryId": "@{refOrderItem_1.id}",
        "OrderItemAdjustmentLineSummaryId": "@{refrefOrderItem_1_OrderItemAdjustmentLineItem_2.id}",
        "OrderSummaryId": "@{refOrderSummary.id}"
      },
      "referenceId": "refrefOrderItem_1_OrderItemAdjustmentLineItem_2_OrderItemTaxLineItem_2"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemTaxLineItemSummary"
        },
        "${CustomAttribute.for[OrderItemTaxLineItemSummary]}": "${TEXT}",
        "Name": "2072100 - Adjustment Tax",
        "Type": "Estimated",
        "Amount": -0.79,
        "Rate": 0.05,
        "TaxEffectiveDate": "2021-02-12T23:53:01.471Z",
        "OrderItemSummaryId": "@{refOrderItem_2.id}",
        "OrderItemAdjustmentLineSummaryId": "@{refrefOrderItem_2_OrderItemAdjustmentLineItem_1.id}",
        "OrderSummaryId": "@{refOrderSummary.id}"
      },
      "referenceId": "refrefOrderItem_2_OrderItemAdjustmentLineItem_1_OrderItemTaxLineItem_1"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemTaxLineItemSummary"
        },
        "${CustomAttribute.for[OrderItemTaxLineItemSummary]}": "${TEXT}",
        "Name": "2072100 - Adjustment Tax",
        "Type": "Estimated",
        "Amount": -0.79,
        "Rate": 0.05,
        "TaxEffectiveDate": "2021-02-12T23:53:01.471Z",
        "OrderItemSummaryId": "@{refOrderItem_2.id}",
        "OrderItemAdjustmentLineSummaryId": "@{refrefOrderItem_2_OrderItemAdjustmentLineItem_2.id}",
        "OrderSummaryId": "@{refOrderSummary.id}"
      },
      "referenceId": "refrefOrderItem_2_OrderItemAdjustmentLineItem_2_OrderItemTaxLineItem_2"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemSummary"
        },
        "${CustomAttribute.for[OrderItemSummary,Order]}": "${TEXT}",
        "Description": "Shipping",
        "Type": "Delivery Charge",
        "Quantity": 1,
        "TotalLineAmount": 200,
        "LineNumber": 1,
        "UnitPrice": 200,
        "ListPrice": 200,
        "OrderSummaryId": "@{refOrderSummary.id}",
        "OrderDeliveryGroupSummaryId": "@{refOrderDeliveryGroup.id}",
        "Product2Id": "@{refProduct2_1.id}",
        "PricebookEntryId": "@{refPricebookEntry_1.id}"
      },
      "referenceId": "refShipping"
    },
    {
      "attributes": {
        "attributes": {
          "type": "OrderItemTaxLineItemSummary"
        },
        "${CustomAttribute.for[OrderItemTaxLineItemSummary]}": "${TEXT}",
        "Name": "DeliveryCharge - Tax",
        "Type": "Estimated",
        "Amount": 10,
        "Rate": 0.05,
        "TaxEffectiveDate": "2018-09-18T17:15:58.000Z",
        "OrderItemSummaryId": "@{refShipping.id}",
        "OrderSummaryId": "@{refOrderSummary.id}"
      },
      "referenceId": "refShipping_OrderItemTaxLineItem"
    }
  ]
}
  ]
}
```

## Related Topics

- Order Summary Graphs Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_graphs_input.htm)
- Order Summary Graph Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_graph_input.htm)
- Order Summary Graphs Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_graphs_output.htm)
