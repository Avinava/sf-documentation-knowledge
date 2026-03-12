---
title: "Order Status"
domain: packagingGuide
topic: order-status
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.703Z
estimatedTokens: 431
keywords: [Order, Status, Channel, App, COA, Salesforce, assigns, help, track, progress, needed, resolve, issues, determines, actions]
---

# Order Status

> After you create an order in the Channel Order App (COA), Salesforce assigns an order
    status to help you track progress, and if needed, resolve issues. Order status also determines
    the actions that you can perform on an order, like editing or cloning.

# Order Status

After you create an order in the Channel Order App (COA), Salesforce assigns an order status to help you track progress, and if needed, resolve issues. Order status also determines the actions that you can perform on an order, like editing or cloning.

Here’s how Salesforce assigns order status.

| Status | Assigned When |
| --- | --- |
| Draft | You save your order, but don’t submit it to Salesforce.After you create, clone, or recall an order, its status is Draft by default. |
| Received | Salesforce receives your order, but hasn’t started processing it.You have 2 hours from the time Salesforce receives the order to recall it and edit products, license quantities, and pricing. |
| In Process | Salesforce is reviewing and processing your order. |
| Activated | Salesforce has processed your order and is ready to invoice you for revenue sharing.This status applies to:ISVforce orders with a future start date that don’t provision licenses in a customer’s orgProcessed OEM orders with a future start dateAll OEM and ISVforce cancellation and reduction orders |
| Provisioned | Salesforce has processed your order and is ready to invoice you for revenue sharing. |
| Error | Salesforce encounters an issue that prevents us from processing your order. We return the order and ask you to fix the issue before resubmitting. |

Order status determines what you can do with the order. You can perform these order status actions.

|  | Possible Actions |
| --- | --- |
| Order Status | Edit | Recall | Delete | Submit | Clone |
| Draft | * |  | * | * | * |
| Received | * | * |  |  | * |
| In Process |  |  |  |  | * |
| Activated |  |  |  |  | * |
| Provisioned |  |  |  |  | * |
| Error |  |  |  |  | * |
