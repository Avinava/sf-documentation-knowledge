---
title: "Creating Order Summaries for Imported Orders"
domain: order-management-developer-guide-html
topic: creating-order-summaries-for-imported-orders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.086Z
estimatedTokens: 518
keywords: [Creating, Order, Summaries, Imported, Orders, few, ways]
---

# Creating Order Summaries for Imported Orders

> You can create order summaries for imported orders in a few
      ways.

# Creating Order Summaries for Imported Orders

You can create order summaries for imported orders in a few ways.

For details about each method, see the corresponding developer guides. To learn about using different types of flows, see the [Salesforce Flow Developer Center](https://developer.salesforce.com/developer-centers/flow "HTML (New Window)").

| Method | Pros | Cons |
| --- | --- | --- |
| Flow triggered by a platform event | Simple to implementAsynchronous transaction separate from order creation improves performance | No parallel execution; orders processed one at a timeNo control of timingAsynchronous execution requires complex error handling |
| Flow triggered by a record change (Order Status: Draft → Activated) | Simple to implementAllows a multithreaded approach for creating order summaries in parallel with ordersA Composite API call can create an order and order summary in the same transaction, allowing simpler error handling; for example:Create the Order record and set its Status to Draft.Create the supporting records, such as order items and order delivery groups.Change the order’s Status to Activated. That triggers the Create Order Summary flow to run on that order. | When the order and order summary are created in the same transaction, and the order summary fails, the order also failsLarge transactionsLowest performance method |
| Apex triggered by a platform event | Asynchronous transaction separate from order creation improves performanceAllows a multithreaded approach for creating order summaries in parallel with ordersBest performance method | No control of timingAsynchronous execution requires complex error handling |
| Scheduled Apex job | Allows controlled batch execution | Subject to Apex limits on the number of records processedRequires programmatic identification of the orders to processRuns even when no orders need processing |
| Direct calls to API resources | Allows external controlSome clients allow parallel processing | Subject to API call limitsRequires external app design, authentication, and so on |
