---
title: "Importing Data When Using Salesforce B2C Commerce"
domain: order-management-developer-guide-html
topic: importing-data-when-using-salesforce-b2c-commerce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.140Z
estimatedTokens: 629
keywords: [Importing, Data, Salesforce, B2C, Commerce, import, that’s, integration, product, shopper, keep, synchronized, Otherwise, can’t, recognize]
---

# Importing Data When Using Salesforce B2C Commerce

> If you import data that’s used by the B2C Commerce integration,
      such as product or shopper data, keep it synchronized with your B2C Commerce data. Otherwise,
      the integration can’t recognize it.

# Importing Data When Using Salesforce B2C Commerce

If you import data that’s used by the B2C Commerce integration, such as product or shopper data, keep it synchronized with your B2C Commerce data. Otherwise, the integration can’t recognize it.

For example, when the integration creates an OrderItem record, it searches for a Product2 record whose ProductCode or StockKeepingUnit matches the product ID in the order data. If you import catalog product data and the ProductCode and StockKeepingUnit values don’t match the product ID values in B2C Commerce, the integration can’t recognize those products. In that case, the integration can add the wrong products to orders or create duplicate Product2 records.

This table lists some of the data fields that the integration uses to look up records. If you import or create these objects, keep them synchronized with your B2C Commerce data.

| Order Management Object Field | B2C Commerce Data |
| --- | --- |
| OrderDeliveryMethod.ReferenceID | Shipping Method ID |
| Product2.ProductCode or Product2.StockKeepingUnit | Product ID |
| PaymentGateway.ReferenceID | Payment Processor ID |
| SalesChannel.SalesChannelName | Site ID or Domain ID |
| For a person account: Account.PersonEmailFor other accounts: Contact.Email field | Customer Email Address |
| Account.Name | For an individual shopper not using a person account: Customer Billing Address First Name and Last Name concatenatedFor a business shopper: Customer Billing Address Company Name |

## The OrderSummary ExternalReferenceIdentifier Field

Starting in API version 55.0, the B2C Commerce integration uses the OrderSummary.ExternalReferenceIdentifier field to prevent duplicate orders. When an order is ingested from B2C Commerce, this field is set to B2C realm ID + "\_" + B2C instance ID + "@" + B2C Commerce catalog/domain ID + "@" + B2C Commerce order number. If you create other orders in Salesforce, give them unique ExternalReferenceIdentifier values.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

If you use High Scale Orders, the PendingOrderSummary.ExternalReferenceIdentifier field is also set.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

#### Note

In API version 55.0, the standard B2C Commerce integration set this value to "SFDC" + "@" + nanotime + "@" + UUID and High Scale Orders set it to the value used in later versions.
