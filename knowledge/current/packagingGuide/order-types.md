---
title: "Order Types"
domain: packagingGuide
topic: order-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.707Z
estimatedTokens: 567
keywords: [Order, Channel, App, COA, choose, tells, Salesforce, how, process, products, select, correct, customer’s, needs]
---

# Order Types

> When you create an order in the Channel Order App (COA), you choose an order type that
    tells Salesforce how to process the products on the order. Learn how to select the correct type
    based on your customer’s needs.

# Order Types

When you create an order in the Channel Order App (COA), you choose an order type that tells Salesforce how to process the products on the order. Learn how to select the correct type based on your customer’s needs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Your agreement with Salesforce determines the order types available to you.

Order type reflects the stage of your relationship with the customer: beginning, middle, or end. Order type also determines when Salesforce activates or provisions the order for the customer.

| Type | Stage | Use To | Effective Date |
| --- | --- | --- | --- |
| Initial | Beginning | Submit a first order for a new customer. | The service start date that you specify on the order. |
| Add On | Middle | Add products or increase the number of licenses on a customer contract. | The service start date that you specify on the order. |
| Upgrade | Middle | Increase the quantity and price of licenses mid-contract, or upgrade a customer to a higher-priced product mid-contract. | The service start date that you specify on the order. |
| Reduction | Middle | Remove products, or decrease the number of licenses on a customer contract. | The customer’s contract renewal date.Notify Salesforce of the reduction according to the terms of your partnership agreement, usually at least 30 days before a contract renews. You can’t submit a reduction order within 5 days of a contract renewal date. |
| Renewal | Middle | Renew a contract that isn’t set to auto-renew, or change the price of existing products on contract renewal. | The customer’s contract renewal date. |
| Cancellation | End | End a contract with a customer and cancel all products. A cancellation order permanently removes your products from the customer’s org. | The customer’s contract renewal date.Notify Salesforce of the cancellation according to the terms of your partnership agreement, usually at least 30 days before a contract renews. You can’t submit a cancellation order within 5 days of a contract renewal date. |
| New Cloud | Beginning | Submit a new order for an existing customer for a second, net-new cloud offering. | The service start date that you specify on the order. |
