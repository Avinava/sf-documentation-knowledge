---
title: "High-Scale Orders and Deduplication"
domain: order-management-developer-guide-html
topic: high-scale-orders-and-deduplication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.122Z
estimatedTokens: 628
keywords: [High-Scale, Orders, Deduplication, uses, Pending, Order, Summaries, REST, API, summary, graphs, Entities, included, aren't, subject]
---

# High-Scale Orders and Deduplication

> High-Scale Orders uses the Pending Order Summaries REST API to create summaries from
    order summary graphs. Entities included in the request parameter aren't subject to deduplication
    rules.

# High-Scale Orders and Deduplication

High-Scale Orders uses the Pending Order Summaries REST API to create summaries from order summary graphs. Entities included in the request parameter aren't subject to deduplication rules.

If a request has entity details in the PurchaseSupportDetails section, the Pending Order Summaries REST API uses deduplication logic to determine whether to update an existing record or create a record. Duplicate entities within the request that aren't in the database won't be deduplicated.

Sending orders with inaccurate or outdated data can cause problems that are hard to fix later. Before sending orders to Salesforce Order Management, upload new information for Account, Contact, Product2, PricebookEntry, Promotion, WebStore, SalesChannel, and OrderDeliveryMethod.

This table lists the Pending Order Summaries REST API entities and their corresponding deduplication logic.

| Entity | Deduplication Logic |
| --- | --- |
| Account, Person Account, Contact | When you create Account, Person Account, and Contact Duplicate Rules and Matching Rules, the API calls these rules to find duplicates. For Contact, an AccountId is required to use duplication rules.For Person Account, Person Accounts must be enabled. |
| Pricebook2 | Only Standard Price Book lookup is supported. If a Pricebook2 node is included in the request, the Standard Price Book ID is queried and used. |
| Product2 | Deduplication is based on ProductCode. If an existing Product2 with the same ProductCode is found, it’s used. |
| PricebookEntry | For a single currency Salesforce org, deduplication is based on Pricebook2Id and Product2Id.For a multicurrency Salesforce org, deduplication is based on Pricebook2Id, Product2Id, and CurrencyIsoCode. If you don’t specify the CurrencyIsoCode, the default CurrencyIsoCode is used. |
| SalesChannel | Deduplication is based on the SalesChannelName field. |
| Promotion | Deduplication is based on the Name field. |
| WebStore | Deduplication is based on the ExternalReference field. |
| OrderDeliveryMethod | Deduplication is based on the ReferenceNumber field. |

#### See Also

-   [Pending Order Summaries](https://developer.salesforce.com/docs/atlas.en-us.242.0.chatterapi.meta/chatterapi/connect_resources_sfom_pending_order_summaries.htm "Pending Order Summaries - HTML (New Window)")

-   [High-Scale Orders](https://help.salesforce.com/s/articleView?id=commerce.om_high_scale_overview.htm&type=5&language=en_US "High-Scale Orders - HTML (New Window)")
