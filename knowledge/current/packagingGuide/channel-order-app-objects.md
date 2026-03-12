---
title: "Channel Order App Objects"
domain: packagingGuide
topic: channel-order-app-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.679Z
estimatedTokens: 1149
keywords: [Channel, Order, App, Objects, start, working, COA, app’s, Understanding, contain, easier, accurate, orders, processed, quickly]
---

# Channel Order App Objects

> Before you start working with the Channel Order App (COA), learn about the app’s
    objects. Understanding what the objects contain makes it easier to create accurate orders that
    are processed quickly by Salesforce.

# Channel Order App Objects

Before you start working with the Channel Order App (COA), learn about the app’s objects. Understanding what the objects contain makes it easier to create accurate orders that are processed quickly by Salesforce.

| Name | Description |
| --- | --- |
| Customer | Contains details about a customer who’s purchased your product, such as the billing address and Salesforce org ID.When you create an initial order in the order submission wizard, the COA creates a customer record using the customer information that you provide. |
| Partner Product Catalog | Contains a product in your catalog that you can sell to customers. For example, more API calls or an increase in storage in the customer’s org.Salesforce configures the products in your catalog based on your partnership agreement. During setup, you import your catalog to the COA. Unless permitted by your agreement, you can’t edit your product catalog. |
| Partner Contract Terms | Contains the contract terms that apply to a product. For example, the default length of a contract and how often a customer is billed.Salesforce configures contract terms based on your partnership agreement. During setup, you import the terms to the COA. Unless permitted by your agreement, you can’t edit your contract terms. |
| Service Order | Contains information about an order that you’re submitting to Salesforce. For example, the date the customer signed the Salesforce agreement.When you create an order in the order submission wizard, the COA creates a service order automatically. |
| Service Order Detail | Contains deal-specific information about a product line item on an order. For example, the number of licenses the customer is buying and the price per license.When you add products to an order in the order submission wizard, the COA configures service order details automatically. You can’t access service order detail records directly unless you submit orders with the Channel Order Apex API. |

To understand how these objects fit together, let’s look at an example.

You sell a human resources app on AppExchange, and a new customer decides to buy some licenses. After you work out the terms of the purchase with the customer, you use the License Management App (LMA) to provision the licenses in their org. Then you submit an order in the COA to tell Salesforce about the sale.

-   On the Service Orders tab, you launch the order submission wizard. The COA creates a service order record.
-   You provide details about the customer, like the billing address. The COA uses these details to create a customer record. In the future, if the customer requests changes to the subscription, you can look up and reuse the details that you provided.
-   You select the contract terms that apply to the order. The COA looks up the corresponding partner contract terms record.
-   You select the product from your catalog that you sold. The COA looks up the corresponding partner product catalog record.
-   You tell us how many licenses you sold and for how much. The COA configures the service order details for the order.
-   You select a start date, review the order, and submit it to Salesforce for invoicing. The COA adds the service order record to the list of existing orders.

## Other Channel Order App Objects

Salesforce uses other objects to help process and manage your orders or to assist with debugging. Most of the time, you don’t see or interact with these objects.

| Name | Description |
| --- | --- |
| Customer Order Product History | Contains deal-specific information about an active product on an order, along with the corresponding customer details.After Salesforce activates or provisions an order, we create a customer order product history record for each product on the order. These records become part of the customer’s order history, which includes all active products associated with the customer. You can’t access customer order product history records directly. To see a customer’s order history, open the customer record in the COA and go to the Products related list. |
| Partner Pricebook Entry | Contains one or more products from a catalog.Salesforce uses partner pricebook entries to organize your product catalog. Unless you receive instructions from us, don’t modify the partner pricebook entries in your org. |
| Service Order Log | Stores information about the performance of the COA for debugging purposes.Salesforce uses service order logs to troubleshoot issues with the COA. Unless you receive instructions from us, don’t modify the service order logs in your org. |
